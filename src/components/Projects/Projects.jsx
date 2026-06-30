import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import { projects, getProjectThumb } from './projectsData.js'
import ProjectModal from './ProjectModal.jsx'
import ImageWithFallback from '../shared/ImageWithFallback.jsx'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selected, setSelected] = useState(null)

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-label">My Work</span>
            <h2 className="section-title">Projects</h2>
          </div>
        </div>
        <div className="section-divider" />

        <motion.div className="projects-grid" layout>
          {projects.map((p, i) => (
            <motion.div
              className="project-card"
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              onClick={() => setSelected(p)}
            >
              <ImageWithFallback
                src={getProjectThumb(p)}
                alt={p.title}
                className="project-thumb"
                fallbackClassName="project-thumb-placeholder"
                fallbackStyle={{ background: p.gradient }}
                icon={p.icon}
              />
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-footer">
                  <button className="project-view-btn">
                    View Details <FiArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
