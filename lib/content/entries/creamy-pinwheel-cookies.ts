import { createElement } from "react";
import { PinwheelCookieIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "creamy-pinwheel-cookies",
  name: "Creamy Spice Pinwheel Cookies",
  description:
    "Pinwheel cookie recipe card in the classic Egnite portrait style.",
  source: "creamy_pinwheel_cookies.png",
  kind: "recipe-card-classic",
  data: {
    title: "Creamy Spice Pinwheel Cookies",
    times: { prep: "20 Min", cook: "10 Min", bake: "60 Min" },
    servings: "20",
    ingredients: [
      "2 ½ cups (300 g) all-purpose flour",
      "1 tsp (4 g) baking powder",
      "½ tsp (3 g) salt",
      "1 cup (230 g) unsalted butter, softened",
      "1 cup (200 g) sugar",
      "1 whole egg",
      "1 tsp (5 g) vanilla extract",
      "2 tsp (8 g) Egnite Essence Creamy Spice",
      "2 tsp (6 g) ground cinnamon",
      "½ tsp (1 g) ground nutmeg",
    ],
    colorsChosen: {
      intro: "Soft cream body with a spice-tinted swirl.",
      palette: [
        { swatch: "#f6e9a8", drops: "1 drop Egnite Color Natural Cream" },
        { swatch: "#8a5a2e", drops: "2 drops Egnite Color Spice Brown" },
      ],
      note: "Swirl contrast softens during baking.",
    },
    instructions: [
      "Whisk flour, baking powder, and salt in a bowl.",
      "Cream butter and sugar until pale and fluffy.",
      "Beat in egg, vanilla, and Egnite Essence Creamy Spice.",
      "Stir in the dry mixture to form a soft dough.",
      "Divide dough in half; add cinnamon and nutmeg to one half.",
      "Roll each half between parchment into equal rectangles.",
      "Stack, then roll tightly into a log and wrap in plastic.",
      "Chill 45 minutes until firm.",
      "Slice into ¼-inch rounds and place on lined trays.",
      "Bake at 350°F for 9–11 minutes until edges set.",
      "Cool on the tray for 5 minutes before transferring to a rack.",
    ],
    hero: createElement(PinwheelCookieIllustration, { className: "h-[70%] w-auto" }),
  },
};

export default entry;
