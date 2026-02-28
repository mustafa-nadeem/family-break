import { useState } from 'react'
import heroImage from '../../assets/hero-image.png'
import './RetreatHighlight.css'

function RetreatHighlight() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="retreat-highlight">
      <div className="retreat-highlight__inner">
        <div className="retreat-highlight__content">
          <span className="retreat-highlight__eyebrow">Previous events</span>
          <h2 className="retreat-highlight__title">
            Relive the Family Break atmosphere.
          </h2>
          <p className="retreat-highlight__copy">
            Watch the highlights from our past retreats and get a feel for the
            energy, learning, and joy that fills every day. From inspiring
            reminders to unforgettable family moments, it is a weekend that
            stays with you.
          </p>
          <ul className="retreat-highlight__list">
            <li>Inspiring talks and Qur&apos;an reflections</li>
            <li>Family activities, gameshows, and live entertainment</li>
            <li>Moments of connection, worship, and community</li>
          </ul>
          <div className="retreat-highlight__actions">
            <button
              className="retreat-highlight__cta"
              type="button"
              onClick={handlePlay}
            >
              Watch highlights
            </button>
            <span className="retreat-highlight__note">2-min recap · 2025</span>
          </div>
        </div>

        <div className="retreat-highlight__frame">
          <div className="retreat-highlight__media">
            {isPlaying ? (
              <iframe
                className="retreat-highlight__iframe"
                src="https://www.youtube.com/embed/hK3L_-j_Y1E?autoplay=1&rel=0"
                title="Family Break previous events highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                <img src={heroImage} alt="Previous event highlight" />
                <div className="retreat-highlight__badge">Previous highlights</div>
                <button
                  className="retreat-highlight__play"
                  type="button"
                  aria-label="Play previous event highlight video"
                  onClick={handlePlay}
                >
                  <span className="retreat-highlight__play-icon" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatHighlight
