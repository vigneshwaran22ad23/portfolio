import { useEffect, useState } from 'react'

/**
 * Probes a project's image folder to find out how many sequential gallery
 * images (1.jpg, 2.jpg, 3.jpg, ...) actually exist, without needing to
 * manually set a count. You can add or remove screenshots freely (10 today,
 * 20 next week) and the gallery picks them up automatically on next load.
 *
 * How it works: tries loading 1.jpg, 2.jpg, 3.jpg... one at a time. The
 * first filename that fails to load is treated as "end of gallery" and
 * everything before it is used. Capped at `maxCheck` as a safety limit.
 */
function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

export function useAutoGallery(folder, { maxCheck = 200 } = {}) {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setUrls([])

    async function detect() {
      const base = `${import.meta.env.BASE_URL}images/projects/${folder}/`
      const found = []
      for (let n = 1; n <= maxCheck; n++) {
        const url = `${base}${n}.jpg`
        // eslint-disable-next-line no-await-in-loop
        const ok = await probeImage(url)
        if (cancelled) return
        if (!ok) break
        found.push(url)
      }
      if (!cancelled) {
        setUrls(found)
        setLoading(false)
      }
    }

    if (folder) detect()
    else setLoading(false)

    return () => { cancelled = true }
  }, [folder, maxCheck])

  return { urls, loading }
}
