import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:px-8 ${className}`}
    >
      <Reveal>
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
