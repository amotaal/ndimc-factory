import { createElement } from "react";
import {
  BowlWhiskIcon,
  ButterIcon,
  DropperIcon,
  FlavorBottleIcon,
  GheeIcon,
  MixerIcon,
  PourSugarIcon,
  ScaleIcon,
  ScoopIcon,
  SugarBagIcon,
  WaterCupIcon,
  BiscuitFillingIllustration,
} from "../_components/icons";
import type { LandscapeRecipeData } from "../_components/biscuit-filling-template";

export const biscuitFillingData: LandscapeRecipeData = {
  title: "Biscuit Filling",
  prepTime: "11 minutes",
  ingredients: [
    { label: "Butter: 1 stick (100 g)", icon: createElement(ButterIcon) },
    { label: "Ghee (samneh): ½ cup (100 g)", icon: createElement(GheeIcon) },
    { label: "Powder Sugar: 2 cups (290 g)", icon: createElement(SugarBagIcon) },
    { label: "Water: 5 tsp (25 g)", icon: createElement(WaterCupIcon) },
    { label: "Flavor (Essence): ¼ tsp (1.25 g)", icon: createElement(FlavorBottleIcon) },
    { label: "Total weight: 516.25 g", icon: createElement(ScaleIcon) },
  ],
  hero: createElement(BiscuitFillingIllustration, { className: "h-full w-full" }),
  dosage: [
    {
      label: "Essence",
      icon: createElement(FlavorBottleIcon),
      qty: "1.25 g (¼ tsp)",
      range: "0.25% – 0.30%",
    },
    {
      label: "Emulsion",
      icon: createElement(FlavorBottleIcon),
      qty: "1.75 g (½ tsp)",
      range: "0.35% – 0.50%",
    },
  ],
  steps: [
    { text: "Mix butter, ghee, and water", icon: createElement(BowlWhiskIcon) },
    { text: "Gradually add powdered sugar", icon: createElement(PourSugarIcon) },
    { text: "Add Egnite Essence and color drops", icon: createElement(DropperIcon) },
    { text: "Mix for 1-2 minutes", icon: createElement(MixerIcon) },
    { text: "Use as needed", icon: createElement(ScoopIcon) },
  ],
  footerTagline: "Creativity with Confidence",
  brandSite: "egniteflavors.com",
};
