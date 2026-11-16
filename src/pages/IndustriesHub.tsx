import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { Magnetic } from '../components/Magnetic';
import { INDUSTRY_PAGES, industryPath } from '../data/industries';

export default function IndustriesHub() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="wrap">
          <Reveal>
            <div className="rule mb-6" />
            <span className="label block mb-6">Industries</span>
            <h1 className="display-xl text-[clamp(2.2rem,6.4vw,4.8rem)] max-w-[18ch]">
              What we have <span className="accent">built, by industry.</span>
            </h1>
            <p className="lead max-w-2xl mt-7">
              BeForth is a software company based in Nashik, Maharashtra, founded in 2025. These pages describe systems
              we have built, from the systems themselves. We list an industry here only when there is a real system
              behind it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <ul className="grid md:grid-cols-2 gap-x-14 border-t border-ink/15">
            {INDUSTRY_PAGES.map((i) => (
              <Reveal key={i.slug}>
                <li className="py-6 border-b border-ink/15 h-full">
                  <h2 className="display-md text-[20px] mb-2">{i.name}</h2>
                  <p className="body-tight mb-4">{i.description}</p>
                  <Link to={industryPath(i.slug)} className="ulink">
                    See what we built <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap">
          <Reveal>
            <div className="rule mb-9" />
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
              <h2 className="display-lg text-[clamp(1.5rem,3.4vw,2.5rem)] max-w-[22ch]">
                Your industry is not listed? Ask anyway.
              </h2>
              <Magnetic>
                <Link to="/contact" className="btn-signal shrink-0">
                  Tell us what you run <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
