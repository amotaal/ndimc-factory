import { createElement } from "react";
import { StrawberryShortcakeIllustration } from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "strawberry-shortcake",
  name: "Strawberry Short Cake Cups",
  description:
    "Two-page recipe in the Egnite 'bite' layout — grouped ingredients, detailed extended instructions on page two.",
  source: "strawberry_shortcake_2_pages.png",
  kind: "recipe-card-bite",
  data: {
    title: "Strawberry Short Cake Cups",
    titleWords: ["STRAWBERRY", "SHORT CAKE", "CUPS"],
    meta: [
      { label: "Prep time", value: "15 Min" },
      { label: "Bake time", value: "11 Min" },
    ],
    ingredients: [
      {
        heading: "Vanilla Cake",
        items: [
          "1 ½ cups (180 g) all-purpose flour",
          "1 ½ teaspoons (7.5 g) baking powder",
          "½ teaspoon (2.5 g) salt",
          "2 large eggs",
          "¾ cup (170 g) sugar",
          "½ cup (100 g) oil",
          "1 teaspoon (2.5 g) Egnite Vanilla Flavor",
          "½ cup (180 g) Greek yogurt or milk, room temperature",
        ],
      },
      {
        heading: "Strawberry Mousse",
        items: [
          "½ cup strawberry chunks",
          "¼ cup sugar",
          "1 teaspoon Egnite Strawberry Emulsion",
          "1 cup whipping cream (vegetable-based)",
          "5 g Gelatin, dissolved in 45 ml cold water (Ratio 1:6)",
        ],
      },
      {
        heading: "Syrup",
        items: [
          "¼ cup (10 g) mint",
          "¼ cup (50 g) sugar",
          "½ teaspoon (3.75 g) Egnite Strawberry Flavor",
        ],
      },
      {
        heading: "Decoration",
        items: [
          "1 cup (225 ml) whipping cream",
          "Strawberries",
        ],
      },
    ],
    instructions: [
      "Preheat your oven to 170–175°C.",
      "In a bowl, sift together the flour, baking powder, and salt. Set aside.",
      "In another bowl, whisk eggs and sugar until pale and slightly fluffy.",
      "Add the flavor, mix well.",
      "Gradually add oil while whisking until well combined.",
      "Alternate adding dry ingredients and milk or Greek yogurt: start with dry, then milk, end with dry.",
      "Mix just until combined (do not overmix).",
      "Grease and flour a baking pan then pipe in the cake batter and place it in the oven. It usually takes 25–30 minutes or until a toothpick inserted in the center comes out clean.",
      "Leave it to cool for about 5 minutes, then take it out of the pan.",
      "Once it's completely cool use a cake shaped cutter to cut the cake into circles to fit the plastic cups.",
    ],
    note: "Lay the cake pieces in individual cups, add the mousse, syrup, and whipped cream to finish.",
    stamp: "EVERY BITE!",
    hero: createElement(StrawberryShortcakeIllustration, {
      className: "h-full w-full",
    }),
    brandSite: "egniteflavors.com",
    tagline: "Creativity with Confidence",
    extended: [
      {
        heading: "Strawberry Mousse",
        items: [
          {
            title: "Prepare the Gelatin:",
            text:
              "Soak the gelatin in the cold water. Once the gelatin has absorbed all the water and bloomed, melt it in the microwave in 5-second intervals. Important: Do not let it boil. Then place it in the refrigerator until it gets a thick, jelly-like consistency.",
          },
          {
            title: "Prepare the Strawberry Puree:",
            text:
              "Place the strawberry chunks, sugar, and strawberry emulsion in a saucepan and lightly crush the mixture. Place over heat, crush and mix until the sugar dissolves. Remove from the heat and add the gelatin mass, stirring until it is completely dissolved. Let the mixture cool. While the puree is cooling, whip the cream to about 70% — it should be soft and slightly thickened, not fully stiff.",
          },
          {
            title: "Combine:",
            text:
              "Take a large spoonful of the whipped cream and mix it well into the berry puree. Then, pour the entire berry mixture back into the remaining whipped cream. Fold gently and lightly until the two mixtures are fully combined.",
          },
        ],
      },
      {
        heading: "Syrup",
        items: [
          { text: "In a small saucepan, mix sugar and water until combined." },
          {
            text: "Place over medium heat and stir until the sugar fully dissolves.",
          },
          {
            text:
              "Bring to a gentle simmer for 2–3 minutes. Do not boil aggressively, or the syrup will thicken too much.",
          },
          {
            text:
              "Remove from heat and stir in the Strawberry flavor.",
          },
        ],
      },
      {
        heading: "Assembly Steps",
        items: [
          {
            text:
              "In plastic cups, place a layer of vanilla cake at the bottom of each cup.",
          },
          {
            text:
              "Lightly brush or drizzle the cake cubes with syrup to keep them moist and flavorful.",
          },
          {
            text:
              "Spoon or pipe a layer of mousse over the soaked cake, filling about half the cup. Adding small strawberry chunks on top of the mousse or strawberry slices to the sides is optional.",
          },
          {
            text:
              "For taller cups, repeat with another layer of cake, syrup, and mousse.",
          },
          {
            text:
              "Refrigerate the cups for at least 30 minutes to set the mousse slightly before decorating.",
          },
          {
            text:
              "Fill a piping bag with whipped cream. Pipe a decorative swirl or rosette on top of each cup.",
          },
          {
            text:
              "Place a fresh strawberry or half a strawberry on top of the piped cream as a finishing touch.",
          },
        ],
      },
    ],
  },
};

export default entry;
