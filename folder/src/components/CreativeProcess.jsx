import { process } from '../data/portfolioData'
import Reveal from './Reveal'
export default function CreativeProcess() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32" aria-labelledby="process-h">
      <h2 id="process-h" className="grad-text max-w-2xl font-serif text-5xl md:text-7xl">{process.heading}</h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
        {process.steps.map((s, i) => (
          <li key={s.title} className={`border-t border-accent/60 pt-6 ${i > 0 ? 'md:ml-8' : ''}`} style={{ marginTop: `${i * 2}rem` }}>
            <Reveal delay={i * 0.12}>
              <span className="grad-text font-serif text-3xl">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-serif text-4xl">{s.title}</h3>
              <p className="mt-3 max-w-xs text-mute">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
