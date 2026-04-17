import Link from "next/link";

type Sample = {
  slug: string;
  name: string;
  description: string;
  kind: "recipe" | "infographic";
  accent: string;
};

const samples: Sample[] = [
  {
    slug: "lemon-cake",
    name: "Lemoncake",
    description:
      "Portrait recipe card: hero photo, times, ingredients + color palette, numbered instructions, brand seal.",
    kind: "recipe",
    accent: "var(--egnite-rust)",
  },
  {
    slug: "biscuit-filling",
    name: "Biscuit Filling",
    description:
      "Landscape infographic: ingredients column with icons, centerpiece photo, dosage table, step-by-step column, dark brand footer.",
    kind: "infographic",
    accent: "var(--egnite-gold)",
  },
  {
    slug: "carbonated",
    name: "Carbonated",
    description:
      "Process infographic: dark forest header with bubbles, ingredients table + dosage card, horizontal numbered process flow with arrows, storage note.",
    kind: "infographic",
    accent: "var(--egnite-forest)",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white px-8 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Content Factory
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900">
            ndimc — Template Gallery
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Each card below is a digital recreation of a sample artefact from
            the <code className="rounded bg-zinc-100 px-1 py-0.5">/samples</code>{" "}
            folder. Every template is a pure React component driven by a typed
            data object, so the same layout can render hundreds of variants just
            by swapping the data.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-8 py-10">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/templates/${s.slug}`}
                className="group flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <div
                  className="h-1.5 w-10 rounded"
                  style={{ background: s.accent }}
                />
                <span className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                  {s.kind}
                </span>
                <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                  {s.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                  {s.description}
                </p>
                <span className="mt-4 text-sm font-medium text-zinc-900 group-hover:underline">
                  Open preview →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-12 rounded-lg border border-dashed border-zinc-300 bg-white p-6 text-sm leading-relaxed text-zinc-600">
          <h3 className="text-base font-semibold text-zinc-900">How it works</h3>
          <p className="mt-2">
            Each template in{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">
              app/templates/_components
            </code>{" "}
            defines a typed <em>data shape</em> and renders it. The data lives
            separately in{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">
              app/templates/_data
            </code>
            . Generating 100 variants of a recipe means producing 100 data
            objects and mapping them over the same template — no duplicated
            layout, no per-item hand-work. Icons and illustrations are inline
            SVG, so nothing extra is bundled.
          </p>
        </section>
      </main>
    </div>
  );
}
