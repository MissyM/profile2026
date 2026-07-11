"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();
  const target = locale === "en" ? "ES" : "EN";

  return (
    <button
      type="button"
      aria-label={t.languageToggle.switchLabel}
      onClick={toggleLocale}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-xs font-semibold text-foreground transition-colors hover:bg-surface-2"
    >
      {target}
    </button>
  );
}
