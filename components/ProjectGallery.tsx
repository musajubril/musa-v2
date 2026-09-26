"use client";

import React, { useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { X, CheckCircle2, ArrowUpRight, Layers } from "lucide-react";

export function ProjectGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop layout with pinned horizontal scroll and image parallax
      mm.add(
        {
          isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
          isMobile: "(max-width: 1023px), (prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          if (isDesktop) {
            const getScrollDistance = () => {
              if (!track) return 0;
              // Ensure the last card is fully brought into the viewport with padding
              return Math.max(0, track.scrollWidth - window.innerWidth + 180);
            };

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                start: "top top",
                // Generous vertical scroll distance plus buffer so user can read before unpinning
                end: () => `+=${getScrollDistance() + 650}`,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            // Translate the track horizontally across all cards
            tl.to(track, {
              x: () => -getScrollDistance(),
              ease: "none",
              duration: 1,
            });

            // Resting pause at the end of the scroll: keeps the final card visible before unpinning
            tl.to({}, { duration: 0.25 });

            // Parallax effect on card images
            const images = track.querySelectorAll(".card-image");
            images.forEach((img) => {
              gsap.fromTo(
                img,
                { xPercent: -5 },
                {
                  xPercent: 5,
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollDistance() + 650}`,
                    scrub: 1,
                  },
                }
              );
            });

            // Refresh ScrollTrigger once fonts and layout have calculated
            const timer = setTimeout(() => {
              ScrollTrigger.refresh();
            }, 350);

            return () => {
              clearTimeout(timer);
              tl.kill();
            };
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full bg-[#111112] border-t border-[#2A2A2E] py-16 lg:py-10 min-h-screen flex flex-col justify-center overflow-hidden z-10"
    >
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full mb-8 lg:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A2A2E] pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#C8A97E]" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
                SELECTED WORK // 002
              </span>
            </div>
            <h2 className="font-serif text-[#F5F4F0] fluid-display-lg font-normal tracking-[-0.015em]">
              Built with clarity, product thinking, and craft.
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <span className="font-mono text-xs text-[#8E8D8A] tracking-[0.1em] uppercase">
              PINNED REGISTER [ {portfolioData.projects.length} PROJECTS ]
            </span>
            <span className="font-mono text-xs text-[#C8A97E] tracking-[0.1em] uppercase animate-pulse">
              SCROLL DOWN ➔
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Cards Track */}
      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar">
        <div
          ref={trackRef}
          className="flex gap-8 px-6 md:px-12 w-max items-stretch pb-6 lg:pb-0"
        >
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isFirst={idx === 0}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}

          {/* End of Gallery Archive Card */}
          <div className="w-[320px] md:w-[380px] lg:h-[480px] flex-shrink-0 border border-[#2A2A2E] bg-[#18181A] p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C8A97E]" />
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#8E8D8A]">
                  Repository Archive
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#F5F4F0]">
                More projects &amp; engineering experiments
              </h3>
              <p className="font-sans text-xs text-[#DCDAD5] leading-relaxed">
                Including Mithaq relationship questionnaire engine, Telegram n8n AI
                automation pipeline, Movie Hub, and VIDAF corporate portals.
              </p>
            </div>

            <div className="pt-6 border-t border-[#2A2A2E]">
              <a
                href={portfolioData.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#F5F4F0] text-[#111112] font-mono text-xs uppercase tracking-[0.08em] font-medium hover:bg-[#DCDAD5] transition-colors"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Detail Modal (Print-like sharp overlay) */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#111112]/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#18181A] border border-[#2A2A2E] p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#2A2A2E] pb-4 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C8A97E]">
                  SYSTEM ARCHITECTURE SPECIFICATION
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#F5F4F0] mt-1">
                  {activeProject.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1 border border-[#2A2A2E] text-[#8E8D8A] hover:text-[#F5F4F0] hover:border-[#8E8D8A] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="font-sans text-[#DCDAD5] text-sm leading-relaxed mb-6">
              {activeProject.description}
            </p>

            {/* Metrics */}
            {activeProject.metrics && (
              <div className="border border-[#2A2A2E] bg-[#111112] p-4 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8E8D8A] block mb-1">
                  Verified Production Metrics
                </span>
                <span className="font-mono text-sm text-[#C8A97E]">
                  {activeProject.metrics}
                </span>
              </div>
            )}

            {/* Features */}
            {activeProject.features && (
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8E8D8A] block mb-3">
                  Delivered Features &amp; Systems
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 border border-[#2A2A2E] bg-[#111112]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A97E] flex-shrink-0" />
                      <span className="font-mono text-xs text-[#DCDAD5]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8E8D8A] block mb-3">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] tracking-[0.06em] px-2.5 py-1 border border-[#2A2A2E] bg-[#111112] text-[#DCDAD5] uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#2A2A2E] flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2 bg-[#F5F4F0] text-[#111112] font-mono text-xs uppercase tracking-[0.08em] font-medium hover:bg-[#DCDAD5] transition-colors"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
