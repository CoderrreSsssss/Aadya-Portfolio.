import { categories } from '../data/portfolioData'
export default function Marquee() {
  const words = categories.slice(1).map(c => c.full)
  const row = [...words, ...words]
  return (
    <div className="overflow-hidden border-y border-line bg-panel py-5" aria-hidden="true">
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-serif text-3xl md:text-5xl">
        {[...row, ...row].map((w, i) => <span key={i} className="flex items-center gap-12"><span className={i % 2 ? 'grad-text' : ''}>{w}</span><span className="text-accent">✦</span></span>)}
      </div>
    </div>
  )
}
