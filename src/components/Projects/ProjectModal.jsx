import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink, FiMaximize } from 'react-icons/fi'
import { useAutoGallery } from './useAutoGallery.js'
import ImageWithFallback from '../shared/ImageWithFallback.jsx'
import Lightbox from './Lightbox.jsx'

export default function ProjectModal({ project, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const { urls: detectedUrls, loading: galleryLoading } = useAutoGallery(project?.folder)
  // While images are still being detected, or if none were found, fall back
  // to a single placeholder slot so the layout doesn't look empty/broken.
  const galleryUrls = detectedUrls.length > 0 ? detectedUrls : ['']

  const handleModalClose = () => {
    setLightboxIndex(null)
    onClose()
  }

  return (
    <>
      <AnimatePresence>
        {project && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={handleModalClose} aria-label="Close">
                <FiX />
              </button>

              <div className="modal-gallery">
                {galleryUrls.map((url, i) => (
                  <button
                    key={i}
                    className="modal-gallery-btn"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`View image ${i + 1} fullscreen`}
                  >
                    <ImageWithFallback
                      src={url}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="modal-gallery-img"
                      fallbackClassName="modal-gallery-placeholder"
                      fallbackStyle={{ background: project.gradient, opacity: 1 - i * 0.08 }}
                      icon={project.icon}
                    />
                    <span className="modal-gallery-expand"><FiMaximize /></span>
                  </button>
                ))}
              </div>

              <div className="modal-content">
                <div className="modal-meta">
                  <div>
                    <h3 className="modal-title">{project.title}</h3>
                    <span className="modal-category">{project.category}</span>
                  </div>
                </div>

                <div className="modal-body">
                  <p>{project.fullDesc}</p>
                </div>

                <span className="modal-tech-label">Tech Stack</span>
                <div className="modal-tech-list">
                  {project.tech.map((t) => (
                    <span className="modal-tech-pill" key={t}>{t}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                    <FiGithub />
                    <span>View on GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-gold">
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Lightbox
        urls={galleryUrls}
        gradient={project?.gradient}
        icon={project?.icon}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  )
}
