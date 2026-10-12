import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { site } from '../data/portfolioData'
const saved = () => { try { return localStorage.getItem('theme') } catch { return null } }
export default function ThemeToggle() {
  const base = site.theme && site.theme !== 'night' ? site.theme : 'light'
  const [t, setT] = useState(() => saved() || base)
  useEffect(() => { document.documentElement.dataset.theme = t; try { localStorage.setItem('theme', t) } catch { /* ignore */ } }, [t])
  const dark = t === 'night'
  return <button onClick={() => setT(dark ? base : 'night')} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className="p-2">{dark ? <Sun size={20} /> : <Moon size={20} />}</button>
}
