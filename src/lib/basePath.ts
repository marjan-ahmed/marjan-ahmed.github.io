/**
 * Normalizes a public asset path to start with exactly one leading slash.
 * Both deploy targets (Vercel and marjan-ahmed.github.io) serve this app at the
 * domain root, so no basePath prefix is needed — this just guards against
 * accidental double slashes from callers that already include a leading one.
 */
export function getAssetPath(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
}
