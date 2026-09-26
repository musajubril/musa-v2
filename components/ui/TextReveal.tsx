"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  by?: "words" | "chars";
  className?: string;
  itemClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
  as?: React.ElementType;
}

export function TextReveal({
  text,
  by = "words",
  className,
  itemClassName,
  delay = 0,
  duration = 0.9,
  stagger = 0.04,
  triggerOnScroll = false,
  as: Component = "span",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(".reveal-item");
    if (!targets.length) return;

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
          gsap.set(targets, { yPercent: 0, opacity: 1 });
          return;
        }

        gsap.set(targets, { yPercent: 110, opacity: 0 });

        const animConfig: gsap.TweenVars = {
          yPercent: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: "power3.out",
        };

        if (triggerOnScroll) {
          animConfig.scrollTrigger = {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          };
        }

        gsap.to(targets, animConfig);
      }
    );

    return () => mm.revert();
  }, [text, by, delay, duration, stagger, triggerOnScroll]);

  if (by === "chars") {
    const words = text.split(" ");
    return (
      <Component ref={containerRef} className={cn("inline-block", className)}>
        {words.map((word, wIdx) => (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, cIdx) => (
              <span key={cIdx} className="inline-block overflow-hidden align-top">
                <span
                  className={cn(
                    "reveal-item inline-block will-change-transform",
                    itemClassName
                  )}
                >
                  {char}
                </span>
              </span>
            ))}
          </span>
        ))}
      </Component>
    );
  }

  // by words
  const words = text.split(" ");
  return (
    <Component ref={containerRef} className={cn("inline-block", className)}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
        >
          <span
            className={cn(
              "reveal-item inline-block will-change-transform",
              itemClassName
            )}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
