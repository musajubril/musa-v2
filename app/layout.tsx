import type { Metadata } from "next";
import { EB_Garamond, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Musa Jubril — Full-Stack Software Developer",
  description:
    "Frontend-focused Full-Stack Developer building scalable web applications with Angular, React, Next.js, Node.js and MongoDB. Based in Lagos, Nigeria.",
  keywords: [
    "Musa Jubril",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Angular Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Software Engineer Lagos",
  ],
  authors: [{ name: "Musa Jubril" }],
  openGraph: {
    title: "Musa Jubril — Full-Stack Software Developer",
    description:
      "Frontend-focused Full-Stack Developer building scalable web applications with Angular, React, Next.js, Node.js and MongoDB.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${manrope.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#111112] text-[#F5F4F0] antialiased selection:bg-[#C8A97E] selection:text-[#111112]">
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
