import type { ReactNode } from "react";
import { EgniteWordmark } from "@/lib/brand/marks";
import { FacebookIcon, GlobeIcon, InstagramIcon, TikTokIcon, XIcon } from "@/lib/icons";

export type IngredientRow = {
  label: string;
  icon: ReactNode;
};

export type DosageEntry = {
  label: string;
  icon: ReactNode;
  qty: string;
  range: string;
};

export type StepRow = {
  text: string;
  icon: ReactNode;
};

export type LandscapeRecipeData = {
  title: string;
  prepTime: string;
  ingredients: IngredientRow[];
  hero: ReactNode;
  dosage: DosageEntry[];
  steps: StepRow[];
  footerTagline: string;
  brandSite: string;
};

export function LandscapeRecipe({ data }: { data: LandscapeRecipeData }) {
  return (
    <article
      className="mx-auto flex w-full max-w-[1060px] flex-col bg-cream shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]"
      style={{ aspectRatio: "1060 / 600" }}
    >
      <div className="grid flex-1 grid-cols-[1fr_1.1fr_1fr] gap-4 px-8 pt-6 pb-4">
        <IngredientsColumn items={data.ingredients} />

        <div className="flex flex-col items-center">
          <h1
            className="font-display text-[44px] font-black tracking-wide text-gold"
            style={{ letterSpacing: "0.03em" }}
          >
            {data.title.toUpperCase()}
          </h1>
          <p className="mt-1 text-[13px] font-semibold text-ink">
            Preparation Time: {data.prepTime}
          </p>
          <div className="mt-3 aspect-[4/3] w-full overflow-hidden rounded-md border border-gold/30 shadow-sm">
            {data.hero}
          </div>
          <h2 className="mt-4 text-[13px] font-bold uppercase tracking-wider text-ink">
            Dosage Information
          </h2>
          <DosageTable dosage={data.dosage} />
        </div>

        <StepsColumn steps={data.steps} />
      </div>

      <Footer tagline={data.footerTagline} site={data.brandSite} />
    </article>
  );
}

function IngredientsColumn({ items }: { items: IngredientRow[] }) {
  return (
    <div>
      <h2 className="text-[15px] font-extrabold uppercase tracking-wider text-ink">
        Ingredients
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((row, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="h-10 w-10 shrink-0">{row.icon}</span>
            <span className="text-[13px] leading-tight text-ink">{row.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepsColumn({ steps }: { steps: StepRow[] }) {
  return (
    <div>
      <h2 className="text-[15px] font-extrabold uppercase tracking-wider text-ink">
        Step-by-Step Instructions
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {steps.map((row, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="relative h-11 w-11 shrink-0">
              <span className="absolute inset-0 rounded-full border-2 border-gold/50 bg-cream-soft" />
              <span className="absolute inset-1 overflow-hidden rounded-full">{row.icon}</span>
              <span
                className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: "var(--egnite-gold)" }}
              >
                {i + 1}
              </span>
            </span>
            <span className="text-[13px] leading-tight text-ink">{row.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DosageTable({ dosage }: { dosage: DosageEntry[] }) {
  return (
    <div
      className="mt-2 w-full overflow-hidden rounded-md border"
      style={{ borderColor: "var(--egnite-gold)" }}
    >
      <div
        className="grid text-center text-[11px] font-bold uppercase tracking-wider text-ink"
        style={{
          gridTemplateColumns: `repeat(${dosage.length}, minmax(0,1fr))`,
          background: "var(--egnite-cream-soft)",
          borderBottom: "1px solid var(--egnite-gold)",
        }}
      >
        {dosage.map((d, i) => (
          <div
            key={i}
            className="py-1.5"
            style={{
              borderLeft: i === 0 ? "none" : "1px solid var(--egnite-gold)",
            }}
          >
            {d.label}
          </div>
        ))}
      </div>
      <div
        className="grid bg-cream"
        style={{ gridTemplateColumns: `repeat(${dosage.length}, minmax(0,1fr))` }}
      >
        {dosage.map((d, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2"
            style={{
              borderLeft: i === 0 ? "none" : "1px solid var(--egnite-gold)",
            }}
          >
            <span className="h-9 w-6 shrink-0">{d.icon}</span>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[12px] font-bold text-ink">{d.qty}</span>
              <span className="text-[10px] text-ink/70">Dosage range</span>
              <span className="text-[10px] font-semibold text-ink">{d.range}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer({ tagline, site }: { tagline: string; site: string }) {
  return (
    <footer
      className="flex items-center justify-between px-8 py-3 text-white"
      style={{ background: "var(--egnite-ink-deep)" }}
    >
      <span className="text-[13px] font-medium">{tagline}</span>
      <EgniteWordmark className="h-7 w-auto text-white" />
      <div className="flex items-center gap-2 text-white">
        <span className="text-[12px]">{site}</span>
        <span className="flex items-center gap-1 [&_svg]:h-4 [&_svg]:w-4">
          <GlobeIcon />
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
          <TikTokIcon />
        </span>
      </div>
    </footer>
  );
}
