import type { PortfolioProfile } from "../types/profile";

type FooterProps = {
  profile: PortfolioProfile;
};

export default function Footer({ profile }: FooterProps) {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 px-5 py-8 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center lg:px-8">
        <p>Built with React, Vite, Tailwind CSS. Deployed on Vercel.</p>
        <p>Last updated: {profile.site.lastUpdated}</p>
      </div>
    </footer>
  );
}
