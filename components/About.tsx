"use client";

import React, { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { Code2, Server, Workflow, Terminal } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLElement | null>(null);

  const getPillarIcon = (idx: string) => {
    switch (idx) {
      case "01":
        return <Code2 className="w-4 h-4 text-[#C8A97E]" />;
      case "02":
        return <Server className="w-4 h-4 text-[#C8A97E]" />;
      case "03":
        return <Workflow className="w-4 h-4 text-[#C8A97E]" />;
      case "04":
      default:
        return <Terminal className="w-4 h-4 text-[#C8A97E]" />;
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#111112] border-t border-[#2A2A2E] py-28 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Header & Quick Facts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        {/* Left: About Statement */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#C8A97E]" />
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
              ABOUT // 004
            </span>
          </div>

          <h2 className="font-serif text-[#F5F4F0] fluid-display-lg font-normal tracking-[-0.015em] mb-8 leading-[1.12]">
            Building products from interface to infrastructure.
          </h2>

          <div className="space-y-5 text-sm md:text-base text-[#DCDAD5] font-sans leading-relaxed">
            <p>
              I&apos;m Musa Jubril, a Software Engineer with a focus on full-stack web
              development and maintainable engineering. I build production-grade web
              systems for real users, real payments, and real business logic.
            </p>
            <p>
              My work spans interface design, application architecture, backend APIs,
              authentication, real-time messaging, database modeling, and deployment
              pipelines. Always focused on intentional implementation, structural
              integrity, and maintainability at every stage of the lifecycle.
            </p>
          </div>

          {/* Primary Stacks */}
          <div className="flex flex-wrap gap-2 pt-6">
            {["ANGULAR", "REACT", "NEXT.JS", "NODE.JS", "EXPRESS", "MONGODB"].map(
              (item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] tracking-[0.08em] px-3 py-1 border border-[#2A2A2E] bg-[#18181A] text-[#8E8D8A] uppercase"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right: Architectural Dossier / Quick Facts */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="border border-[#2A2A2E] bg-[#18181A] p-6 space-y-4">
            <div className="border-b border-[#2A2A2E] pb-3 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8E8D8A]">
                REGISTER DOSSIER
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#C8A97E]">
                ID: MJ-2026
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-[#2A2A2E]/60 pb-2">
                <span className="text-[#8E8D8A] uppercase">Full Name</span>
                <span className="text-[#F5F4F0] font-medium">{portfolioData.personal.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#2A2A2E]/60 pb-2">
                <span className="text-[#8E8D8A] uppercase">Role</span>
                <span className="text-[#F5F4F0] font-medium">Full-Stack Engineer</span>
              </div>
              <div className="flex justify-between border-b border-[#2A2A2E]/60 pb-2">
                <span className="text-[#8E8D8A] uppercase">Location</span>
                <span className="text-[#F5F4F0] font-medium">Lagos, Nigeria</span>
              </div>
              <div className="flex justify-between border-b border-[#2A2A2E]/60 pb-2">
                <span className="text-[#8E8D8A] uppercase">Education</span>
                <span className="text-[#F5F4F0] font-medium">B.Sc. Computer Science (LASU)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#8E8D8A] uppercase">Availability</span>
                <span className="text-emerald-400 font-medium">Open for Contracts / Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Architecture Pillars */}
      <div>
        <div className="border-b border-[#2A2A2E] pb-4 mb-8 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#8E8D8A]">
            CORE CAPABILITY QUADRANT
          </span>
          <span className="font-mono text-[11px] text-[#C8A97E] uppercase">
            END-TO-END ENGINEERING
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.architecturePillars.map((pillar) => (
            <div
              key={pillar.index}
              className="border border-[#2A2A2E] bg-[#18181A] p-6 md:p-8 flex flex-col justify-between hover:border-[#8E8D8A] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#2A2A2E] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    {getPillarIcon(pillar.index)}
                    <span className="font-serif text-lg text-[#F5F4F0] font-medium">
                      {pillar.title}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#8E8D8A]">
                    {pillar.index}
                  </span>
                </div>

                <p className="font-sans text-xs md:text-sm text-[#DCDAD5] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#2A2A2E]/60">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-[0.06em] px-2 py-0.5 border border-[#2A2A2E] bg-[#111112] text-[#8E8D8A] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
