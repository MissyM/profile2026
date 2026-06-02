import { ArrowRight, Download, MapPin } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { GithubIcon } from "@/components/icons";
import { profile, stats } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <div className="grid items-center gap-10 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
              {profile.role}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-5 flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="size-4" />
              {profile.location}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowRight className="size-4" />
              </a>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
              >
                <Download className="size-4" />
                Résumé
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-2"
              >
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="order-first sm:order-last">
            <Avatar
              src={profile.photo}
              alt={profile.name}
              initials="MC"
              className="mx-auto aspect-square w-44 sm:w-full sm:max-w-xs"
            />
          </div>
        </div>

        {/* stats */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-4 py-5 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-muted">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
