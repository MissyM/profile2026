"use client";

import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" index="01" title={t.sections.about}>
      <div className="grid gap-8 sm:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {t.summary}
          </p>
        </Reveal>

        <Reveal delay={100} className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <GraduationCap className="size-4 text-accent" />
              {t.about.educationLabel}
            </div>
            <p className="mt-2 text-sm font-medium text-foreground">
              {t.education.degree}
            </p>
            <p className="text-sm text-muted">{t.education.school}</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <LanguagesIcon className="size-4 text-accent" />
              {t.about.languagesLabel}
            </div>
            <ul className="mt-2 space-y-1">
              {t.languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
