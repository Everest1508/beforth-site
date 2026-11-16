/**
 * Industry pages, read from src/data/industries.json so the build scripts and
 * the app agree on the list. Mirrors industryPath() in src/data/industries.ts.
 */
import { readFileSync } from 'node:fs';

export const INDUSTRIES = JSON.parse(
  readFileSync(new URL('../src/data/industries.json', import.meta.url), 'utf8'),
);

export const industryPath = (slug) =>
  INDUSTRIES.find((i) => i.slug === slug)?.path ?? `/industries/${slug}`;

/** Every route the industry pages add, including the /industries hub. */
export const INDUSTRY_ROUTES = [...INDUSTRIES.map((i) => industryPath(i.slug)), '/industries'];
