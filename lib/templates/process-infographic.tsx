import type { ReactNode } from "react";

export type ProcessStep = {
  text: string;
  icon: ReactNode;
};

export type IngredientTableRow = {
  icon: ReactNode;
  item: string;
  quantity: string;
  weight: string;
};

export type DosageCard = {
  label: string;
  value: string;
  icon: ReactNode;
};

export type ProcessInfographicData = {
  title: string;
  ingredients: IngredientTableRow[];
  dosage: DosageCard[];
  steps: ProcessStep[];
  storageNote: string;
  storageIcon: ReactNode;
};

export function ProcessInfographic({
  data,
}: {
  data: ProcessInfographicData;
}) {
  return (
    <article
      className="mx-auto flex w-full max-w-[1060px] flex-col overflow-hidden bg-paper shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]"
      style={{ aspectRatio: "1060 / 600" }}
    >
      <Header title={data.title} />

      <div className="grid grid-cols-[1.8fr_1fr] gap-6 px-8 pt-6">
        <IngredientsTable rows={data.ingredients} />
        <DosageBox items={data.dosage} />
      </div>

      <div className="flex-1 px-8 pt-6 pb-6">
        <h2
          className="relative mx-auto w-fit px-6 py-1.5 text-center text-[15px] font-bold uppercase tracking-wider text-white"
          style={{ background: "var(--egnite-forest)" }}
        >
          Preparation Instructions
        </h2>
        <ProcessFlow steps={data.steps} />
        <StorageNote text={data.storageNote} icon={data.storageIcon} />
      </div>
    </article>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--egnite-forest)",
        paddingTop: "1.25rem",
        paddingBottom: "1.25rem",
        color: "#fff",
      }}
    >
      <Bubbles />
      <h1
        className="relative font-display text-[38px] font-black tracking-wide"
        style={{ letterSpacing: "0.08em" }}
      >
        {title.toUpperCase()}
      </h1>
      <div className="absolute right-10 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/95">
        <svg viewBox="0 0 48 48" className="h-7 w-7">
          <path d="M20 6 L28 6 L28 12 L32 18 L32 40 Q32 44 28 44 L20 44 Q16 44 16 40 L16 18 L20 12 Z" fill="#e57f3a" stroke="#a06a1f" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}

function Bubbles() {
  const dots = Array.from({ length: 30 }).map((_, i) => ({
    cx: (i * 37) % 1060,
    cy: (i * 13) % 70,
    r: 1 + ((i * 7) % 4),
    o: 0.3 + ((i * 11) % 5) / 10,
  }));
  const sparkles = Array.from({ length: 8 }).map((_, i) => ({
    x: 80 + i * 110,
    y: 20 + ((i * 17) % 30),
  }));
  return (
    <svg
      aria-hidden
      viewBox="0 0 1060 80"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      {dots.map((d, i) => (
        <circle key={`d${i}`} cx={d.cx} cy={d.cy} r={d.r} fill="#f4d6b7" opacity={d.o} />
      ))}
      {sparkles.map((s, i) => (
        <path
          key={`s${i}`}
          d={`M${s.x} ${s.y - 5} L${s.x + 1.5} ${s.y - 1.5} L${s.x + 5} ${s.y} L${s.x + 1.5} ${s.y + 1.5} L${s.x} ${s.y + 5} L${s.x - 1.5} ${s.y + 1.5} L${s.x - 5} ${s.y} L${s.x - 1.5} ${s.y - 1.5} Z`}
          fill="#f4d6b7"
          opacity="0.75"
        />
      ))}
    </svg>
  );
}

function IngredientsTable({ rows }: { rows: IngredientTableRow[] }) {
  return (
    <div className="overflow-hidden rounded-md border" style={{ borderColor: "var(--egnite-forest)" }}>
      <div
        className="grid grid-cols-[80px_1.4fr_1fr_1fr] text-[13px] font-bold uppercase tracking-wider text-white"
        style={{ background: "var(--egnite-forest)" }}
      >
        <div className="py-1.5 text-center">Icon</div>
        <div className="py-1.5">Item</div>
        <div className="py-1.5 text-center">Quantity</div>
        <div className="py-1.5 text-center">Weight</div>
      </div>
      <div className="bg-cream-soft">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[80px_1.4fr_1fr_1fr] items-center text-[12px] text-ink"
            style={{ borderTop: i === 0 ? "none" : "1px solid rgba(42,58,50,0.15)" }}
          >
            <div className="flex items-center justify-center py-1.5">
              <span className="block h-8 w-8">{r.icon}</span>
            </div>
            <div className="py-1.5">{r.item}</div>
            <div className="py-1.5 text-center">{r.quantity}</div>
            <div className="py-1.5 text-center">{r.weight}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DosageBox({ items }: { items: DosageCard[] }) {
  return (
    <div className="overflow-hidden rounded-md border" style={{ borderColor: "var(--egnite-forest)" }}>
      <div
        className="py-1.5 text-center text-[13px] font-bold uppercase tracking-wider text-white"
        style={{ background: "var(--egnite-forest)" }}
      >
        Dosage Information:
        <div className="text-[11px] font-normal normal-case tracking-normal text-white/80">
          Essence or Emulsion
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-2 bg-cream-soft px-2 py-3 text-center"
      >
        {items.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="block h-10 w-10">{c.icon}</span>
            <span className="text-[11px] font-semibold leading-tight text-ink">
              {c.label}
            </span>
            <span className="text-[12px] font-bold text-ink">{c.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessFlow({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="mt-4 flex items-start justify-between">
      {steps.map((s, i) => (
        <div key={i} className="flex flex-1 items-start justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <span
                className="absolute -left-1 -top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: "var(--egnite-orange)" }}
              >
                {i + 1}
              </span>
              <span
                className="block h-[70px] w-[70px] overflow-hidden rounded-full"
                style={{ background: "var(--egnite-peach)" }}
              >
                {s.icon}
              </span>
            </div>
            <p className="mt-2 w-[110px] text-[10.5px] leading-tight text-ink">
              {i + 1}. {s.text}
            </p>
          </div>
          {i < steps.length - 1 && (
            <Arrow />
          )}
        </div>
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" className="mt-7 shrink-0">
      <path
        d="M2 10 L22 10"
        stroke="var(--egnite-orange)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 4 L24 10 L18 16"
        stroke="var(--egnite-orange)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StorageNote({ text, icon }: { text: string; icon: ReactNode }) {
  return (
    <div
      className="ml-auto mt-4 flex max-w-[55%] items-center gap-3 rounded-md border px-4 py-2"
      style={{ borderColor: "rgba(42,58,50,0.2)", background: "var(--egnite-cream-soft)" }}
    >
      <span className="block h-10 w-10 shrink-0">{icon}</span>
      <p className="text-[12px] leading-snug text-ink">
        <strong className="uppercase tracking-wider">Storage note: </strong>
        {text}
      </p>
    </div>
  );
}
