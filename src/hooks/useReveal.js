import { useEffect } from 'react'

/**
 * useReveal — attaches IntersectionObserver to all .reveal elements.
 * Call once at App level. Adds .visible class when element enters viewport.
 *
 * Below-fold sections are lazy-loaded inside <Suspense>, so their .reveal
 * nodes are NOT in the DOM when this runs at mount. A MutationObserver
 * re-observes any .reveal elements added later, so lazy sections animate in
 * instead of staying stuck at opacity:0 (rendering blank).
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    // Observe every not-yet-revealed .reveal element within a root node.
    const observeWithin = (root) => {
      if (root.nodeType !== 1 && root.nodeType !== 9) return
      if (root.matches?.('.reveal') && !root.classList.contains('visible')) {
        io.observe(root)
      }
      root.querySelectorAll?.('.reveal:not(.visible)').forEach((el) => io.observe(el))
    }

    // 1) Everything present at mount (Nav, Hero).
    observeWithin(document)

    // 2) Re-observe .reveal nodes added later by lazy-loaded components.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => observeWithin(node))
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
