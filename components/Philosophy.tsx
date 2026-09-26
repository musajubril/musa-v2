"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { portfolioData } from "@/data/portfolio";

export function Philosophy() {
  const containerRef = useRef<HTMLElement | null>(null);
  const wordsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  const mantraWords = portfolioData.philosophyMantra;

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          isMobile: "(max-width: 767px) or (prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          if (isDesktop) {
            // Animate each mantra word sequentially scrubbed to the scroll
            wordsRef.current.forEach((wordEl) => {
              if (!wordEl) return;

              gsap.fromTo(
                wordEl,
                {
                  opacity: 0.18,
                  color: "#353436",
                  x: -20,
                },
                {
                  opacity: 1,
                  color: "#F5F4F0",
                  x: 0,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: wordEl,
                    start: "top 80%",
                    end: "top 45%",
                    scrub: true,
                  },
                }
              );
            });
          } else {
            // Mobile or reduced motion: simple trigger
            wordsRef.current.forEach((wordEl) => {
              if (!wordEl) return;
              gsap.set(wordEl, { opacity: 1, color: "#F5F4F0", x: 0 });
            });
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#111112] border-t border-[#2A2A2E] py-28 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-8">
        <span className="w-1.5 h-1.5 bg-[#C8A97E]" />
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
          CORE CREED // 003
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Scroll-Scrubbed Monumental Mantra */}
        <div className="lg:col-span-7 flex flex-col space-y-2 select-none">
          {mantraWords.map((word, idx) => (
            <h2
              key={idx}
              ref={(el) => {
                wordsRef.current[idx] = el;
              }}
              className="font-serif fluid-mantra font-normal uppercase tracking-[-0.03em] leading-none transition-colors duration-300 will-change-transform"
            >
              {word}
            </h2>
          ))}
        </div>

        {/* Right Side: Architectural Principles & Rationale */}
        <div className="lg:col-span-5 flex flex-col space-y-6 pt-4 lg:pt-8">
          <div className="border border-[#2A2A2E] bg-[#18181A] p-6 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C8A97E] block">
              Architectural Principle // 01
            </span>
            <h3 className="font-serif text-xl text-[#F5F4F0] leading-snug">
              Pragmatic engineering over theoretical purity.
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#DCDAD5] leading-relaxed">
              Architecture should evolve organically with product demand. Premature
              abstractions introduce technical debt before product-market validation. Clean,
              readable code always beats speculative cleverness.
            </p>
          </div>

          <div className="border border-[#2A2A2E] bg-[#18181A] p-6 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C8A97E] block">
              Production Discipline // 02
            </span>
            <h3 className="font-serif text-xl text-[#F5F4F0] leading-snug">
              Reliability is the foundational feature.
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#DCDAD5] leading-relaxed">
              Rigorous Git hygiene, end-to-end type safety, structured logging, and
              resilient database indexing. Software without observability is software
              hoping not to fail.
            </p>
          </div>

          <div className="border-t border-[#2A2A2E] pt-6 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#8E8D8A]">
              ESTABLISHED IN LAGOS, NIGERIA
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#C8A97E]">
              SINCE 2019
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
