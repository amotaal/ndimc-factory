import Link from "next/link";
import { getAllEntries } from "@/lib/content/registry";

const KIND_LABEL: Record<string, string> = {
  "recipe-card-classic": "recipe · classic",
  "recipe-card-bite": "recipe · bite",
  "landscape-recipe": "infographic · landscape",
  "process-infographic": "infographic · process",
};

const KIND_ACCENT: Record<string, string> = {
  "recipe-card-classic": "var(--egnite-rust)",
  "recipe-card-bite": "var(--egnite-orange)",
  "landscape-recipe": "var(--egnite-gold)",
  "process-infographic": "var(--egnite-forest)",
};

export default function Home() {
  const entries = getAllEntries();

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
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">
            Each card below is a digital recreation of a sample artefact from{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">/samples</code>.
            Templates live in{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">
              lib/templates
            </code>
            , entries in{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">
              lib/content/entries
            </code>
            , and a single{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">registry.ts</code>{" "}
            drives both this gallery and the dynamic route{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5">
              /templates/[slug]
            </code>
            . Adding a recipe = one entry file + one line in the registry.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            {entries.length} templates · {countKinds(entries)}
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-8 py-10">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/templates/${entry.slug}`}
                className="group flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <div
                  className="h-1.5 w-10 rounded"
                  style={{ background: KIND_ACCENT[entry.kind] }}
                />
                <span className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                  {KIND_LABEL[entry.kind] ?? entry.kind}
                </span>
                <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                  {entry.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                  {entry.description}
                </p>
                <span className="mt-3 text-[11px] text-zinc-400">
                  source: {entry.source}
                </span>
                <span className="mt-1 text-sm font-medium text-zinc-900 group-hover:underline">
                  Open preview →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-12 rounded-lg border border-dashed border-zinc-300 bg-white p-6 text-sm leading-relaxed text-zinc-600">
          <h3 className="text-base font-semibold text-zinc-900">
            How the factory scales
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              A <strong>template</strong> is a pure React component + a typed{" "}
              <em>data shape</em>. One template renders any number of entries.
            </li>
            <li>
              An <strong>entry</strong> is a data object that declares a{" "}
              <code>kind</code> (which template) and the content to render.
            </li>
            <li>
              The <strong>registry</strong> is the single source of truth. The
              gallery and the dynamic route both derive from it, so generating
              100 recipes is 100 entries — no layout duplication.
            </li>
            <li>
              Future: entries can be loaded from JSON / a CMS / a database with
              zero change to templates.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

function countKinds(entries: readonly { kind: string }[]): string {
  const counts = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.kind] = (acc[e.kind] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts)
    .map(([k, n]) => `${n} × ${KIND_LABEL[k] ?? k}`)
    .join(" · ");
}
