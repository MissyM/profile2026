"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

const NAV_IDS = ["about", "experience", "skills", "work", "contact"] as const;

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const nav = NAV_IDS.map((id) => ({ id, label: t.nav[id] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          MC<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={t.profile.resumeFile}
            download
            className="hidden items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 sm:inline-flex"
          >
            <Download className="size-4" />
            {t.header.resume}
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={t.header.toggleMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-foreground md:hidden"
          >
            {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={t.profile.resumeFile}
              download
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-2 py-2.5 text-sm font-medium text-accent"
            >
              <Download className="size-4" />
              {t.header.downloadResume}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
