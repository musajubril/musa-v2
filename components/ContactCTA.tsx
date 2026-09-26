"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Mail, Check, Send } from "lucide-react";

export function ContactCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#111112] border-t border-[#2A2A2E] py-28 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#C8A97E]" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
            INITIATE ENGAGEMENT // 006
          </span>
        </div>

        <h2 className="font-serif text-[#F5F4F0] fluid-display-xl font-normal tracking-[-0.02em] leading-tight mb-6">
          Have something worth building?
        </h2>

        <p className="font-sans text-[#DCDAD5] text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          I&apos;m always interested in thoughtful teams and ambitious systems. Whether you&apos;re
          building a new platform, scaling an existing codebase, or looking for a
          full-stack engineer—let&apos;s talk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${portfolioData.personal.contact.email}?subject=Project%20Inquiry%20-%20Musa%20Jubril`}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#F5F4F0] text-[#111112] font-mono text-xs tracking-[0.08em] uppercase font-medium hover:bg-[#DCDAD5] transition-all"
          >
            <span>Send Direct Email</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#2A2A2E] bg-transparent text-[#F5F4F0] font-mono text-xs tracking-[0.08em] uppercase hover:bg-[#18181A] hover:border-[#8E8D8A] transition-all"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-[#8E8D8A] uppercase tracking-[0.1em]">
          <span>{portfolioData.personal.contact.email}</span>
          <span>•</span>
          <span>LAGOS, NIGERIA</span>
          <span>•</span>
          <span>REMOTE WORLDWIDE</span>
        </div>
      </div>

      {/* Architectural Contact Form */}
      <div className="max-w-2xl mx-auto border border-[#2A2A2E] bg-[#18181A] p-8 md:p-12">
        <div className="border-b border-[#2A2A2E] pb-4 mb-8 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#C8A97E]">
            DIRECT TRANSMISSION FORM
          </span>
          <span className="font-mono text-[10px] text-[#8E8D8A] uppercase">
            EST. RESPONSE &lt; 24H
          </span>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-10 h-10 border border-[#C8A97E] flex items-center justify-center text-[#C8A97E]">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-2xl text-[#F5F4F0]">Message Received</h4>
            <p className="font-sans text-xs text-[#DCDAD5] max-w-sm">
              Thank you for reaching out. Your transmission has been recorded. I will review
              your project specifications and reply promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8D8A]">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Vance, Studio Arch"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-transparent border-b border-[#2A2A2E] focus:border-[#F5F4F0] focus:outline-none py-2 text-sm text-[#F5F4F0] placeholder-[#8E8D8A]/50 transition-colors font-sans"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8D8A]">
                  Return Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@studioarch.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-transparent border-b border-[#2A2A2E] focus:border-[#F5F4F0] focus:outline-none py-2 text-sm text-[#F5F4F0] placeholder-[#8E8D8A]/50 transition-colors font-sans"
                />
              </div>
            </div>

            {/* Scope / Subject */}
            <div className="flex flex-col space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8D8A]">
                Project Scope / Engagement Type
              </label>
              <input
                type="text"
                placeholder="e.g. Full-Stack SaaS MVP, Angular Migration, Contract Role"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="bg-transparent border-b border-[#2A2A2E] focus:border-[#F5F4F0] focus:outline-none py-2 text-sm text-[#F5F4F0] placeholder-[#8E8D8A]/50 transition-colors font-sans"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8D8A]">
                Technical Overview & Timeline
              </label>
              <textarea
                rows={4}
                required
                placeholder="Briefly describe the product vision, tech stack requirements, and approximate schedule..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="bg-transparent border-b border-[#2A2A2E] focus:border-[#F5F4F0] focus:outline-none py-2 text-sm text-[#F5F4F0] placeholder-[#8E8D8A]/50 transition-colors font-sans resize-none"
              />
            </div>

            <div className="pt-2 flex justify-between items-center">
              <span className="font-mono text-[10px] text-[#8E8D8A]">
                OBSIDIAN PROTOCOL // ENCRYPTED
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5F4F0] text-[#111112] font-mono text-xs uppercase tracking-[0.08em] font-medium hover:bg-[#DCDAD5] transition-colors cursor-pointer"
              >
                <span>Dispatch Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
