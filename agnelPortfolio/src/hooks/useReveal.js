import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll-reveal hook.
 * Adds 'in-view' class to all .reveal children when they enter the viewport.
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') ?? []
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}
