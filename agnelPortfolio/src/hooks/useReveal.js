import { useEffect, useRef } from 'react'

/**
 * Editorial scroll-reveal hook.
 * Adds 'in-view' class to all .reveal and .section-meta-head elements when entering viewport.
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('.reveal, .section-meta-head')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )

    targets.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}
