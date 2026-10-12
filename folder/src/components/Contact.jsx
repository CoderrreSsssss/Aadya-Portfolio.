import { useState } from 'react'
import { site } from '../data/portfolioData'
import Reveal from './Reveal'
export default function Contact() {
  const rows = [
    ['Email', site.email && `mailto:${site.email}`, site.email],
    ['Instagram', site.instagram, site.instagram.replace(/^https?:\/\/(www\.)?/, '')],
    [site.societyName, site.society, site.society.replace(/^https?:\/\/(www\.)?/, '')],
  ]
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="grad-text font-serif text-5xl md:text-8xl">Let's Connect</h2>
          <p className="mt-5 max-w-lg font-serif text-xl text-mute">Open to creative collaborations, campus projects, and new perspectives.</p>
        </Reveal>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {rows.filter(r => r[1]).map(([label, href, text]) => (
            <li key={label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-serif text-2xl">{label}</span>
              {href ? <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="break-all underline underline-offset-4">{text}</a>
                : <span className="text-mute">To be added</span>}
            </li>
          ))}
        </ul>
        {site.email && <MessageForm />}
      </div>
    </section>
  )
}

function MessageForm() {
  const [f, setF] = useState({ name: '', msg: '' })
  const on = k => e => setF({ ...f, [k]: e.target.value })
  const send = e => { e.preventDefault(); window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Message from ' + f.name)}&body=${encodeURIComponent(f.msg)}` }
  const cls = 'w-full rounded-md border border-line bg-panel px-4 py-3 outline-none transition focus:border-accent'
  return (
    <form onSubmit={send} className="mt-12 grid max-w-2xl gap-4">
      <h3 className="font-serif text-3xl">Send a message</h3>
      <label htmlFor="cf-name" className="sr-only">Your name</label>
      <input id="cf-name" required value={f.name} onChange={on('name')} placeholder="Your name" className={cls} />
      <label htmlFor="cf-msg" className="sr-only">Message</label>
      <textarea id="cf-msg" required rows={5} value={f.msg} onChange={on('msg')} placeholder="Your message" className={cls} />
      <button className="grad-bg w-fit px-8 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:brightness-110">Send via email</button>
    </form>
  )
}
