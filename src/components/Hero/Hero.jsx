import { useEffect, useRef } from 'react'
import heroImage from '../../assets/hero-image.png'
import heroText from '../../assets/hero-text.svg'
import './Hero.css'

function Hero() {
  const scrollContainerRef = useRef(null)
  const videoWrapperRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current
      const wrapper = videoWrapperRef.current
      if (!container || !wrapper) return

      const rect = container.getBoundingClientRect()
      const scrollableDistance = container.offsetHeight - window.innerHeight
      const offsetValue = getComputedStyle(container).getPropertyValue('--navbar-offset')
      const baseOffset = Number.parseFloat(offsetValue) || 72

      // How far through the scroll container we are (0 to 1)
      const rawProgress = -rect.top / scrollableDistance
      const progress = Math.min(Math.max(rawProgress, 0), 1)

      // Animate margin: 0 -> 40px
      const maxMargin = 40
      const margin = progress * maxMargin

      // Animate border-radius: 0 -> 16px
      const maxRadius = 16
      const radius = progress * maxRadius

      // Animate height: 100vh -> reduced to fit event info (160px for info + margins)
      const heightReduction = progress * 160

      const effectiveOffset = baseOffset * progress

      wrapper.style.marginTop = `${effectiveOffset + margin}px`
      wrapper.style.marginLeft = `${margin}px`
      wrapper.style.width = `calc(100% - ${margin * 2}px)`
      wrapper.style.borderRadius = `${radius}px`
      wrapper.style.height = `calc(100vh - ${effectiveOffset + margin + heightReduction}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-scroll-container" ref={scrollContainerRef}>
      <div className="hero-sticky">
        <div className="video-wrapper" ref={videoWrapperRef}>
          <img
            className="hero-media"
            src={heroImage}
            alt="Event hero"
            loading="eager"
            decoding="async"
          />
          <div className="hero-video-overlay" aria-hidden="true" />
          <img
            className="hero-title-image"
            src={heroText}
            alt="The Greatest. Reflections from Ayatul Kursi"
          />
        </div>
        <div className="hero-event-info">
          <div className="info-left">
            <h1 className="info-title">
              <span className="title-the">Family</span>{' '}
              <span className="title-night">Break</span>{' '}
              <span className="title-journey">2026</span>
            </h1>
          </div>
          <div className="info-right">
            <p className="info-date">
              Saturday, 15th August 2026 - Tuesday 18th August 2026
            </p>
            <p className="info-location">
              De Vere Wokefield Estate, Reading
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
