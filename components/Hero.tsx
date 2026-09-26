"use client";

import React, { useRef } from "react";
import Image from "next/image";
import musaPhoto from "@/public/images/musa-editorial-framed.jpg";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { portfolioData } from "@/data/portfolio";
import { useLenis } from "@/components/layout/SmoothScroll";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement | null>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement | null>(null);
  const bioRef = useRef<HTMLParagraphElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const metadataRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { lenis } = useLenis();

  const scrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id, { offset: -60, duration: 1.2 });
    } else {
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isReducedMotion: "(prefers-reduced-motion: reduce)",
          canAnimate: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isReducedMotion } = context.conditions as {
            isReducedMotion: boolean;
            canAnimate: boolean;
          };

          if (isReducedMotion) {
            gsap.set(
              [
                headlineLine1Ref.current,
                headlineLine2Ref.current,
                bioRef.current,
                tagsRef.current,
                buttonsRef.current,
                metadataRef.current,
                cardRef.current,
              ],
              { opacity: 1, y: 0 }
            );
            return;
          }

          // Initial positions
          gsap.set([headlineLine1Ref.current, headlineLine2Ref.current], {
            yPercent: 120,
            opacity: 0,
          });
          gsap.set(
            [bioRef.current, tagsRef.current, buttonsRef.current, metadataRef.current],
            { opacity: 0, y: 24 }
          );
          gsap.set(cardRef.current, { opacity: 0, y: 35 });

          // Cinematic load timeline
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.to([headlineLine1Ref.current, headlineLine2Ref.current], {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.14,
            delay: 0.15,
          })
            .to(
              bioRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
              },
              "-=0.7"
            )
            .to(
              tagsRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
              },
              "-=0.6"
            )
            .to(
              buttonsRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
              },
              "-=0.6"
            )
            .to(
              cardRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: "power2.out",
              },
              "-=0.7"
            )
            .to(
              metadataRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
              },
              "-=0.6"
            );
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Subtle ambient gradient aura (hardware-accelerated, lightweight) */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#C8A97E]/[0.025] blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#353436]/[0.08] blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-auto">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-1.5 h-1.5 bg-[#C8A97E]" />
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D8A]">
              [ FULL-STACK SOFTWARE DEVELOPER ]
            </span>
          </div>

          {/* Primary Typography with Hidden Overflow Containers for Masked Slide Up */}
          <h1 className="font-serif text-[#F5F4F0] fluid-display-xl font-normal tracking-[-0.02em] leading-[1.08] mb-8">
            <span className="block overflow-hidden pb-1">
              <span ref={headlineLine1Ref} className="block will-change-transform">
                Designing clean
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span ref={headlineLine2Ref} className="block will-change-transform">
                digital experiences.
              </span>
            </span>
          </h1>

          {/* Bio copy */}
          <p
            ref={bioRef}
            className="font-sans text-[#DCDAD5] text-base md:text-lg leading-[1.75] max-w-[580px] mb-8"
          >
            I build thoughtful interfaces and product experiences with clarity, intent,
            and technical precision. Specializing in high-performance web systems from
            reactive frontend architecture to robust database backends.
          </p>

          {/* Architectural Tech Chips */}
          <div ref={tagsRef} className="flex flex-wrap gap-2 mb-10">
            {portfolioData.skillsList.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[11px] tracking-[0.08em] px-2.5 py-1 border border-[#2A2A2E] bg-[#18181A] text-[#8E8D8A] uppercase hover:border-[#8E8D8A] hover:text-[#F5F4F0] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("#work")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#F5F4F0] text-[#111112] font-mono text-xs tracking-[0.08em] uppercase font-medium hover:bg-[#DCDAD5] transition-all cursor-pointer"
            >
              <span>View Selected Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#2A2A2E] bg-transparent text-[#F5F4F0] font-mono text-xs tracking-[0.08em] uppercase hover:bg-[#18181A] hover:border-[#8E8D8A] transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Right Column: Archival Identity Card */}
        <div ref={cardRef} className="lg:col-span-5 flex flex-col">
          <div className="border border-[#2A2A2E] bg-[#18181A] p-4 flex flex-col">
            {/* Portrait Image Frame */}
            <div className="relative w-full aspect-[4/4.5] overflow-hidden border border-[#2A2A2E] bg-[#111112]">
              <Image
                src={musaPhoto}
                alt="Musa Jubril - Full-Stack Software Developer"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                className="object-cover object-center contrast-[1.02] hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181A] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Identity Register Metadata below photo */}
            <div className="pt-4 flex flex-col gap-2">
              <div className="flex items-center justify-between border-b border-[#2A2A2E] pb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8E8D8A]">
                  Identity Register // 001
                </span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#C8A97E]" />
                  <span className="w-1.5 h-1.5 bg-[#2A2A2E]" />
                  <span className="w-1.5 h-1.5 bg-[#2A2A2E]" />
                </div>
              </div>

              <h2 className="font-serif text-[#F5F4F0] text-lg font-medium tracking-tight mt-1">
                Full-Stack Architecture & Systems
              </h2>

              <p className="font-sans text-xs text-[#8E8D8A] leading-relaxed">
                Musa Jubril • Based in Lagos, Nigeria. Specializing in Angular, React,
                Next.js, Node.js, Express, MongoDB, and enterprise document workflows.
              </p>

              {/* Quick links & socials */}
              <div className="flex items-center justify-between pt-3 border-t border-[#2A2A2E] mt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-1.5 border border-[#2A2A2E] text-[#8E8D8A] hover:text-[#F5F4F0] hover:border-[#8E8D8A] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-1.5 border border-[#2A2A2E] text-[#8E8D8A] hover:text-[#F5F4F0] hover:border-[#8E8D8A] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${portfolioData.personal.contact.email}`}
                    aria-label="Send Email"
                    className="p-1.5 border border-[#2A2A2E] text-[#8E8D8A] hover:text-[#F5F4F0] hover:border-[#8E8D8A] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={() => scrollTo("#contact")}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#C8A97E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Curriculum Vitae</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Metadata Bar */}
      <div
        ref={metadataRef}
        className="w-full mt-12 border-t border-b border-[#2A2A2E] py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
      >
        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8E8D8A]">
            Specialization
          </span>
          <span className="font-serif text-sm text-[#F5F4F0] font-medium mt-0.5">
            Full-Stack Systems
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8E8D8A]">
            Years of Exp
          </span>
          <span className="font-serif text-sm text-[#F5F4F0] font-medium mt-0.5">
            5+ Years Professional
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8E8D8A]">
            Core Focus
          </span>
          <span className="font-serif text-sm text-[#F5F4F0] font-medium mt-0.5">
            Angular & React
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8E8D8A]">
            Location / Remote
          </span>
          <span className="font-serif text-sm text-[#F5F4F0] font-medium mt-0.5">
            Lagos, NG • Worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
