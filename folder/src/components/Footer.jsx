import { ArrowUp } from 'lucide-react'
import { site } from '../data/portfolioData'
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-mute md:flex-row md:items-center md:justify-between md:px-10">
        <p><span className="font-serif text-lg text-ink">{site.name}</span> · Photography Portfolio · © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-6">
          {site.instagram && <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Instagram</a>}
          {site.email && <a href={`mailto:${site.email}`} className="hover:text-ink">Email</a>}
          <a href="#home" className="inline-flex items-center gap-1 hover:text-ink"><ArrowUp size={16} /> Back to top</a>
        </div>
      </div>
    </footer>
  )
}
