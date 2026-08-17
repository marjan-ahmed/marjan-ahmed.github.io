/** Section anchors, shared by the header nav and the command palette. */
export const SECTIONS = [
  { id: "method", index: "001" },
  { id: "deployments", index: "002" },
  { id: "capabilities", index: "003" },
  { id: "log", index: "004" },
  { id: "roadmap", index: "005" },
  { id: "contact", index: "006" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
