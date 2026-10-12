import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { site, gallery, categories } from '../data/portfolioData'
import Img from './Img'
export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 160])
  const words = site.headline.split(' ')
  const slides = site.heroSlides
  const [s, setS] = useState(0)
  useEffect(() => {
    if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setS(v => (v + 1) % slides.length), 6500)
    return () => clearInterval(t)
  }, [slides.length])
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[600px] items-end overflow-hidden text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence>
          <motion.div key={s} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.4 }}>
            <motion.div initial={{ scale: 1.14 }} animate={{ scale: 1 }} transition={{ duration: 8, ease: 'easeOut' }} className="h-full w-full">
              <Img src={slides[s]} alt="Featured photograph" eager className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 md:px-10 md:pb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-5 inline-block border border-white/30 px-4 py-1.5 text-sm backdrop-blur-sm">{site.label}</motion.p>
        <h1 className="font-serif text-6xl font-medium leading-[0.95] sm:text-8xl lg:text-[9.5rem]" aria-label={site.headline}>
          {words.map((w, wi) => (
            <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap" aria-hidden="true">
              {[...w].map((c, ci) => (
                <motion.span key={ci} className="inline-block" initial={{ opacity: 0, y: 60, rotate: 4 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: 0.4 + (wi * 6 + ci) * 0.045, duration: 0.7, ease: 'easeOut' }}>{c}</motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.3, duration: 0.9 }} className="grad-bg mt-5 h-1 w-40 origin-left" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}>
          <p className="mt-6 max-w-md font-serif text-xl text-white/90 sm:text-2xl">{site.subline}</p>
          <p className="mt-2 text-sm text-white/80">{site.name} · {gallery.length} photographs · {categories.length - 1} categories</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#portfolio" className="grad-bg px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:brightness-110">Explore My Work</a>
            <a href="#about" className="border border-white/60 px-7 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/10">About the Photographer</a>
          </div>
        </motion.div>
      </div>
      {slides.length > 1 && <div className="absolute bottom-8 right-5 flex gap-2 md:right-10">{slides.map((_, i) => <button key={i} onClick={() => setS(i)} aria-label={`Show photo ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === s ? 'w-8 bg-white' : 'w-3 bg-white/50'}`} />)}</div>}
    </section>
  )
}
