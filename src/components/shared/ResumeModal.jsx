import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload, FiChevronLeft, FiChevronRight, FiAlertTriangle } from 'react-icons/fi'
import * as pdfjsLib from 'pdfjs-dist'

const RESUME_PATH = `${import.meta.env.BASE_URL}resume.pdf`
pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.js`

export default function ResumeModal({ open, onClose }) {
  const canvasRef = useRef(null)
  const pdfDocRef = useRef(null)
  const [pageNum, setPageNum] = useState(1)
  const [numPages, setNumPages] = useState(0)
  const [status, setStatus] = useState('idle') // idle | loading | ready | error

  // Load the PDF whenever the modal opens
  useEffect(() => {
    if (!open) return
    let cancelled = false
    setStatus('loading')
    setPageNum(1)

    pdfjsLib.getDocument(RESUME_PATH).promise
      .then((pdf) => {
        if (cancelled) return
        pdfDocRef.current = pdf
        setNumPages(pdf.numPages)
        setStatus('ready')
      })
      .catch((err) => {
        console.error('Resume PDF failed to load:', err)
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
      pdfDocRef.current?.destroy?.()
      pdfDocRef.current = null
    }
  }, [open])

  // Render the current page to canvas
  useEffect(() => {
    if (status !== 'ready' || !pdfDocRef.current || !canvasRef.current) return
    let cancelled = false

    pdfDocRef.current.getPage(pageNum).then((page) => {
      if (cancelled) return
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      const containerWidth = canvas.parentElement?.clientWidth || 800
      const baseViewport = page.getViewport({ scale: 1 })
      const scale = Math.min((containerWidth / baseViewport.width) * (window.devicePixelRatio || 1), 3)
      const viewport = page.getViewport({ scale })

      canvas.width = viewport.width
      canvas.height = viewport.height
      canvas.style.width = `${viewport.width / (window.devicePixelRatio || 1)}px`
      canvas.style.height = `${viewport.height / (window.devicePixelRatio || 1)}px`

      page.render({ canvasContext: context, viewport })
    })

    return () => {
      cancelled = true
    }
  }, [status, pageNum])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-box resume-modal-box"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <FiX />
            </button>

            <div className="resume-modal-header">
              <h3 className="modal-title">Resume</h3>
              <a href={RESUME_PATH} className="btn-gold resume-modal-download" download>
                <FiDownload />
                <span>Download</span>
              </a>
            </div>

            <div className="resume-modal-frame-wrap">
              {status === 'loading' && (
                <div className="resume-modal-status">Loading resume…</div>
              )}

              {status === 'error' && (
                <div className="resume-modal-status resume-modal-status-error">
                  <FiAlertTriangle size={28} />
                  <p>Couldn't load the preview.</p>
                  <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="btn-gold">
                    Open resume in a new tab
                  </a>
                </div>
              )}

              <div
                className="resume-modal-canvas-scroll"
                style={{ display: status === 'ready' ? 'flex' : 'none' }}
              >
                <canvas ref={canvasRef} className="resume-modal-canvas" />
              </div>
            </div>

            {status === 'ready' && numPages > 1 && (
              <div className="resume-modal-pager">
                <button
                  onClick={() => setPageNum((p) => Math.max(1, p - 1))}
                  disabled={pageNum <= 1}
                  aria-label="Previous page"
                >
                  <FiChevronLeft />
                </button>
                <span>{pageNum} / {numPages}</span>
                <button
                  onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
                  disabled={pageNum >= numPages}
                  aria-label="Next page"
                >
                  <FiChevronRight />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
