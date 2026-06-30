import { useEffect, useState, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      requestAnimationFrame(animateRing)
    }

    const handleOver = (e) => {
      if (e.target.closest('a, button, .project-card, .cert-card, input, textarea, .filter-btn')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    const raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: visible ? 1 : 0 }} />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} style={{ opacity: visible ? 0.7 : 0 }} />
    </>
  )
}
