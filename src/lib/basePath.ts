/**
 * Prepends the deploy target's basePath to a public asset path.
 * Set by next.config.mjs — '/portfolio' for the GitHub Pages export (this repo is a
 * project page, not a marjan-ahmed.github.io user page), empty on Vercel. Inlined at
 * build time, so this resolves consistently whether it runs on the server or in the
 * client bundle.
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}
