import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react'
import { categories } from '../data/portfolioData'
import Img from './Img'
export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index], closeRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const go = useCallback(d => onChange((index + d + items.length) % items.length), [index, items.length, onChange])
  useEffect(() => {
    const trigger = document.activeElement
    closeRef.current?.focus()
    return () => trigger?.focus?.()
  }, [])
  useEffect(() => {
    const key = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', key)
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = prev }
  }, [go, onClose])
  useEffect(() => { if (!playing) return; const t = setInterval(() => go(1), 3500); return () => clearInterval(t) }, [playing, go])
  const btn = 'absolute z-10 p-3 text-white/80 transition hover:text-white'
  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-50 flex flex-col bg-[#161412]/95 text-white" onClick={onClose}>
      <button ref={closeRef} onClick={onClose} aria-label="Close" className={`${btn} right-3 top-3`}><X size={28} /></button>
      <button onClick={e => { e.stopPropagation(); setPlaying(p => !p) }} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} className={`${btn} right-14 top-3`}>{playing ? <Pause size={26} /> : <Play size={26} />}</button>
      <button onClick={e => { e.stopPropagation(); go(-1) }} aria-label="Previous photograph" className={`${btn} left-1 top-1/2 -translate-y-1/2 md:left-4`}><ChevronLeft size={32} /></button>
      <button onClick={e => { e.stopPropagation(); go(1) }} aria-label="Next photograph" className={`${btn} right-1 top-1/2 -translate-y-1/2 md:right-4`}><ChevronRight size={32} /></button>
      <motion.div drag="x" dragSnapToOrigin dragElastic={0.4} onDragEnd={(_, i) => { if (i.offset.x < -60) go(1); else if (i.offset.x > 60) go(-1) }} className="flex min-h-0 flex-1 items-center justify-center px-12 pt-14 md:px-24" onClick={e => e.stopPropagation()}>
        <Img key={item.id} src={item.image} alt={item.alt} eager className="max-h-full max-w-full object-contain" />
      </motion.div>
      <div className="px-6 py-5 text-center" onClick={e => e.stopPropagation()}>
        <h3 className="font-serif text-2xl">{item.title}</h3>
        <p className="mt-1 text-xs text-white/70">{categories.find(c => c.key === item.category)?.full}{item.location ? `, ${item.location}` : ''}{item.year ? `, ${item.year}` : ''}</p>
        <p className="mx-auto mt-2 max-w-md font-serif text-lg text-white/85">{item.caption}</p>
        {item.story && <p className="mx-auto mt-2 max-w-lg text-sm text-white/65">{item.story}</p>}
        {(item.camera || item.settings) && <p className="mt-2 text-xs text-white/50">{[item.camera, item.settings].filter(Boolean).join('  |  ')}</p>}
        <p className="mt-2 text-xs text-white/50">{index + 1} / {items.length}</p>
      </div>
    </div>
  )
}
