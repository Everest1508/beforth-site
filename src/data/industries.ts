/**
 * Industry pages ("Software for pharma distribution", ...), driven by
 * industries.json so the app and the build scripts read one list.
 *
 * Honesty (designV2.md section 8): every line under `groups` must be something a
 * shipped codebase of ours actually does, described without naming a client.
 * Client names are published as names only (clients.ts), so never tie a system
 * to a named client, and never add counts, timings or results. Do not add an
 * industry without a real system behind it.
 */
import data from './industries.json';

export interface IndustryGroup {
  title: string;
  intro: string;
  items: string[];
}

export interface Industry {
  slug: string;
  /** Overrides /industries/<slug> for pages that are not an industry. */
  path?: string;
  /** Overrides "Software for " in the H1. */
  h1Prefix?: string;
  /** Overrides "Industries / <name>" above the H1. */
  label?: string;
  name: string;
  title: string;
  description: string;
  keywords: string;
  headline: string;
  lead: string;
  groups: IndustryGroup[];
  note: string;
  links: { to: string; label: string; note: string }[];
}

export const INDUSTRY_PAGES = data as Industry[];

export const INDUSTRIES_PATH = '/industries';
export const industryPath = (slug: string) =>
  INDUSTRY_PAGES.find((i) => i.slug === slug)?.path ?? `${INDUSTRIES_PATH}/${slug}`;

/** Pages that are industries, as opposed to the platforms page. */
export const INDUSTRY_ONLY = INDUSTRY_PAGES.filter((i) => !i.path);

export const h1Prefix = (i: Industry) => i.h1Prefix ?? 'Software for ';

/** Route metadata for every industry page and the hub. */
export function industryMeta(): Record<string, { title: string; description: string; keywords: string }> {
  const out: Record<string, { title: string; description: string; keywords: string }> = {};
  for (const i of INDUSTRY_PAGES) {
    out[industryPath(i.slug)] = { title: i.title, description: i.description, keywords: i.keywords };
  }
  out[INDUSTRIES_PATH] = {
    title: 'Industries We Build Software For | Beforth, Nashik',
    description:
      'Software built by Beforth, Nashik, for pharma, salons, restaurants and food retail, interior contractors and field sales teams, described from the systems.',
    keywords: 'pharma software India, salon software India, restaurant POS India, interior contractor software India, field sales app India',
  };
  return out;
}
