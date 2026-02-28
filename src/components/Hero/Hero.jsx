import { useEffect, useRef, useState } from 'react'
import heroImage from '../../assets/hero-image.png'
import heroText from '../../assets/hero-text.svg'
import './Hero.css'

const getCountdown = (targetDate) => {
  const now = new Date()
  const diffMs = targetDate - now

  if (diffMs <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isLive: true,
    }
  }

  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days,
    hours,
    minutes,
    seconds,
    isLive: false,
  }
}

function Hero() {
  const scrollContainerRef = useRef(null)
  const videoWrapperRef = useRef(null)
  const countdownTarget = useRef(new Date(2026, 7, 15, 0, 0, 0))
  const [countdown, setCountdown] = useState(() => getCountdown(countdownTarget.current))

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

  useEffect(() => {
    const tick = () => setCountdown(getCountdown(countdownTarget.current))
    const intervalId = window.setInterval(tick, 1000)
    tick()

    return () => window.clearInterval(intervalId)
  }, [])

  const formatUnit = (value) => String(value).padStart(2, '0')

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
          <div className="hero-title-stack">
            <img
              className="hero-title-image"
              src={heroText}
              alt="The Greatest. Reflections from Ayatul Kursi"
            />
            <div className="hero-title-details">
              <p className="hero-title-date">
                Saturday, 15th August 2026 - Tuesday 18th August 2026
              </p>
            </div>
          </div>
        </div>
        <div className="hero-event-info">
          <div className="info-left">
            <h1 className="info-title">
              <span className="title-the">Family</span>{' '}
              <span className="title-night">Break</span>{' '}
              <span className="title-journey">2026</span>
            </h1>
            <p className="info-location">De Vere Wokefield Estate, Reading</p>
          </div>
          <div className="info-right">
            <div className="countdown">
              {countdown.isLive ? (
                <p className="countdown-live">We're live</p>
              ) : (
                <div className="countdown-timer" role="timer" aria-live="polite">
                  <div className="countdown-segment">
                    <span className="countdown-value">{countdown.days}</span>
                    <span className="countdown-unit">Days</span>
                  </div>
                  <div className="countdown-segment">
                    <span className="countdown-value">{formatUnit(countdown.hours)}</span>
                    <span className="countdown-unit">Hours</span>
                  </div>
                  <div className="countdown-segment">
                    <span className="countdown-value">{formatUnit(countdown.minutes)}</span>
                    <span className="countdown-unit">Minutes</span>
                  </div>
                  <div className="countdown-segment">
                    <span className="countdown-value">{formatUnit(countdown.seconds)}</span>
                    <span className="countdown-unit">Seconds</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
