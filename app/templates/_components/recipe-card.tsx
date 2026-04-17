import type { ReactNode } from "react";
import { EgniteWordmark, StayEgnitedSeal } from "./egnite-marks";

export type RecipeCardData = {
  title: string;
  subtitle?: string;
  times: { prep: string; cook: string; bake: string };
  servings?: string;
  ingredients: string[];
  colorsChosen: {
    intro: string;
    palette: { swatch: string; drops: string }[];
    note?: string;
  };
  instructions: string[];
  hero: ReactNode;
};

export function RecipeCard({ data }: { data: RecipeCardData }) {
  return (
    <article className="mx-auto w-full max-w-[820px] bg-cream shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)] print:shadow-none">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-cream-soft">
        <div className="absolute inset-0 flex items-center justify-center">
          {data.hero}
        </div>
        <div className="absolute left-6 top-5">
          <EgniteWordmark className="h-7 w-auto text-ink" />
        </div>
      </div>

      <header className="bg-cream px-10 pt-6 pb-4">
        <h1
          className="font-display text-5xl font-black tracking-tight text-ink"
          style={{ letterSpacing: "-0.02em" }}
        >
          {data.title.toUpperCase()}
        </h1>
        <div
          className="mt-2 h-[3px] w-24 rounded"
          style={{ background: "var(--egnite-rust)" }}
        />
      </header>

      <section className="grid grid-cols-[1fr_1fr] gap-x-8 px-10">
        <TimeTable times={data.times} servings={data.servings} />
      </section>

      <section className="grid grid-cols-[1fr_1fr] gap-x-8 px-10 pt-4">
        <div>
          <h2 className="font-display text-lg font-bold text-ink">
            Ingredients
          </h2>
          <ul className="mt-2 space-y-1 text-[13px] leading-snug text-ink/90">
            {data.ingredients.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--egnite-rust)" }}
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-ink">
            Colors Chosen Varying
          </h2>
          <p className="mt-2 text-[13px] italic text-ink/80">
            {data.colorsChosen.intro}
          </p>
          <ul className="mt-2 space-y-1.5">
            {data.colorsChosen.palette.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-[13px]">
                <span
                  aria-hidden
                  className="h-4 w-4 rounded-full border border-black/10 shadow-inner"
                  style={{ background: p.swatch }}
                />
                <span>{p.drops}</span>
              </li>
            ))}
          </ul>
          {data.colorsChosen.note && (
            <p className="mt-2 text-[11px] italic text-ink/60">
              {data.colorsChosen.note}
            </p>
          )}
        </div>
      </section>

      <section className="relative mt-6 bg-cream-soft px-10 pb-10 pt-6">
        <h2 className="font-display text-xl font-bold text-ink">Instructions</h2>
        <div className="mt-1 h-[2px] w-16 rounded" style={{ background: "var(--egnite-rust)" }} />
        <ol className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
          {data.instructions.map((step, i) => (
            <li key={i} className="flex gap-3 text-[13px] leading-snug text-ink/90">
              <span
                className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ background: "var(--egnite-rust)" }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="pointer-events-none absolute -right-6 -bottom-4 w-40">
          <StayEgnitedSeal className="h-40 w-40" />
        </div>
      </section>
    </article>
  );
}

function TimeTable({
  times,
  servings,
}: {
  times: RecipeCardData["times"];
  servings?: string;
}) {
  return (
    <div className="col-span-2 grid grid-cols-4 gap-2 rounded-md bg-cream-soft px-3 py-2 text-[11px]">
      <Cell label="Prep Time" value={times.prep} />
      <Cell label="Cook Time" value={times.cook} />
      <Cell label="Bake Time" value={times.bake} />
      {servings ? (
        <Cell label="Serves" value={servings} />
      ) : (
        <Cell label="Total" value="75 Min" />
      )}
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-[10px] uppercase tracking-wider text-ink/60">
        {label}
      </span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}
