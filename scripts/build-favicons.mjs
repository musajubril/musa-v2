import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to assemble standard Windows/Browser multi-resolution ICO file
function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved, must be 0
  header.writeUInt16LE(1, 2); // 1 = ICO format
  header.writeUInt16LE(count, 4); // Number of images

  const dirEntries = [];
  let offset = 6 + 16 * count;

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color palette (0 = no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Offset of image data
    offset += img.buffer.length;
    dirEntries.push(entry);
  }

  return Buffer.concat([header, ...dirEntries, ...images.map((img) => img.buffer)]);
}

async function generateFavicons() {
  const sourcePath = path.join(rootDir, 'public/brand/mj-logo.png');
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source logo not found at ${sourcePath}`);
  }

  const { data, info } = await sharp(sourcePath).raw().toBuffer({ resolveWithObject: true });

  // 1. Precise bounding box of monogram ink (< 220 brightness)
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      if (brightness < 220) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const logoW = maxX - minX + 1;
  const logoH = maxY - minY + 1;
  const cx = Math.round((minX + maxX) / 2);
  const cy = Math.round((minY + maxY) / 2);

  console.log(`Detected Monogram: ${logoW}x${logoH} centered at (${cx}, ${cy})`);

  // We want the monogram width to occupy 82% of the square canvas
  const squareDim = Math.round(logoW / 0.82);
  const cropLeft = Math.round(cx - squareDim / 2);
  const cropTop = Math.round(cy - squareDim / 2);

  // Extract high-resolution cropped source canvas
  const croppedSource = await sharp(sourcePath)
    .extract({
      left: Math.max(0, cropLeft),
      top: Math.max(0, cropTop),
      width: Math.min(info.width - cropLeft, squareDim),
      height: Math.min(info.height - cropTop, squareDim),
    })
    .resize(1024, 1024, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cData = croppedSource.data;
  const cWidth = croppedSource.info.width;
  const cHeight = croppedSource.info.height;

  // Render Master High-Res 1024x1024 Obsidian Linen Tile (#111112 background, #F5F4F0 linen monogram)
  // With fine border #2A2A2E at the perimeter
  const masterBuffer = Buffer.alloc(cWidth * cHeight * 4);

  for (let y = 0; y < cHeight; y++) {
    for (let x = 0; x < cWidth; x++) {
      const idx = (y * cWidth + x) * 4;
      const srcIdx = (y * cWidth + x) * croppedSource.info.channels;
      const r = cData[srcIdx], g = cData[srcIdx + 1], b = cData[srcIdx + 2];
      const brightness = (r + g + b) / (3 * 255);

      // inkWeight: 1 = black ink in source, 0 = white background
      const inkWeight = Math.max(0, Math.min(1, (0.88 - brightness) / 0.65));

      // Border condition (10px border on 1024px canvas ~ 1% hairline)
      const isBorder = (x < 10 || x >= cWidth - 10 || y < 10 || y >= cHeight - 10);

      // Linen: #F5F4F0 (245, 244, 240)
      // Obsidian: #111112 (17, 17, 18)
      // Border: #2A2A2E (42, 42, 46)
      const bgR = isBorder ? 42 : 17;
      const bgG = isBorder ? 42 : 17;
      const bgB = isBorder ? 46 : 18;

      masterBuffer[idx] = Math.round(bgR + inkWeight * (245 - bgR));
      masterBuffer[idx + 1] = Math.round(bgG + inkWeight * (244 - bgG));
      masterBuffer[idx + 2] = Math.round(bgB + inkWeight * (240 - bgB));
      masterBuffer[idx + 3] = 255;
    }
  }

  const masterSharp = sharp(masterBuffer, {
    raw: { width: cWidth, height: cHeight, channels: 4 },
  });

  // Generate target sizes:
  // 1. 16x16 PNG for ICO
  const buf16 = await masterSharp.clone().resize(16, 16, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();
  // 2. 32x32 PNG for ICO and icon.png
  const buf32 = await masterSharp.clone().resize(32, 32, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();
  // 3. 48x48 PNG for ICO
  const buf48 = await masterSharp.clone().resize(48, 48, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();
  // 4. 180x180 PNG for Apple Touch Icon
  const buf180 = await masterSharp.clone().resize(180, 180, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();
  // 5. 192x192 PNG for PWA / Android
  const buf192 = await masterSharp.clone().resize(192, 192, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();
  // 6. 512x512 PNG for high-res PWA & brand master
  const buf512 = await masterSharp.clone().resize(512, 512, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();

  // Create multi-resolution ICO file (16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 },
  ]);

  // Write outputs:
  // Next.js App Router root icons
  fs.writeFileSync(path.join(rootDir, 'app/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'app/icon.png'), buf32);
  fs.writeFileSync(path.join(rootDir, 'app/apple-icon.png'), buf180);

  // Public fallbacks
  fs.writeFileSync(path.join(rootDir, 'public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'public/icon.png'), buf32);
  fs.writeFileSync(path.join(rootDir, 'public/icon-192.png'), buf192);
  fs.writeFileSync(path.join(rootDir, 'public/icon-512.png'), buf512);
  fs.writeFileSync(path.join(rootDir, 'public/apple-icon.png'), buf180);
  fs.writeFileSync(path.join(rootDir, 'public/apple-touch-icon.png'), buf180);
  fs.writeFileSync(path.join(rootDir, 'public/brand/mj-favicon-512.png'), buf512);

  console.log('✅ Generated all favicon and icon assets successfully!');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
