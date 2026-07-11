"use client";

import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function Work() {
  const { t } = useLanguage();

  return (
    <Section id="work" index="04" title={t.sections.work}>
      <Reveal>
        <p className="-mt-4 mb-8 max-w-2xl text-sm text-muted">
          {t.work.intro}
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {t.projects.map((p, i) => {
          const Wrapper = p.href ? "a" : "div";
          return (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <Wrapper
                {...(p.href
                  ? {
                      href: p.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors ${
                  p.href ? "hover:border-accent/50" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  {p.href && (
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
