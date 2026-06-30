import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload, FiMaximize } from 'react-icons/fi'
import { FaCertificate } from 'react-icons/fa'
import { getCertificateImage } from './certificatesData.js'
import ImageWithFallback from '../shared/ImageWithFallback.jsx'
import Lightbox from '../Projects/Lightbox.jsx'

export default function CertModal({ cert, onClose }) {
  const [fullscreen, setFullscreen] = useState(false)

  const handleClose = () => {
    setFullscreen(false)
    onClose()
  }

  const imageUrl = cert ? getCertificateImage(cert) : null

  return (
    <>
      <AnimatePresence>
        {cert && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="modal-box"
              style={{ maxWidth: '700px' }}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={handleClose} aria-label="Close">
                <FiX />
              </button>

              <div className="cert-modal-content">
                <button
                  className="cert-preview cert-preview-btn"
                  onClick={() => setFullscreen(true)}
                  aria-label="View certificate fullscreen"
                >
                  <ImageWithFallback
                    src={imageUrl}
                    alt={`${cert.issuer} — ${cert.title}`}
                    className="cert-preview-img"
                    fallbackClassName="cert-preview-inner"
                    icon={null}
                  >
                    <div className="cert-preview-issuer">{cert.issuer}</div>
                    <div className="cert-preview-type">{cert.type}</div>
                    <div className="cert-preview-title">{cert.title}</div>
                    <div className="cert-preview-name">VIGNESHWARAN R</div>
                    <div className="cert-preview-id">Credential ID: {cert.credId}</div>
                  </ImageWithFallback>
                  <div className="cert-seal">
                    <FaCertificate />
                  </div>
                  <span className="cert-preview-expand"><FiMaximize /></span>
                </button>
                <a href={imageUrl} className="btn-gold" download onClick={(e) => { if (!imageUrl) e.preventDefault() }}>
                  <FiDownload />
                  <span>Download Certificate</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Lightbox
        urls={imageUrl ? [imageUrl] : []}
        gradient="linear-gradient(135deg, #fff 0%, #f8f4e8 100%)"
        icon={<FaCertificate style={{ color: '#8B6914' }} />}
        index={fullscreen ? 0 : null}
        onClose={() => setFullscreen(false)}
        onNavigate={() => {}}
      />
    </>
  )
}
