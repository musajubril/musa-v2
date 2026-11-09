"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ChevronDown, ChevronUp, Sparkles, Award } from "lucide-react";

export function ExperienceRegister() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>("01");

  const toggleRow = (idx: string) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="experience"
      className="relative w-full bg-[#111112] border-t border-[#2A2A2E] py-28 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A2A2E] pb-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#C8A97E]" />
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
              PROFESSIONAL CHRONOLOGY // 005
            </span>
          </div>
          <h2 className="font-serif text-[#F5F4F0] fluid-display-lg font-normal tracking-[-0.015em]">
            Software beyond the interface.
          </h2>
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#8E8D8A]">
          INDEX REGISTER [ 2018 — 2026 ]
        </span>
      </div>

      {/* Editorial Table Register */}
      <div className="border-t border-[#2A2A2E] flex flex-col mb-16">
        {portfolioData.experienceRegister.map((item) => {
          const isExpanded = expandedIndex === item.index;

          return (
            <div
              key={item.index}
              className="border-b border-[#2A2A2E] transition-colors duration-150 hover:bg-[#18181A]"
            >
              {/* Row Header (Clickable) */}
              <button
                onClick={() => toggleRow(item.index)}
                className="w-full py-6 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left cursor-pointer group"
                aria-expanded={isExpanded}
              >
                {/* Left: Index & Company */}
                <div className="flex items-center gap-6 md:gap-8">
                  <span className="font-mono text-xs text-[#8E8D8A] tracking-[0.14em]">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#F5F4F0] group-hover:text-[#C8A97E] transition-colors">
                      {item.company}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#8E8D8A] block md:hidden mt-1">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Center / Right: Role & Period */}
                <div className="flex items-center gap-8 justify-between md:justify-end">
                  <span className="hidden md:block font-mono text-xs uppercase tracking-[0.08em] text-[#DCDAD5]">
                    {item.role}
                  </span>

                  <span className="font-mono text-xs tracking-[0.08em] text-[#8E8D8A]">
                    {item.period}
                  </span>

                  <div className="p-1 border border-[#2A2A2E] text-[#8E8D8A] group-hover:border-[#8E8D8A] group-hover:text-[#F5F4F0]">
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </button>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="px-4 md:px-14 pb-8 pt-4 border-t border-[#2A2A2E]/40 bg-[#141416]/50">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs font-mono text-[#8E8D8A]">
                    <span className="text-[#C8A97E]">{item.location}</span>
                    <span>{"//"}</span>
                    <span>{item.period}</span>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-[#DCDAD5] leading-relaxed max-w-3xl mb-4">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mb-5 max-w-3xl">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8E8D8A] block mb-2.5">
                        Key Accomplishments & Systems
                      </span>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 font-sans text-xs md:text-sm text-[#B5B3AD] leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-[0.06em] px-2 py-0.5 border border-[#2A2A2E] bg-[#111112] text-[#8E8D8A] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Technical Highlights Grid */}
      <div className="mb-16">
        <div className="border-b border-[#2A2A2E] pb-3 mb-6 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
            SELECTED TECHNICAL ACCOMPLISHMENTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-[#2A2A2E] bg-[#18181A] p-5">
            <span className="font-mono text-[10px] text-[#C8A97E] uppercase block mb-1">
              AWS Textract
            </span>
            <h4 className="font-serif text-base text-[#F5F4F0] mb-2">
              Document Pipeline
            </h4>
            <p className="font-sans text-xs text-[#8E8D8A] leading-relaxed">
              Integrated automated OCR and table extraction pipelines into production
              workflows for high-volume enterprise document processing.
            </p>
          </div>

          <div className="border border-[#2A2A2E] bg-[#18181A] p-5">
            <span className="font-mono text-[10px] text-[#C8A97E] uppercase block mb-1">
              Angular & UX
            </span>
            <h4 className="font-serif text-base text-[#F5F4F0] mb-2">
              ~35% Load Reduction
            </h4>
            <p className="font-sans text-xs text-[#8E8D8A] leading-relaxed">
              Architected modular UI components and optimized change detection strategies, cutting page load times by ~35%.
            </p>
          </div>

          <div className="border border-[#2A2A2E] bg-[#18181A] p-5">
            <span className="font-mono text-[10px] text-[#C8A97E] uppercase block mb-1">
              Node & Express
            </span>
            <h4 className="font-serif text-base text-[#F5F4F0] mb-2">
              API Reliability & Speed
            </h4>
            <p className="font-sans text-xs text-[#8E8D8A] leading-relaxed">
              Built resilient RESTful API endpoints and background processing queues, boosting system throughput and response times.
            </p>
          </div>

          <div className="border border-[#2A2A2E] bg-[#18181A] p-5">
            <span className="font-mono text-[10px] text-[#C8A97E] uppercase block mb-1">
              MongoDB Optimization
            </span>
            <h4 className="font-serif text-base text-[#F5F4F0] mb-2">
              Query & Schema Tuning
            </h4>
            <p className="font-sans text-xs text-[#8E8D8A] leading-relaxed">
              Streamlined document indexing and aggregation pipelines to accelerate data retrieval across enterprise records.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Milestones Strip */}
      <div className="border-t border-[#2A2A2E] pt-8">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-3.5 h-3.5 text-[#C8A97E]" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
            CHRONOLOGICAL MILESTONES
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {portfolioData.milestones.map((m, idx) => (
            <div
              key={idx}
              className="border border-[#2A2A2E] bg-[#18181A] p-4 flex flex-col justify-between"
            >
              <span className="font-mono text-[10px] text-[#C8A97E] mb-2">
                {m.date}
              </span>
              <div>
                <h5 className="font-serif text-sm text-[#F5F4F0] font-medium leading-snug">
                  {m.title}
                </h5>
                <p className="font-sans text-[11px] text-[#8E8D8A] mt-1 leading-normal">
                  {m.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
