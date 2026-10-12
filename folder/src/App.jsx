import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import PortfolioGallery from './components/PortfolioGallery'
import About from './components/About'
import Journey from './components/Journey'
import Interests from './components/Interests'
import CreativeProcess from './components/CreativeProcess'
import FeaturedFrame from './components/FeaturedFrame'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import BackToTop from './components/BackToTop'
import Filmstrip from './components/Filmstrip'
export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <MotionConfig reducedMotion="user">
      <motion.div style={{ scaleX }} className="grad-bg fixed inset-x-0 top-0 z-50 h-[3px] origin-left" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <motion.div className="grad-bg absolute -left-40 top-1/4 h-96 w-96 rounded-full opacity-[0.18] blur-3xl" animate={{ x: [0, 120, 0], y: [0, 80, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="grad-bg absolute -right-40 bottom-1/4 h-96 w-96 rounded-full opacity-[0.15] blur-3xl" animate={{ x: [0, -120, 0], y: [0, -80, 0] }} transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <Preloader /><Cursor /><Navbar /><BackToTop />
      <main className="relative z-10">
        <Hero /><Marquee /><PortfolioGallery /><Filmstrip /><About /><Journey /><Interests /><CreativeProcess /><FeaturedFrame /><Contact />
      </main>
      <div className="relative z-10"><Footer /></div>
    </MotionConfig>
  )
}
