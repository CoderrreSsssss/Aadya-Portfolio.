import { ArrowRight, Eye, Heart, Users } from 'lucide-react'
import { about, interests, site } from '../data/portfolioData'
import Reveal from './Reveal'
import Img from './Img'
const icons = [Eye, Heart, Users]
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-line bg-panel">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="grad-bg absolute -bottom-5 -right-5 h-full w-full rounded-2xl opacity-90" aria-hidden="true" />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border-2 border-accent/50" aria-hidden="true" />
            <Img src={site.images.about} alt="Portrait of Aadya Singh" eager style={{ aspectRatio: '4/5' }} className="relative w-full rounded-2xl bg-ivory object-cover shadow-2xl" />
            <div className="absolute -bottom-6 left-6 rounded-full border border-line bg-panel px-5 py-2 text-sm shadow-lg"><span className="font-serif text-lg">{site.name}</span><span className="text-mute"> · Photographer</span></div>
          </div>
        </Reveal>
        <Reveal className="md:col-span-7 md:pl-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">About me</p>
          <h2 className="grad-text mt-3 font-serif text-5xl md:text-7xl">{about.heading}</h2>
          <p className="mt-8 max-w-2xl font-serif text-2xl leading-relaxed">{about.intro}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {about.paragraphs.map((p, i) => { const Icon = icons[i % 3]; return (
              <div key={p.title} className="rounded-xl border border-line bg-ivory p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="grad-bg grid h-10 w-10 place-items-center rounded-full text-white"><Icon size={18} /></span>
                <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.text}</p>
              </div>) })}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Photography interests">
            {interests.map(i => <li key={i.title} className="rounded-full border border-line bg-ivory px-4 py-1.5 text-sm text-mute transition hover:border-accent hover:text-accent">{i.title}</li>)}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent">Let's connect <ArrowRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  )
}
