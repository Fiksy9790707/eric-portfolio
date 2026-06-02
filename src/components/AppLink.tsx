import type { AnchorHTMLAttributes, MouseEvent, PropsWithChildren } from "react";
import { navigateTo, routePath } from "../lib/routes";

type AppLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }
>;

export default function AppLink({ href, onClick, children, ...props }: AppLinkProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      !isInternal ||
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target
    ) {
      return;
    }

    event.preventDefault();
    navigateTo(href.startsWith("#") ? `/${href}` : href);
  };

  return (
    <a href={isInternal ? routePath(href.startsWith("#") ? `/${href}` : href) : href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
