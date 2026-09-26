"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  isFirst?: boolean;
  onSelect?: (project: ProjectItem) => void;
}

export function ProjectCard({
  project,
  index,
  isFirst = false,
  onSelect,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const formattedIndex = String(index + 1).padStart(3, "0");

  return (
    <article
      ref={cardRef}
      className="project-card relative w-[88vw] md:w-[720px] lg:w-[860px] flex-shrink-0 border border-[#2A2A2E] bg-[#18181A] flex flex-col justify-between overflow-hidden group select-none"
    >
      {/* Top Header Strip */}
      <div className="flex items-center justify-between border-b border-[#2A2A2E] px-6 py-3 bg-[#111112]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#C8A97E] font-medium">
            INDEX // {formattedIndex}
          </span>
          <span className="h-3 w-[1px] bg-[#2A2A2E]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8D8A]">
            {project.type}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.status && (
            <span className="font-mono text-[10px] tracking-[0.08em] px-2 py-0.5 border border-[#2A2A2E] bg-[#18181A] text-[#DCDAD5] uppercase">
              {project.status}
            </span>
          )}
          {project.year && (
            <span className="font-mono text-[10px] tracking-[0.08em] text-[#8E8D8A]">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* Media Viewport with subtle parallax inner container */}
      <div className="relative w-full aspect-[16/9] md:aspect-[16/8.5] overflow-hidden border-b border-[#2A2A2E] bg-[#0e0e0f]">
        <div className="card-image-wrap absolute inset-[-8%] w-[116%] h-[116%]">
          <Image
            src={project.image}
            alt={`${project.name} presentation mockup`}
            fill
            priority={isFirst}
            fetchPriority={isFirst ? "high" : undefined}
            loading={isFirst ? "eager" : "lazy"}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 700px, 860px"
            className="card-image object-cover object-center filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 will-change-transform"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181A]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Narrative & Specifications Body */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-6">
        <div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <h3 className="font-serif text-[#F5F4F0] text-2xl md:text-3xl font-normal tracking-tight">
              {project.name}
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#8E8D8A]">
              {project.role}
            </span>
          </div>

          <p className="font-sans text-[#DCDAD5] text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Architectural Features */}
          {project.features && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#2A2A2E]">
              {project.features.slice(0, 4).map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A97E] flex-shrink-0" />
                  <span className="font-mono text-[11px] tracking-[0.02em] text-[#DCDAD5]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack & Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#2A2A2E]">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-[0.06em] px-2 py-1 border border-[#2A2A2E] bg-[#111112] text-[#8E8D8A] uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelect?.(project)}
            className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 border border-[#2A2A2E] bg-[#111112] text-[#F5F4F0] hover:bg-[#F5F4F0] hover:text-[#111112] font-mono text-[11px] tracking-[0.08em] uppercase transition-colors cursor-pointer"
          >
            <span>View Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
