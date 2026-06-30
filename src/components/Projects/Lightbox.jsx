import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ImageWithFallback from '../shared/ImageWithFallback.jsx'

export default function Lightbox({ urls, gradient, icon, index, onClose, onNavigate }) {
  const total = urls.length

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + total) % total)
  }, [index, total, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % total)
  }, [index, total, onNavigate])

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, onClose, goPrev, goNext])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button className="lightbox-close" onClick={onClose} aria-label="Close fullscreen view">
            <FiX />
          </button>

          {total > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={urls[index]}
                alt={`Gallery image ${index + 1}`}
                className="lightbox-image"
                fallbackClassName="lightbox-image-wrap"
                fallbackStyle={{ background: gradient }}
                icon={<span className="lightbox-icon">{icon}</span>}
              />
            </motion.div>
          </AnimatePresence>

          {total > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          )}

          {total > 1 && (
            <div className="lightbox-dots" onClick={(e) => e.stopPropagation()}>
              {urls.map((_, i) => (
                <button
                  key={i}
                  className={`lightbox-dot ${i === index ? 'active' : ''}`}
                  onClick={() => onNavigate(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}

          <span className="lightbox-counter">{index + 1} / {total}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
