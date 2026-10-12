import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data/portfolioData'
export default function Preloader() {
  const [show, setShow] = useState(true)
  useEffect(() => { const t = setTimeout(() => setShow(false), 1700); return () => clearTimeout(t) }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div key="pre" exit={{ y: '-100%' }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[100] grid place-items-center bg-ivory">
          <div className="text-center">
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grad-text font-serif text-5xl md:text-7xl">{site.name}</motion.p>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1.1 }} className="grad-bg mx-auto mt-4 h-0.5 w-40 origin-left" />
            <p className="mt-3 text-xs tracking-[0.4em] text-mute">PHOTOGRAPHY</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
