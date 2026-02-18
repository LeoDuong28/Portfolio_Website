export function asset(path: string) {
  if (/^https?:\/\//i.test(path)) return path;

  const clean = (path || "").replace(/^\/+/, "");

  if (!clean) return "./";

  return `./${clean}`;
}
