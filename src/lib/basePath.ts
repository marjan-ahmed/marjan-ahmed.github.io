/**
 * Utility to prepend the basePath to asset URLs
 * This is needed for GitHub Pages deployment with a custom basePath
 */
export function getAssetPath(path: string): string {
  // Set by next.config.mjs — empty on Vercel (served at the domain root), '/portfolio'
  // for GitHub Pages exports. Inlined at build time, so this resolves consistently
  // whether it runs on the server or in the client bundle.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}
