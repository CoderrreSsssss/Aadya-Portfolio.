import { useState } from 'react'
export default function Img({ src, alt, className = '', eager = false, ...rest }) {
  const [bad, setBad] = useState(false)
  if (bad || !src) return <div role="img" aria-label={alt} className={`grid place-items-center bg-panel text-xs text-mute ${className}`}>Image unavailable</div>
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setBad(true)} className={className} {...rest} />
}
