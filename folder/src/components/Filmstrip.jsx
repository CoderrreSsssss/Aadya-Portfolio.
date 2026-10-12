import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gallery } from '../data/portfolioData'
import Img from './Img'
export default function Filmstrip() {
  const ref = useRef(null), [w, setW] = useState(0)
  useEffect(() => {
    const m = () => ref.current && setW(Math.max(0, ref.current.scrollWidth - ref.current.offsetWidth + 40))
    m(); const t = setTimeout(m, 1200); window.addEventListener('resize', m)
    return () => { clearTimeout(t); window.removeEventListener('resize', m) }
  }, [])
  const items = gallery.slice(0, 12)
  if (!items.length) return null
  return (
    <section className="overflow-hidden border-t border-line bg-panel py-20 md:py-28" aria-label="Film strip">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="grad-text font-serif text-4xl md:text-6xl">Frame by Frame</h2>
        <p className="mt-3 text-mute">Drag to explore</p>
      </div>
      <motion.div ref={ref} drag="x" dragConstraints={{ left: -w, right: 0 }} className="mt-10 flex cursor-grab gap-4 px-5 active:cursor-grabbing md:px-10">
        {items.map(it => (
          <div key={it.id} className="h-72 w-56 shrink-0 overflow-hidden rounded-md border border-line md:h-96 md:w-72">
            <Img src={it.image} alt={it.alt} draggable={false} className="pointer-events-none h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
