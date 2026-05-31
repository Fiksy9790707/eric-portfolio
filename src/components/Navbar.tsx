import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { text } from "../lib/i18n";
import type { Language } from "../types/profile";

type NavbarProps = {
  language: Language;
  onToggleLanguage: () => void;
};

export default function Navbar({ language, onToggleLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: text(profile.ui.nav.about, language), href: "#about" },
    { label: text(profile.ui.nav.projects, language), href: "#projects" },
    { label: text(profile.ui.nav.github, language), href: "#github" },
    { label: text(profile.ui.nav.skills, language), href: "#skills" },
    { label: text(profile.ui.nav.contact, language), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a className="focus-ring rounded-md font-mono text-sm text-mint" href="#top" aria-label="Go to top">
          Eric.FX
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="focus-ring rounded-md text-sm text-zinc-300 transition hover:text-cyan"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <button
            className="focus-ring rounded-md border border-line px-3 py-1.5 font-mono text-xs text-cyan transition hover:border-cyan/50 hover:bg-cyan/10"
            type="button"
            onClick={onToggleLanguage}
            aria-label="Toggle language"
          >
            {text(profile.ui.languageToggle, language)}
          </button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="focus-ring rounded-md border border-line px-3 py-2 font-mono text-xs text-cyan"
            type="button"
            onClick={onToggleLanguage}
            aria-label="Toggle language"
          >
            {text(profile.ui.languageToggle, language)}
          </button>
          <button
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-zinc-200"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="border-t border-line bg-ink px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="focus-ring rounded-md px-2 py-2 text-sm text-zinc-200"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
