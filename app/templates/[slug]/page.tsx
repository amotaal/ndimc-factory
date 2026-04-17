import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RenderEntry } from "@/lib/content/render";
import { getAllSlugs, getEntryBySlug } from "@/lib/content/registry";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return { title: "Template not found" };
  return { title: `${entry.name} — ndimc Factory` };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();
  return <RenderEntry entry={entry} />;
}
