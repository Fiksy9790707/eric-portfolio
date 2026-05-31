import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <a
      className={`focus-ring fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-panel text-cyan shadow-soft transition ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      href="#top"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </a>
  );
}
