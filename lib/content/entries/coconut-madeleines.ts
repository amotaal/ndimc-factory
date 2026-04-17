import { createElement } from "react";
import { MadeleineIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "coconut-madeleines",
  name: "Coconut Madeleines",
  description:
    "Madeleine recipe card in the classic Egnite portrait style — coconut palette.",
  source: "coconut_madeleines.png",
  kind: "recipe-card-classic",
  data: {
    title: "Coconut Madeleines",
    times: { prep: "15 Min", cook: "12 Min", bake: "45 Min" },
    servings: "16",
    ingredients: [
      "2 whole eggs, room temperature",
      "½ cup (100 g) sugar",
      "1 tsp (5 g) vanilla extract",
      "1 cup (120 g) all-purpose flour",
      "½ tsp (2 g) baking powder",
      "¼ tsp (1 g) salt",
      "½ cup (115 g) melted unsalted butter",
      "½ cup (45 g) desiccated coconut",
      "1 tsp (5 g) Egnite Essence Coconut",
    ],
    colorsChosen: {
      intro: "Keep tones pale to let the coconut shine.",
      palette: [
        { swatch: "#f6e9a8", drops: "1 drop Egnite Color Natural Cream" },
        { swatch: "#e0b070", drops: "1 drop Egnite Color Toasted" },
      ],
    },
    instructions: [
      "Preheat oven to 375°F and butter a madeleine pan.",
      "Whisk eggs, sugar, and vanilla until pale and frothy.",
      "Sift flour, baking powder, and salt and fold into the egg mixture.",
      "Stir in melted butter, coconut, and Egnite Essence Coconut.",
      "Rest the batter in the fridge for 30 minutes.",
      "Spoon batter into each mould, about ¾ full.",
      "Bake 10–12 minutes until the humps rise and edges brown.",
      "Unmould immediately and cool on a wire rack.",
      "Dust with icing sugar or dip in white chocolate before serving.",
    ],
    hero: createElement(MadeleineIllustration, { className: "h-[70%] w-auto" }),
  },
};

export default entry;
