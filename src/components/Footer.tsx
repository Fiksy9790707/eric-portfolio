import { text } from "../lib/i18n";
import type { Language, PortfolioProfile } from "../types/profile";

type FooterProps = {
  profile: PortfolioProfile;
  language: Language;
};

export default function Footer({ profile, language }: FooterProps) {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 px-5 py-8 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center lg:px-8">
        <p>{text(profile.ui.footer.builtWith, language)}</p>
        <p>
          {text(profile.ui.footer.lastUpdated, language)}: {profile.site.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
