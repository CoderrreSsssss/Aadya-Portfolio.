import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { categories, gallery } from '../data/portfolioData'
import GalleryFilters from './GalleryFilters'
import Lightbox from './Lightbox'
import Reveal from './Reveal'
import Img from './Img'
function Card({ it, label, onOpen }) {
  const [loaded, setLoaded] = useState(false)
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 180, damping: 18 }), sry = useSpring(ry, { stiffness: 180, damping: 18 })
  const tilt = e => { const r = e.currentTarget.getBoundingClientRect(); ry.set(((e.clientX - r.left) / r.width) * 10 - 5); rx.set(-(((e.clientY - r.top) / r.height) * 10 - 5)) }
  const rest = () => { rx.set(0); ry.set(0) }
  return (
    <motion.figure layout initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.5 }}
      className="group break-inside-avoid overflow-hidden rounded-md border border-line bg-panel shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <button onClick={onOpen} className="block w-full overflow-hidden text-left" aria-label={`Open ${it.title}`}>
        <motion.div onMouseMove={tilt} onMouseLeave={rest} style={loaded ? { rotateX: srx, rotateY: sry, transformPerspective: 900 } : { aspectRatio: '4/5', rotateX: srx, rotateY: sry, transformPerspective: 900 }} className="overflow-hidden bg-line/50">
          <Img src={it.image} alt={it.alt} onLoad={() => setLoaded(true)} className="block h-auto w-full transition duration-700 group-hover:scale-105" />
        </motion.div>
      </button>
      <figcaption className="p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-accent">{label}</span>
        <h3 className="mt-1 font-serif text-2xl">{it.title}</h3>
        <p className="mt-1 text-sm text-mute">{it.caption}</p>
      </figcaption>
    </motion.figure>
  )
}
export default function PortfolioGallery() {
  const [filter, setFilter] = useState('all'), [open, setOpen] = useState(null)
  const items = useMemo(() => filter === 'all' ? gallery : gallery.filter(i => i.category === filter), [filter])
  const close = useCallback(() => setOpen(null), [])
  const label = k => categories.find(c => c.key === k)?.full
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <h2 className="grad-text font-serif text-5xl md:text-7xl">Selected Works</h2>
        <p className="mt-4 max-w-xl font-serif text-xl text-mute">A collection of moments, perspectives, and stories captured through my lens.</p>
      </Reveal>
      <div className="mt-10 border-b border-line"><GalleryFilters value={filter} onChange={setFilter} /></div>
      {items.length === 0 ? (
        <p className="py-24 text-center font-serif text-2xl text-mute">No photographs in this category yet.</p>
      ) : (
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          <AnimatePresence mode="popLayout">
            {items.map((it, i) => <Card key={it.id} it={it} label={label(it.category)} onOpen={() => setOpen(i)} />)}
          </AnimatePresence>
        </div>
      )}
      {open !== null && items[open] && <Lightbox items={items} index={open} onClose={close} onChange={setOpen} />}
    </section>
  )
}
