import { featured } from '../data/portfolioData'
import Img from './Img'
export default function FeaturedFrame() {
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden text-white" aria-label="Favourite frame">
      <Img src={featured.image} alt={featured.alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 md:px-10 md:pb-20">
        <h2 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">{featured.heading}</h2>
        <p className="mt-4 max-w-md text-white/85">{featured.caption}</p>
      </div>
    </section>
  )
}
