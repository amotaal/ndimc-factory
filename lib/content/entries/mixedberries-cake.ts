import { createElement } from "react";
import { MixedBerriesCakeIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "mixedberries-cake",
  name: "Mixed Berries Cake",
  description:
    "Layer cake recipe card in the classic Egnite portrait style — whipped cream, mixed berries.",
  source: "mixedberries_cake.png",
  kind: "recipe-card-classic",
  data: {
    title: "Mixed Berries Cake",
    times: { prep: "20 Min", cook: "35 Min", bake: "60 Min" },
    servings: "10",
    ingredients: [
      "2 cups (240 g) all-purpose flour",
      "2 tsp (8 g) baking powder",
      "½ tsp (3 g) salt",
      "¾ cup (170 g) unsalted butter, softened",
      "1 cup (200 g) sugar",
      "3 whole eggs",
      "1 cup (240 g) milk",
      "2 tsp (10 g) Egnite Essence Mixed Berries",
      "2 cups (280 g) mixed berries (fresh or frozen)",
      "1 cup (240 g) whipped cream",
    ],
    colorsChosen: {
      intro: "Adjust drops to get the desired berry intensity.",
      palette: [
        { swatch: "#b75555", drops: "2 drops Egnite Color Berry Red" },
        { swatch: "#4466aa", drops: "1 drop Egnite Color Blueberry" },
      ],
      note: "Final tone depends on berries used.",
    },
    instructions: [
      "Preheat oven to 350°F and grease two 8-inch round pans.",
      "Whisk flour, baking powder, and salt in a bowl.",
      "Cream butter and sugar until light and fluffy.",
      "Beat in eggs one at a time, then add Egnite Essence Mixed Berries.",
      "Alternate the dry mixture and milk in three additions.",
      "Divide batter between the two pans and smooth the tops.",
      "Bake 30–35 minutes until a skewer comes out clean.",
      "Cool completely on a wire rack before assembly.",
      "Spread whipped cream on the first layer and scatter half the berries.",
      "Top with the second layer and cover with the remaining cream and berries.",
    ],
    hero: createElement(MixedBerriesCakeIllustration, { className: "h-[70%] w-auto" }),
  },
};

export default entry;
