// app/lib/asset.ts

export function asset(path: string) {
  // allow external links unchanged
  if (/^https?:\/\//i.test(path)) return path;

  // normalize
  const clean = (path || "").replace(/^\/+/, "");

  // asset("") should go to the site root (current directory)
  if (!clean) return "./";

  /**
   * ✅ GitHub Pages safe:
   * Use relative URLs so they resolve under /Portfolio_Website/
   * Example: "avatar.png" -> /Portfolio_Website/avatar.png
   */
  return `./${clean}`;
}
