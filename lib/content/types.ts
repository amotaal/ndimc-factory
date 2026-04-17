import type { ReactNode } from "react";
import type { RecipeCardData } from "@/lib/templates/recipe-card-classic";
import type { RecipeCardBiteData } from "@/lib/templates/recipe-card-bite";
import type { LandscapeRecipeData } from "@/lib/templates/landscape-recipe";
import type { ProcessInfographicData } from "@/lib/templates/process-infographic";

/**
 * Every artefact in the factory resolves to one of these template kinds.
 * Adding a new kind means:
 *   1) write the renderer in /lib/templates
 *   2) add a TemplateEntry variant here
 *   3) handle it in the dispatch in /lib/content/render.tsx
 */
export type TemplateEntry =
  | { kind: "recipe-card-classic"; data: RecipeCardData }
  | { kind: "recipe-card-bite"; data: RecipeCardBiteData }
  | { kind: "landscape-recipe"; data: LandscapeRecipeData }
  | { kind: "process-infographic"; data: ProcessInfographicData };

export type TemplateKind = TemplateEntry["kind"];

export type ContentEntry = TemplateEntry & {
  slug: string;
  name: string;
  description: string;
  source: string; // original filename in /samples
};

/** Helper used in entry files for type safety. */
export type EntryFactory<K extends TemplateKind> = (
  deps: EntryDeps,
) => Extract<ContentEntry, { kind: K }>;

export type EntryDeps = {
  // Future: inject things like a photo-lookup or a CMS client.
  render: (node: ReactNode) => ReactNode;
};
