/**
 * Utility to prepend the basePath to asset URLs
 * This is needed for GitHub Pages deployment with a custom basePath
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}
