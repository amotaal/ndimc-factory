import Link from "next/link";
import type { ReactNode } from "react";

export default function TemplatesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <nav className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-3 text-sm">
        <Link href="/" className="font-semibold text-zinc-700 hover:text-zinc-900">
          ← ndimc Factory
        </Link>
        <span className="text-zinc-500">Template Preview</span>
      </nav>
      <main className="flex flex-1 items-center justify-center bg-zinc-100 px-6 py-10">
        {children}
      </main>
    </div>
  );
}
