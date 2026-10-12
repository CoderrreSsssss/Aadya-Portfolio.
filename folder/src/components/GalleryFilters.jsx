import { categories } from '../data/portfolioData'
export default function GalleryFilters({ value, onChange }) {
  return (
    <div role="group" aria-label="Filter photographs" className="-mx-5 flex gap-6 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
      {categories.map(c => (
        <button key={c.key} onClick={() => onChange(c.key)} aria-pressed={value === c.key}
          className={`shrink-0 border-b py-2 text-sm transition ${value === c.key ? 'border-accent text-ink' : 'border-transparent text-mute hover:text-ink'}`}>{c.label}</button>
      ))}
    </div>
  )
}
