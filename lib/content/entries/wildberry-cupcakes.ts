import { createElement } from "react";
import { WildberryCupcakeIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "wildberry-cupcakes",
  name: "Wild Berry Cupcakes",
  description:
    "Recipe card variant using the classic Egnite portrait layout — soft muffin tones, berry palette.",
  source: "wildberry_cupcakes.png",
  kind: "recipe-card-classic",
  data: {
    title: "Wild Berry Cupcakes",
    times: { prep: "15 Min", cook: "20 Min", bake: "75 Min" },
    servings: "12",
    ingredients: [
      "1 ½ cups (180 g) all-purpose flour",
      "1 ½ tsp (6 g) baking powder",
      "½ tsp (3 g) salt",
      "½ cup (115 g) unsalted butter, softened",
      "¾ cup (150 g) sugar",
      "2 whole eggs",
      "1 tsp (5 g) vanilla extract",
      "½ cup (120 g) buttermilk",
      "1 ½ tsp (7 g) Egnite Essence Wild Berry",
      "1 cup (140 g) mixed fresh berries",
      "1 tbsp (8 g) cornstarch (to coat berries)",
    ],
    colorsChosen: {
      intro: "It is a personal choice, ratios will differ based on shade desired.",
      palette: [
        { swatch: "#b75555", drops: "2 drops Egnite Color Berry Red" },
        { swatch: "#6a3a8c", drops: "1 drop Egnite Color Blackcurrant" },
      ],
      note: "Colors will deepen slightly after baking.",
    },
    instructions: [
      "Preheat oven to 350°F and line a 12-cup muffin tray.",
      "Whisk flour, baking powder, and salt in a bowl.",
      "Cream butter and sugar until pale and fluffy.",
      "Beat in eggs one at a time, then vanilla and Egnite Essence Wild Berry.",
      "Alternate adding dry mix and buttermilk in three additions.",
      "Toss berries with cornstarch then gently fold into the batter.",
      "Divide batter between cups, about ⅔ full.",
      "Bake 18–22 minutes until a skewer comes out clean.",
      "Cool cupcakes in the pan for 5 minutes, then transfer to a rack.",
      "Top with buttercream or a dusting of sugar before serving.",
    ],
    hero: createElement(WildberryCupcakeIllustration, { className: "h-[70%] w-auto" }),
  },
};

export default entry;
