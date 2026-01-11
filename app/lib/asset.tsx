export function getBasePath() {
  if (typeof window !== "undefined") {
    const parts = window.location.pathname.split("/").filter(Boolean);

    if (parts.length > 0) return `/${parts[0]}`;
    return "";
  }

  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export function asset(path: string) {
  const basePath = getBasePath();
  if (!path) return basePath || "/";
  if (!path.startsWith("/")) path = `/${path}`;
  return `${basePath}${path}`;
}
