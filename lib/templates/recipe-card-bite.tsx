import type { ReactNode } from "react";
import { EgniteWordmark } from "@/lib/brand/marks";
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
} from "@/lib/icons";

export type RecipeCardBiteGroup = {
  heading?: string;
  items: string[];
};

export type RecipeCardBiteExtendedBlock = {
  heading: string;
  paragraphs?: string[];
  items?: { title?: string; text: string }[];
};

export type RecipeCardBiteData = {
  title: string;
  titleWords?: string[]; // allows line-breaking the title ("BUBBLEGUM FUDGE BITES")
  meta: { label: string; value: string }[]; // "Prep time", "No-Bake", etc.
  ingredients: RecipeCardBiteGroup[];
  instructions: string[];
  note?: string; // short italic note beside ingredients card
  stamp?: string; // "ENJOY EVERY BITE!" etc.
  hero: ReactNode;
  brandSite: string;
  tagline: string;
  extended?: RecipeCardBiteExtendedBlock[]; // optional second page
};

export function RecipeCardBite({ data }: { data: RecipeCardBiteData }) {
  const words = data.titleWords ?? data.title.toUpperCase().split(" ");
  return (
    <article className="mx-auto w-full max-w-[820px] overflow-hidden bg-cream shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]">
      <Page>
        <Header>
          <EgniteWordmark className="h-7 w-auto text-ink" />
        </Header>

        <div className="grid grid-cols-[1.15fr_1fr] gap-6 px-10 pb-6 pt-2">
          <div className="flex flex-col">
            <h1 className="font-display text-[44px] font-black leading-[0.95] tracking-tight text-ink">
              {words.map((w, i) => (
                <span key={i} className="block">
                  {w}
                </span>
              ))}
            </h1>
            <MetaRow items={data.meta} />
            <IngredientsPanel groups={data.ingredients} note={data.note} />
          </div>

          <div className="relative">
            <div className="h-full overflow-hidden rounded-md border border-black/5 bg-cream-soft">
              {data.hero}
            </div>
          </div>
        </div>

        <Instructions items={data.instructions} />

        {data.stamp && (
          <div className="flex justify-end px-10 pb-6">
            <BiteStamp text={data.stamp} />
          </div>
        )}

        <Footer site={data.brandSite} tagline={data.tagline} />
      </Page>

      {data.extended && data.extended.length > 0 && (
        <Page>
          <Header>
            <EgniteWordmark className="h-7 w-auto text-ink" />
          </Header>
          <div className="px-10 pb-6 pt-2">
            <h2 className="font-display text-2xl font-bold text-ink">
              Instructions
            </h2>
            <div
              className="mt-1 h-[2px] w-16 rounded"
              style={{ background: "var(--egnite-rust)" }}
            />
            <div className="mt-6 space-y-5">
              {data.extended.map((block, i) => (
                <ExtendedBlock key={i} block={block} />
              ))}
            </div>
          </div>
          {data.stamp && (
            <div className="flex justify-end px-10 pb-6">
              <BiteStamp text={data.stamp} />
            </div>
          )}
          <Footer site={data.brandSite} tagline={data.tagline} />
        </Page>
      )}
    </article>
  );
}

function Page({ children }: { children: ReactNode }) {
  return <section className="flex flex-col bg-cream">{children}</section>;
}

function Header({ children }: { children: ReactNode }) {
  return <div className="px-10 pt-6 pb-3">{children}</div>;
}

function MetaRow({ items }: { items: RecipeCardBiteData["meta"] }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-ink/80">
      {items.map((m, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          <strong className="text-ink">{m.label}</strong>
          <span>:</span>
          <span>{m.value}</span>
        </span>
      ))}
    </div>
  );
}

function IngredientsPanel({
  groups,
  note,
}: {
  groups: RecipeCardBiteGroup[];
  note?: string;
}) {
  return (
    <div
      className="relative mt-4 rounded-md border bg-paper px-4 py-3"
      style={{ borderColor: "var(--egnite-rust)" }}
    >
      <h2 className="text-[13px] font-extrabold uppercase tracking-wider text-ink">
        Ingredients
      </h2>
      <div className="mt-2 space-y-3">
        {groups.map((g, i) => (
          <div key={i}>
            {g.heading && (
              <h3 className="text-[12px] font-bold text-ink">{g.heading}:</h3>
            )}
            <ul className="mt-1 space-y-0.5 text-[12px] leading-snug text-ink/90">
              {g.items.map((line, j) => (
                <li key={j} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "var(--egnite-ink)" }}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-3 text-[11px] italic text-ink/70">{note}</p>
      )}
    </div>
  );
}

function Instructions({ items }: { items: string[] }) {
  return (
    <section className="bg-cream-soft px-10 pt-5 pb-6">
      <div className="flex items-center gap-3">
        <h2 className="font-display text-[15px] font-extrabold uppercase tracking-[0.2em] text-ink">
          Instructions
        </h2>
        <span
          className="h-[2px] flex-1 rounded"
          style={{ background: "var(--egnite-rust)" }}
        />
      </div>
      <ol className="mt-3 space-y-1.5">
        {items.map((step, i) => (
          <li key={i} className="flex gap-3 text-[12.5px] leading-snug text-ink/90">
            <span className="w-5 shrink-0 text-right font-semibold text-ink">
              {i + 1}.
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ExtendedBlock({ block }: { block: RecipeCardBiteExtendedBlock }) {
  return (
    <div>
      <h3 className="font-display text-base font-bold text-ink">
        {block.heading}
      </h3>
      {block.paragraphs?.map((p, i) => (
        <p key={i} className="mt-1 text-[12.5px] leading-snug text-ink/85">
          {p}
        </p>
      ))}
      {block.items && (
        <ol className="mt-1 space-y-1">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[12.5px] leading-snug text-ink/90">
              <span className="w-5 shrink-0 text-right font-semibold text-ink">
                {i + 1}.
              </span>
              <span>
                {it.title && <strong className="text-ink">{it.title} </strong>}
                {it.text}
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function BiteStamp({ text }: { text: string }) {
  return (
    <svg viewBox="0 0 160 80" className="h-14 w-auto">
      <path
        d="M10 40 Q20 10 80 10 Q140 10 150 40 Q140 70 80 70 Q20 70 10 40 Z"
        fill="none"
        stroke="#c24b2c"
        strokeWidth="2"
      />
      <text
        x="80"
        y="36"
        textAnchor="middle"
        fontFamily="var(--font-script), cursive"
        fontWeight={700}
        fontSize={18}
        fill="#c24b2c"
      >
        Enjoy
      </text>
      <text
        x="80"
        y="56"
        textAnchor="middle"
        fontFamily="var(--font-display), serif"
        fontWeight={800}
        fontSize={14}
        letterSpacing="2"
        fill="#c24b2c"
      >
        {text}
      </text>
    </svg>
  );
}

function Footer({ site, tagline }: { site: string; tagline: string }) {
  return (
    <footer
      className="flex items-center justify-between px-10 py-3 text-white"
      style={{ background: "var(--egnite-ink-deep)" }}
    >
      <span className="text-[11px]">{site}</span>
      <span className="flex items-center gap-1.5 [&_svg]:h-4 [&_svg]:w-4">
        <GlobeIcon />
        <FacebookIcon />
        <InstagramIcon />
        <XIcon />
        <TikTokIcon />
      </span>
      <span className="text-[11px] font-medium">{tagline}</span>
    </footer>
  );
}
