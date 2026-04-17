import { createElement } from "react";
import { RecipeCard } from "../_components/recipe-card";
import { lemonCakeData, lemonCakeHero } from "../_data/lemon-cake";

export const metadata = {
  title: "Lemoncake — Egnite Recipe Card",
};

export default function Page() {
  return (
    <RecipeCard
      data={{
        ...lemonCakeData,
        hero: createElement(lemonCakeHero, { className: "h-[70%] w-auto" }),
      }}
    />
  );
}
