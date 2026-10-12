import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
export default function BackToTop() {
  const [on, setOn] = useState(false)
  useEffect(() => { const f = () => setOn(window.scrollY > 700); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return <AnimatePresence>{on && <motion.a href="#home" aria-label="Back to top" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="grad-bg fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full text-white shadow-lg"><ArrowUp size={20} /></motion.a>}</AnimatePresence>
}
