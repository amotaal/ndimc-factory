import { createElement } from "react";
import { HazelnutChocolateCookieIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "hazelnut-chocolate-cookies",
  name: "Hazelnut Chocolate Chip Cookies",
  description:
    "Chocolate-chip cookie recipe card in the classic Egnite portrait style.",
  source: "hazelnut_chocolate_cookies.png",
  kind: "recipe-card-classic",
  data: {
    title: "Hazelnut Chocolate Chip Cookies",
    times: { prep: "15 Min", cook: "12 Min", bake: "45 Min" },
    servings: "24",
    ingredients: [
      "1 ½ cups (180 g) all-purpose flour",
      "½ tsp (2 g) baking soda",
      "¼ tsp (1 g) salt",
      "¾ cup (170 g) unsalted butter, melted",
      "¾ cup (150 g) brown sugar",
      "¼ cup (50 g) sugar",
      "1 whole egg + 1 egg yolk",
      "1 ½ tsp (7 g) Egnite Essence Hazelnut",
      "1 cup (170 g) dark chocolate chips",
      "¾ cup (90 g) roasted hazelnuts, chopped",
    ],
    colorsChosen: {
      intro: "Warm caramel base with deep chocolate speckle.",
      palette: [
        { swatch: "#d9a066", drops: "2 drops Egnite Color Caramel" },
        { swatch: "#3e2410", drops: "1 drop Egnite Color Dark Cocoa" },
      ],
    },
    instructions: [
      "Preheat oven to 350°F and line two trays with parchment.",
      "Whisk flour, baking soda, and salt in a bowl.",
      "Whisk melted butter with both sugars until smooth.",
      "Add the egg, yolk, and Egnite Essence Hazelnut; whisk until glossy.",
      "Stir in the dry mixture until just combined.",
      "Fold in chocolate chips and chopped hazelnuts.",
      "Chill dough 30 minutes for a chewier texture.",
      "Scoop tablespoon-sized balls onto the trays, 2 inches apart.",
      "Bake 10–12 minutes until the edges are golden.",
      "Cool on the tray 5 minutes before transferring to a rack.",
    ],
    hero: createElement(HazelnutChocolateCookieIllustration, {
      className: "h-[70%] w-auto",
    }),
  },
};

export default entry;
