import { useState, useEffect } from 'react'

/**
 * Renders an <img> if `src` loads successfully; otherwise renders a
 * placeholder div (gradient + icon). This lets the site work immediately
 * with elegant placeholders, and automatically upgrade to real photos
 * the instant a matching file is dropped into the public/images folder
 * — no code changes needed.
 *
 * Props:
 *  - src: image URL to try loading
 *  - className: class applied to the <img> when loaded
 *  - fallbackClassName: class applied to the placeholder <div> (defaults to className)
 *  - fallbackStyle: inline style for the placeholder div (e.g. a CSS gradient)
 *  - icon / children: placeholder content
 */
export default function ImageWithFallback({
  src,
  alt = '',
  icon,
  className = '',
  fallbackClassName = '',
  fallbackStyle = {},
  children,
}) {
  const [status, setStatus] = useState(src ? 'loading' : 'fallback')

  useEffect(() => {
    if (!src) {
      setStatus('fallback')
      return
    }
    setStatus('loading')
    const img = new Image()
    img.onload = () => setStatus('loaded')
    img.onerror = () => setStatus('fallback')
    img.src = src
  }, [src])

  if (status === 'loaded') {
    return <img src={src} alt={alt} className={className} />
  }

  return (
    <div className={fallbackClassName || className} style={fallbackStyle}>
      {icon}
      {children}
    </div>
  )
}
