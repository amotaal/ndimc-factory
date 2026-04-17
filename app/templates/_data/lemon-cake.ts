import type { RecipeCardData } from "../_components/recipe-card";
import { BundtCakeIllustration } from "../_components/icons";

export const lemonCakeData: Omit<RecipeCardData, "hero"> = {
  title: "Lemoncake",
  times: { prep: "20 Min", cook: "15 Min", bake: "75 Min" },
  servings: "8",
  ingredients: [
    "Weight (g)",
    "3 cups (360 g) cake flour",
    "1 tsp (4 g) sugar",
    "1 tsp (3 g) baking powder",
    "1/2 tsp (3 g) baking soda",
    "1/2 tsp (3 g) salt",
    "1 tablespoon (30 g) poppyseed (optional)",
    "3/4 teaspoons (5 g) lemon zest",
    "2 teaspoons (10 g) vanilla extract",
    "1/2 cup (115 g) softened butter",
    "1 1/4 cups (285 g) sugar",
    "4 whole eggs",
    "1 cup (240 g) buttermilk",
    "2 tablespoons (20 g) Egnite Essence Creamy Lemon",
  ],
  colorsChosen: {
    intro:
      "It is a personal choice, ratios will differ based on shade desired.",
    palette: [
      { swatch: "#f7d048", drops: "2 drops Egnite Color Lemon Yellow" },
      { swatch: "#f6e9a8", drops: "1 drop Egnite Color Natural Cream" },
    ],
    note: "Colors will vary slightly when baked.",
  },
  instructions: [
    "Preheat your oven to 350°F.",
    "Grease a bundt cake pan generously with butter and dust with flour.",
    "In a large bowl whisk flour, baking powder, baking soda, poppyseed, lemon zest and salt.",
    "Beat butter and sugar in a stand mixer until pale and fluffy, 3-4 minutes.",
    "Add eggs one at a time, beating well after each addition.",
    "Alternate adding the dry mixture and the buttermilk in three additions.",
    "Add vanilla and Egnite Essence Creamy Lemon; mix until smooth.",
    "Pour the batter into the pan and smooth the top with a spatula.",
    "Bake for 60-75 minutes or until a skewer inserted comes out clean.",
    "Cool the cake in the pan for 15 minutes before turning onto a rack.",
    "Drizzle with lemon glaze while still slightly warm for shine.",
    "Garnish with fresh lemon zest and serve at room temperature.",
  ],
};

export const lemonCakeHero = BundtCakeIllustration;
