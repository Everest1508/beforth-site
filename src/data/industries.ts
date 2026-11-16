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
export const industryPath = (slug: string) => `${INDUSTRIES_PATH}/${slug}`;

/** Route metadata for every industry page and the hub. */
export function industryMeta(): Record<string, { title: string; description: string; keywords: string }> {
  const out: Record<string, { title: string; description: string; keywords: string }> = {};
  for (const i of INDUSTRY_PAGES) {
    out[industryPath(i.slug)] = { title: i.title, description: i.description, keywords: i.keywords };
  }
  out[INDUSTRIES_PATH] = {
    title: 'Industries | Pharma and Interior Contractor Software — Beforth',
    description:
      'Custom software built by Beforth, Nashik, for pharma distribution and operations and for interior and fit-out contractors, described from the systems.',
    keywords: 'pharma software India, interior contractor software India, industry software Nashik',
  };
  return out;
}
