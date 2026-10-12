import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 320, damping: 28 }), sy = useSpring(y, { stiffness: 320, damping: 28 })
  const [big, setBig] = useState(false), [fine, setFine] = useState(false)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setFine(true)
    const mv = e => { x.set(e.clientX); y.set(e.clientY); setBig(!!e.target.closest?.('a, button, figure')) }
    window.addEventListener('mousemove', mv)
    return () => window.removeEventListener('mousemove', mv)
  }, [x, y])
  if (!fine) return null
  return <motion.div aria-hidden="true" style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }} animate={{ width: big ? 64 : 22, height: big ? 64 : 22 }}
    className={`pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-accent transition-colors ${big ? 'bg-accent/15' : 'bg-transparent'}`} />
}
