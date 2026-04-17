import { ProcessInfographic } from "../_components/carbonated-template";
import { carbonatedData } from "../_data/carbonated";

export const metadata = {
  title: "Carbonated — Egnite Infographic",
};

export default function Page() {
  return <ProcessInfographic data={carbonatedData} />;
}
