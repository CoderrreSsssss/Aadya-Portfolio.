import { motion } from 'framer-motion'
import { journey, toolkit } from '../data/portfolioData'
import Reveal from './Reveal'
export default function Journey() {
  return (
    <section className="bg-panel" aria-labelledby="journey-h">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-10 md:py-32">
        <h2 id="journey-h" className="grad-text font-serif text-5xl md:text-7xl">{journey.heading}</h2>
        <ol className="relative mt-14 ml-3 border-l border-line pl-8 md:pl-12">
          <motion.span className="grad-bg absolute -left-px top-0 h-full w-0.5 origin-top" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeInOut' }} aria-hidden="true" />
          {journey.entries.map((e, i) => (
            <li key={e.title} className="relative pb-12 last:pb-0">
              <span className="grad-bg absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full md:-left-[3.45rem]" aria-hidden="true" />
              <Reveal delay={i * 0.05}>
                <p className="text-sm text-accent">{e.when}</p>
                <h3 className="font-serif text-3xl md:text-4xl">{e.title}</h3>
                <p className="mt-2 max-w-xl text-mute">{e.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        {toolkit.items.length > 0 && (
          <div className="mt-20">
            <h3 className="font-serif text-3xl md:text-4xl">{toolkit.heading}</h3>
            <dl className="mt-6 grid gap-px bg-line sm:grid-cols-3">
              {toolkit.items.map(t => <div key={t.title} className="bg-panel p-6 transition hover:bg-ivory"><dt className="font-serif text-2xl">{t.title}</dt><dd className="mt-2 text-sm text-mute">{t.text}</dd></div>)}
            </dl>
          </div>
        )}
      </div>
    </section>
  )
}
