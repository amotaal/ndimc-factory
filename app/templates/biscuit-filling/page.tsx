import { LandscapeRecipe } from "../_components/biscuit-filling-template";
import { biscuitFillingData } from "../_data/biscuit-filling";

export const metadata = {
  title: "Biscuit Filling — Egnite Infographic",
};

export default function Page() {
  return <LandscapeRecipe data={biscuitFillingData} />;
}
