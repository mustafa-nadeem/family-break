import { useEffect, useRef } from 'react'
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

      // How far through the scroll container we are (0 to 1)
      const rawProgress = -rect.top / scrollableDistance
      const progress = Math.min(Math.max(rawProgress, 0), 1)

      // Animate margin: 0 -> 40px
      const maxMargin = 40
      const margin = progress * maxMargin

      // Animate border-radius: 0 -> 16px
      const maxRadius = 16
      const radius = progress * maxRadius

      wrapper.style.marginLeft = `${margin}px`
      wrapper.style.marginRight = `${margin}px`
      wrapper.style.marginTop = `${margin}px`
      wrapper.style.borderRadius = `${radius}px`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-scroll-container" ref={scrollContainerRef}>
      <div className="hero-sticky">
        <div className="video-wrapper" ref={videoWrapperRef}>
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero
