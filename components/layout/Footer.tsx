import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0e0e0f] border-t border-[#2A2A2E] py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b border-[#2A2A2E] pb-12">
          {/* Brand & Summary */}
          <div className="flex flex-col max-w-md">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#F5F4F0] font-medium mb-1">
              Musa Jubril
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8D8A] mb-4">
              Full-Stack Software Developer
            </span>
            <p className="font-sans text-xs text-[#8E8D8A] leading-relaxed">
              Crafting resilient web architectures, high-performance user interfaces, and
              production backend systems. Based in Ikeja, Lagos, Nigeria. Available for
              select engineering opportunities worldwide.
            </p>
          </div>

          {/* Navigation & Networks */}
          <div className="flex flex-wrap gap-12 font-mono text-xs uppercase tracking-[0.1em]">
            <div className="flex flex-col space-y-3">
              <span className="text-[#C8A97E] text-[10px]">Navigation</span>
              <a href="#work" className="text-[#8E8D8A] hover:text-[#F5F4F0] transition-colors">
                Selected Work
              </a>
              <a href="#about" className="text-[#8E8D8A] hover:text-[#F5F4F0] transition-colors">
                About & Dossier
              </a>
              <a href="#experience" className="text-[#8E8D8A] hover:text-[#F5F4F0] transition-colors">
                Chronology
              </a>
              <a href="#contact" className="text-[#8E8D8A] hover:text-[#F5F4F0] transition-colors">
                Contact
              </a>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="text-[#C8A97E] text-[10px]">Networks</span>
              <a
                href={portfolioData.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E8D8A] hover:text-[#F5F4F0] transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={portfolioData.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E8D8A] hover:text-[#F5F4F0] transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.contact.email}`}
                className="text-[#8E8D8A] hover:text-[#F5F4F0] transition-colors flex items-center gap-1"
              >
                <span>Email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Musa-Jubril-Resume.pdf"
                className="text-[#8E8D8A] hover:text-[#C8A97E] transition-colors flex items-center gap-1"
              >
                <span>Download CV</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[#8E8D8A] uppercase tracking-[0.08em]">
          <span>© 2026 Musa Jubril. All Rights Reserved.</span>
          <span>Designed with Archival Editorial Craft &amp; Obsidian Precision</span>
        </div>
      </div>
    </footer>
  );
}
