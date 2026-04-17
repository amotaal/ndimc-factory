import { RecipeCard } from "@/lib/templates/recipe-card-classic";
import { RecipeCardBite } from "@/lib/templates/recipe-card-bite";
import { LandscapeRecipe } from "@/lib/templates/landscape-recipe";
import { ProcessInfographic } from "@/lib/templates/process-infographic";
import type { ContentEntry } from "./types";

/**
 * Single dispatch point: given a ContentEntry, render the right template.
 * Add a new kind here when you add it to TemplateEntry.
 */
export function RenderEntry({ entry }: { entry: ContentEntry }) {
  switch (entry.kind) {
    case "recipe-card-classic":
      return <RecipeCard data={entry.data} />;
    case "recipe-card-bite":
      return <RecipeCardBite data={entry.data} />;
    case "landscape-recipe":
      return <LandscapeRecipe data={entry.data} />;
    case "process-infographic":
      return <ProcessInfographic data={entry.data} />;
  }
}
