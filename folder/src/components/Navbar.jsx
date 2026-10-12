import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { site } from '../data/portfolioData'
const links = [['home', 'Home'], ['portfolio', 'Portfolio'], ['about', 'About'], ['contact', 'Contact']]
export default function Navbar() {
  const [active, setActive] = useState('home'), [open, setOpen] = useState(false), [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40); on()
    window.addEventListener('scroll', on, { passive: true })
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => { window.removeEventListener('scroll', on); io.disconnect() }
  }, [])
  const solidBar = solid || open
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${solidBar ? 'border-b border-line bg-ivory/95 text-ink backdrop-blur' : 'text-white'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10" aria-label="Main">
        <a href="#home" className="font-serif text-xl tracking-wide">{site.brand}</a>
        <ul className="hidden gap-9 text-sm md:flex">
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
              className={`border-b pb-1 transition-opacity hover:opacity-100 ${active === id ? 'border-current opacity-100' : 'border-transparent opacity-70'}`}>{label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-1"><ThemeToggle /><button className="p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button></div>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ivory px-5 pb-6 pt-2 text-ink md:hidden">
          {links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-serif text-2xl">{label}</a></li>)}
        </ul>
      )}
    </header>
  )
}
