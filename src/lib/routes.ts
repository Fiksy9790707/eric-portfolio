const basePath = import.meta.env.BASE_URL;

const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");

export const routePath = (path: string) => {
  if (path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  const normalizedPath = path.startsWith("#") ? `/${path}` : path;
  return `${normalizedBase}${normalizedPath}`;
};

export const currentRoutePath = () => {
  const pathname = window.location.pathname;
  const path =
    normalizedBase && pathname.startsWith(normalizedBase)
      ? pathname.slice(normalizedBase.length) || "/"
      : pathname;

  return path;
};

export const navigateTo = (path: string) => {
  window.history.pushState(null, "", routePath(path));

  if (path.includes("#")) {
    const [, hash] = path.split("#");
    const scrollToHash = (attempt = 0) => {
      const target = document.getElementById(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (attempt < 8) {
        window.setTimeout(() => scrollToHash(attempt + 1), 40);
      }
    };

    window.setTimeout(() => scrollToHash(), 0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.dispatchEvent(new PopStateEvent("popstate"));
};
