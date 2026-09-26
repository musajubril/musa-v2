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
      className="project-card relative w-[88vw] sm:w-[540px] md:w-[680px] lg:w-[940px] lg:h-[480px] flex-shrink-0 border border-[#2A2A2E] bg-[#18181A] flex flex-col lg:flex-row overflow-hidden group select-none"
    >
      {/* Left Column: Editorial Specifications (Desktop 44%, Mobile 100%) */}
      <div className="w-full lg:w-[44%] p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2A2A2E] bg-[#141416]">
        <div>
          {/* Header Metadata */}
          <div className="flex items-center justify-between border-b border-[#2A2A2E] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#C8A97E] font-medium">
                INDEX // {formattedIndex}
              </span>
              <span className="h-3 w-[1px] bg-[#2A2A2E]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#8E8D8A]">
                {project.type}
              </span>
            </div>

            {project.status && (
              <span className="font-mono text-[9px] tracking-[0.08em] px-2 py-0.5 border border-[#2A2A2E] bg-[#111112] text-[#DCDAD5] uppercase">
                {project.status}
              </span>
            )}
          </div>

          {/* Title & Role */}
          <h3 className="font-serif text-[#F5F4F0] text-2xl lg:text-3xl font-normal tracking-tight mb-2">
            {project.name}
          </h3>

          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8E8D8A] block mb-4">
            {project.role} {project.year ? `• ${project.year}` : ""}
          </span>

          {/* Description */}
          <p className="font-sans text-[#DCDAD5] text-xs lg:text-sm leading-relaxed mb-4 line-clamp-4">
            {project.description}
          </p>

          {/* Key Features List */}
          {project.features && (
            <div className="space-y-1.5 pt-3 border-t border-[#2A2A2E]/60 hidden sm:block">
              {project.features.slice(0, 3).map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-[#C8A97E] flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[0.02em] text-[#DCDAD5] truncate">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech chips & CTA */}
        <div className="pt-4 border-t border-[#2A2A2E] flex flex-col gap-3">
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-[0.06em] px-1.5 py-0.5 border border-[#2A2A2E] bg-[#111112] text-[#8E8D8A] uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelect?.(project)}
            className="w-full inline-flex items-center justify-between px-3 py-2 border border-[#2A2A2E] bg-[#111112] text-[#F5F4F0] hover:bg-[#F5F4F0] hover:text-[#111112] font-mono text-[10px] uppercase tracking-[0.08em] transition-colors cursor-pointer"
          >
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Right Column: Media Viewport (Desktop 56%, Mobile 100%) */}
      <div className="relative w-full lg:w-[56%] aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-[#0e0e0f]">
        <div className="card-image-wrap absolute inset-[-6%] w-[112%] h-[112%]">
          <Image
            src={project.image}
            alt={`${project.name} presentation mockup`}
            fill
            priority={isFirst}
            fetchPriority={isFirst ? "high" : undefined}
            loading={isFirst ? "eager" : "lazy"}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 550px"
            className="card-image object-cover object-center filter contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 will-change-transform"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181A]/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </article>
  );
}
