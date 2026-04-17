import { createElement } from "react";
import { FudgeBitesIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "bubblegum-fudgebites",
  name: "Bubblegum Fudge Bites",
  description:
    "No-bake fudge bite recipe card in the Egnite 'bite' layout — ingredients panel overlapping hero, 'ENJOY EVERY BITE!' stamp.",
  source: "bubblegum_fudgebites.png",
  kind: "recipe-card-bite",
  data: {
    title: "Bubblegum Fudge Bites",
    titleWords: ["BUBBLEGUM", "FUDGE BITES"],
    meta: [
      { label: "Prep time", value: "15 Mins" },
      { label: "No-Bake", value: "" },
    ],
    ingredients: [
      {
        items: [
          "3 cups (510 g) white chocolate chips",
          "1 can (400 g) sweetened condensed milk",
          "¼ tsp (1.25 g) salt (optional)",
          "2 cups small white marshmallows",
          "1 tbsp (15 g) Egnite Bubblegum Flavor",
          "A few drops of Egnite Pink Color",
          "Candy sprinkles (optional)",
        ],
      },
    ],
    instructions: [
      "Line a 20×20 cm pan with parchment paper.",
      "In a microwave-safe bowl, combine white chocolate chips and sweetened condensed milk.",
      "Microwave for 30 seconds, then stir. Repeat microwaving in 30-second intervals, stirring each time, until the mixture is fully melted and smooth. Do not overheat — white chocolate burns easily.",
      "Stir in food flavor, color, and pinch of salt.",
      "Add the marshmallows and mix.",
      "Pour the mixture in the prepared pan and smooth the top.",
      "Add candy sprinkles on top.",
      "Refrigerate for 1–2 hours, or until fully set.",
      "Remove from the pan and cut into small squares using a sharp knife.",
    ],
    note: "For cleaner cuts, run your knife under hot water and wipe dry before slicing.",
    stamp: "EVERY BITE!",
    hero: createElement(FudgeBitesIllustration, { className: "h-full w-full" }),
    brandSite: "egniteflavors.com",
    tagline: "Creativity with Confidence",
  },
};

export default entry;
