import { useEffect, useRef, useState } from 'react'
import heroImage from '../../assets/background.jpg'
import heroText from '../../assets/title.png'
import './Hero.css'

function Hero() {
  const scrollContainerRef = useRef(null)
  const videoWrapperRef = useRef(null)
  const [isHeroMediaReady, setIsHeroMediaReady] = useState(false)

  useEffect(() => {
    const preloadLinks = [
      { href: heroImage, type: 'image/jpeg' },
      { href: heroText, type: 'image/png' },
    ].map(({ href, type }) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = href
      link.type = type
      link.fetchPriority = 'high'
      document.head.appendChild(link)
      return link
    })

    return () => {
      preloadLinks.forEach((link) => link.remove())
    }
  }, [])

  useEffect(() => {
    let mounted = true
    const image = new Image()
    image.src = heroImage
    image.fetchPriority = 'high'

    const markReady = () => {
      if (mounted) setIsHeroMediaReady(true)
    }

    if (image.decode) {
      image.decode().then(markReady).catch(markReady)
    } else {
      image.onload = markReady
      image.onerror = markReady
    }

    return () => {
      mounted = false
    }
  }, [])

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

      const effectiveOffset = baseOffset * progress

      wrapper.style.marginTop = `${effectiveOffset + margin}px`
      wrapper.style.marginLeft = `${margin}px`
      wrapper.style.width = `calc(100% - ${margin * 2}px)`
      wrapper.style.borderRadius = `${radius}px`
      wrapper.style.height = `calc(100vh - ${effectiveOffset + margin}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-scroll-container" ref={scrollContainerRef}>
      <div className={`hero-sticky${isHeroMediaReady ? ' hero-sticky--ready' : ''}`}>
        <div className="video-wrapper" ref={videoWrapperRef}>
          <img
            className={`hero-media${isHeroMediaReady ? ' hero-media--ready' : ''}`}
            src={heroImage}
            alt="Event hero"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="hero-video-overlay" aria-hidden="true" />
          <div className="hero-title-stack">
            <img
              className="hero-title-image"
              src={heroText}
              alt="The Greatest. Reflections from Ayatul Kursi"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            <div className="hero-title-details">
              <p className="hero-title-date">
                15th - 18th August 2026
              </p>
              <a href="https://checkout.family-break.com/" className="hero-book-btn">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
