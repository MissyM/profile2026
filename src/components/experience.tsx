"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function Experience() {
  const { t } = useLanguage();
  const experience = t.experience;

  return (
    <Section id="experience" index="02" title={t.sections.experience}>
      <ol className="relative">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="relative pl-8 pb-10 last:pb-0">
            {/* line */}
            {i < experience.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[5px] top-2 h-full w-px bg-border"
              />
            )}
            {/* dot */}
            <span
              aria-hidden
              className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-accent bg-background"
            />

            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-base font-semibold text-foreground">
                  {job.role}{" "}
                  <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted">{job.location}</p>
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-accent/60"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
