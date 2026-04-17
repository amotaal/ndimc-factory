import { createElement } from "react";
import { CoffeeBeanCookieIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "coffeebean-cookies",
  name: "Coffeebean Cookies",
  description:
    "Cookie recipe card in the classic Egnite portrait style — coffee-toned palette.",
  source: "coffeebean_cookies.png",
  kind: "recipe-card-classic",
  data: {
    title: "Coffeebean Cookies",
    times: { prep: "15 Min", cook: "12 Min", bake: "60 Min" },
    servings: "24",
    ingredients: [
      "2 cups (240 g) all-purpose flour",
      "1 tsp (4 g) baking powder",
      "¼ tsp (1 g) salt",
      "¾ cup (170 g) unsalted butter, softened",
      "¾ cup (150 g) brown sugar",
      "¼ cup (50 g) white sugar",
      "1 whole egg",
      "2 tbsp (10 g) instant coffee, ground fine",
      "1 tsp (5 g) Egnite Essence Coffee",
      "1 cup (170 g) dark chocolate chips",
    ],
    colorsChosen: {
      intro: "Choose shade by intensity of coffee infusion.",
      palette: [
        { swatch: "#6f4420", drops: "2 drops Egnite Color Coffee" },
        { swatch: "#3e2410", drops: "1 drop Egnite Color Cocoa" },
      ],
      note: "Dough will darken slightly as it rests.",
    },
    instructions: [
      "Preheat oven to 350°F and line two trays with parchment.",
      "Whisk flour, baking powder, salt, and ground coffee in a bowl.",
      "Cream butter with both sugars until smooth.",
      "Beat in egg, then add Egnite Essence Coffee.",
      "Stir in the dry mixture until a soft dough forms.",
      "Fold in the dark chocolate chips.",
      "Scoop tablespoon-sized dough balls onto the trays, 2 inches apart.",
      "Bake 10–12 minutes until edges are set but centers still soft.",
      "Cool on the tray 5 minutes before transferring to a rack.",
      "Serve with a coffee or espresso shot.",
    ],
    hero: createElement(CoffeeBeanCookieIllustration, { className: "h-[70%] w-auto" }),
  },
};

export default entry;
