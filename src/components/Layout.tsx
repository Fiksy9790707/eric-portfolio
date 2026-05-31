import type { PropsWithChildren } from "react";
import type { Language } from "../types/profile";
import Navbar from "./Navbar";

type LayoutProps = PropsWithChildren<{
  language: Language;
  onToggleLanguage: () => void;
}>;

export default function Layout({ children, language, onToggleLanguage }: LayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar language={language} onToggleLanguage={onToggleLanguage} />
      {children}
    </div>
  );
}
