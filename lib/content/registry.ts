import type { ContentEntry } from "./types";
import lemonCake from "./entries/lemon-cake";
import biscuitFilling from "./entries/biscuit-filling";
import carbonated from "./entries/carbonated";
import wildberryCupcakes from "./entries/wildberry-cupcakes";
import mixedberriesCake from "./entries/mixedberries-cake";
import coffeebeanCookies from "./entries/coffeebean-cookies";
import coconutMadeleines from "./entries/coconut-madeleines";
import creamyPinwheelCookies from "./entries/creamy-pinwheel-cookies";
import hazelnutChocolateCookies from "./entries/hazelnut-chocolate-cookies";
import bubblegumFudgebites from "./entries/bubblegum-fudgebites";
import strawberryShortcake from "./entries/strawberry-shortcake";

/**
 * The single source of truth for every artefact the factory knows about.
 * Add a new entry file in /lib/content/entries and register it here.
 *
 * In a future iteration this list can be replaced with a CMS / DB / filesystem
 * loader — callers only depend on `getAllEntries()` / `getEntryBySlug()`.
 */
const entries: readonly ContentEntry[] = [
  lemonCake,
  biscuitFilling,
  carbonated,
  bubblegumFudgebites,
  strawberryShortcake,
  wildberryCupcakes,
  mixedberriesCake,
  coffeebeanCookies,
  coconutMadeleines,
  creamyPinwheelCookies,
  hazelnutChocolateCookies,
];

export function getAllEntries(): readonly ContentEntry[] {
  return entries;
}

export function getEntryBySlug(slug: string): ContentEntry | undefined {
  return entries.find((e) => e.slug === slug);
}

export function getAllSlugs(): string[] {
  return entries.map((e) => e.slug);
}
