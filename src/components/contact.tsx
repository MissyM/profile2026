import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/resume";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-10">
          <p className="font-mono text-sm text-accent">05 · Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">
            Open to frontend and full-stack opportunities. The fastest way to
            reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${profile.email}&su=Laboral%20Offer`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-6" />
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-6" />
              </a>
            )}
          </div>

          <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4" />
            {profile.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
