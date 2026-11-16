import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../components/Reveal';
import { Magnetic } from '../components/Magnetic';
import { INDUSTRY_PAGES, INDUSTRIES_PATH, industryPath, h1Prefix } from '../data/industries';

/**
 * One industry page, rendered from src/data/industries.json.
 *
 * Honesty rules (designV2.md section 8) apply: each item states something a
 * shipped system of ours does, with no client names, counts, timings or results.
 */
export default function IndustryPage({ slug }: { slug: string }) {
  const ind = INDUSTRY_PAGES.find((i) => i.slug === slug);
  if (!ind) return null;
  const others = INDUSTRY_PAGES.filter((i) => i.slug !== slug);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="wrap">
          <Reveal>
            <div className="rule mb-6" />
            <span className="label block mb-6">{ind.label ?? `Industries / ${ind.name}`}</span>
            <h1 className="display-xl text-[clamp(2.2rem,6.4vw,4.8rem)] max-w-[20ch]">
              {h1Prefix(ind)}<span className="accent">{ind.headline}.</span>
            </h1>
            <p className="lead max-w-2xl mt-7">{ind.lead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link to="/contact" className="btn-signal">
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to={INDUSTRIES_PATH} className="ulink">
                All industries <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="wrap flex flex-col gap-16 md:gap-20">
          {ind.groups.map((g, i) => (
            <Reveal key={g.title}>
              <article className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="label text-signal">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-ink/15" />
                  </div>
                  <h2 className="display-lg text-[clamp(1.5rem,3.4vw,2.4rem)] mb-4">{g.title}</h2>
                  <p className="body max-w-md">{g.intro}</p>
                </div>
                <div className="surface p-6 md:p-9 h-fit">
                  <span className="label block mb-5">What it does</span>
                  <ul className="flex flex-col gap-3">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-signal mt-1 shrink-0" />
                        <span className="text-[14px] text-ink leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-bone">
        <div className="wrap relative z-10">
          <Reveal>
            <div className="rule mb-6" />
            <h2 className="display-lg text-[clamp(1.5rem,3.4vw,2.5rem)] mb-5 max-w-[22ch]">How to read this page.</h2>
            <p className="body max-w-2xl">{ind.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap">
          <Reveal>
            <div className="rule mb-6" />
            <h2 className="display-lg text-[clamp(1.5rem,3.4vw,2.5rem)] mb-8 max-w-[22ch]">Read before you decide.</h2>
            <ul className="grid md:grid-cols-3 gap-x-10 border-t border-ink/15">
              {ind.links.map((l) => (
                <li key={l.to} className="py-6 border-b border-ink/15">
                  <Link to={l.to} className="ulink">
                    {l.label} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <p className="body-tight mt-2">{l.note}</p>
                </li>
              ))}
            </ul>
            {others.length > 0 && (
              <div className="mt-10 pt-8 border-t border-ink/15">
                <span className="label block mb-4">More we have built</span>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link to={industryPath(o.slug)} className="ulink">{o.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
              <p className="body max-w-md">
                BeForth, Nashik, Maharashtra, India. Email support@beforth.in or call +91 97661 83834.
              </p>
              <Magnetic>
                <Link to="/contact" className="btn-signal shrink-0">
                  Tell us the problem <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
