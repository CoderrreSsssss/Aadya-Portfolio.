import { interests } from '../data/portfolioData'
import Reveal from './Reveal'
export default function Interests() {
  return (
    <section className="border-t border-line bg-panel" aria-labelledby="interests-h">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <h2 id="interests-h" className="font-serif text-4xl md:text-5xl">What I Photograph</h2>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {interests.map(i => (
            <li key={i.title} className="group"><Reveal className="grid gap-1 py-6 md:grid-cols-2 md:items-baseline">
              <h3 className="font-serif text-2xl transition duration-300 group-hover:translate-x-3 group-hover:text-accent md:text-4xl">{i.title}</h3>
              <p className="text-mute">{i.text}</p>
            </Reveal></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
