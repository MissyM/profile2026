"use client";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" index="03" title={t.sections.skills}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
