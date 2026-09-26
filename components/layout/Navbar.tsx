"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLenis } from "@/components/layout/SmoothScroll";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const { lenis } = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(id, { offset: -60, duration: 1.2 });
    } else {
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "bg-[#111112]/90 backdrop-blur-md border-[#2A2A2E]"
          : "bg-[#111112]/40 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex flex-col group focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("body");
          }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#F5F4F0] group-hover:text-[#C8A97E] transition-colors font-medium">
            Musa Jubril
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8E8D8A]">
            Full-Stack Developer
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollTo("#work")}
            className="font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] transition-colors cursor-pointer"
          >
            Selected Work
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("#experience")}
            className="font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] transition-colors cursor-pointer"
          >
            Register
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right side Status & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 border border-[#2A2A2E] bg-[#18181A] px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.08em] text-[#8E8D8A] uppercase">
              Available for select projects
            </span>
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-[#F5F4F0] text-[#111112] font-mono text-xs tracking-[0.08em] uppercase font-medium hover:bg-[#DCDAD5] transition-colors cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#DCDAD5] hover:text-[#F5F4F0] border border-[#2A2A2E] bg-[#18181A]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2A2A2E] bg-[#111112] px-6 py-6 space-y-4">
          <div className="flex items-center gap-2 border border-[#2A2A2E] bg-[#18181A] px-3 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.08em] text-[#8E8D8A] uppercase">
              Available for select projects
            </span>
          </div>
          <button
            onClick={() => scrollTo("#work")}
            className="block w-full text-left font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] py-2"
          >
            Selected Work
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="block w-full text-left font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("#experience")}
            className="block w-full text-left font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] py-2"
          >
            Register
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="block w-full text-left font-mono text-xs uppercase tracking-[0.1em] text-[#DCDAD5] hover:text-[#C8A97E] py-2"
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full text-center px-4 py-3 bg-[#F5F4F0] text-[#111112] font-mono text-xs tracking-[0.08em] uppercase font-medium"
            >
              Get in Touch ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
