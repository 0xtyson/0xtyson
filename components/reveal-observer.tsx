"use client"

import { useEffect } from "react"

/**
 * Adds `is-visible` to every [data-reveal] element as it scrolls into view.
 * Motion itself (300ms fade-and-rise) is defined in globals.css.
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    )

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      nodes.forEach((n) => n.classList.add("is-visible"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.revealDelay
            if (delay) el.style.animationDelay = `${delay}ms`
            el.classList.add("is-visible")
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  return null
}
