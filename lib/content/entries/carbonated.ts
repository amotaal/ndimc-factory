import { createElement } from "react";
import {
  BottleIcon,
  CarbonationMachineIcon,
  ChartUpIcon,
  ClockIcon,
  DropperIcon,
  FlavorBottleIcon,
  FridgeIcon,
  JugIcon,
  ScoopIcon,
  StirSpoonIcon,
  SugarBagIcon,
  WaterCupIcon,
} from "@/lib/icons";
import type { ContentEntry } from "../types";

const entry: ContentEntry = {
  slug: "carbonated",
  name: "Carbonated",
  description:
    "Process infographic: dark forest header, ingredients table + dosage card, horizontal numbered flow with arrows, storage note.",
  source: "other_infographic.jpeg",
  kind: "process-infographic",
  data: {
    title: "Carbonated",
    ingredients: [
      {
        icon: createElement(WaterCupIcon),
        item: "Water",
        quantity: "1 lit",
        weight: "1,000.00 g",
      },
      {
        icon: createElement(SugarBagIcon),
        item: "Sugar",
        quantity: "1/2 cup",
        weight: "112.50 g",
      },
      {
        icon: createElement(ScoopIcon),
        item: "Citric Acid",
        quantity: "1/2 tsp",
        weight: "2.50 g",
      },
      {
        icon: createElement(FlavorBottleIcon),
        item: "Flavor",
        quantity: "19 drops",
        weight: "0.60 g",
      },
    ],
    dosage: [
      {
        icon: createElement(FlavorBottleIcon),
        label: "Starting Dose (g):",
        value: "0.5",
      },
      {
        icon: createElement(ScoopIcon),
        label: "Quick Dose (g):",
        value: "0.6",
      },
      {
        icon: createElement(ChartUpIcon),
        label: "Dosage Range:",
        value: "0.04% – 0.06%",
      },
    ],
    steps: [
      {
        text: "Add water, sugar, and citric acid to a jug",
        icon: createElement(JugIcon, { className: "h-full w-full" }),
      },
      {
        text: "Stir well for 2-3 minutes",
        icon: createElement(StirSpoonIcon, { className: "h-full w-full" }),
      },
      {
        text: "Add 19 drops Egnite Essence (shake before use) + Egnite color in drops as needed",
        icon: createElement(DropperIcon, { className: "h-full w-full" }),
      },
      {
        text: "Stir well for 1 minute until fully dissolved",
        icon: createElement(StirSpoonIcon, { className: "h-full w-full" }),
      },
      {
        text: "Pour the mixture into a carbonation machine bottle",
        icon: createElement(BottleIcon, { className: "h-full w-full" }),
      },
      {
        text: "Twist the carbonation machine trigger to release the gas",
        icon: createElement(CarbonationMachineIcon, {
          className: "h-full w-full",
        }),
      },
      {
        text: "Leave for 2 minutes",
        icon: createElement(ClockIcon, { className: "h-full w-full" }),
      },
    ],
    storageNote:
      "The beverage can be stored for up to 36 hours if refrigerated.",
    storageIcon: createElement(FridgeIcon, { className: "h-full w-full" }),
  },
};

export default entry;
