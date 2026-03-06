import { useState } from 'react'
import promoImage from '../../assets/main poster (hq) (1).png'
import './Promo.css'

function Promo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="promo-section">
      <div className="promo-inner">
        <h2 className="promo-title">The Ultimate Quran & Activity-Based Retreat of the Year!</h2>
        <div className="promo-video-wrapper">
          {isPlaying ? (
            <iframe
              className="promo-iframe"
              src="https://www.youtube.com/embed/aq7xBbzLl1Y?autoplay=1&rel=0"
              title="The Ultimate Quran & Activity-Based Retreat of the Year"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="promo-thumbnail" onClick={() => setIsPlaying(true)}>
              <img
                src={promoImage}
                alt="The Ultimate Quran & Activity-Based Retreat of the Year"
                className="promo-thumbnail-img"
              />
              <button
                className="promo-play-btn"
                type="button"
                aria-label="Play video"
                onClick={() => setIsPlaying(true)}
              >
                <svg viewBox="0 0 68 48" className="promo-play-icon">
                  <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="rgba(255,255,255,0.9)"/>
                  <path d="M45 24L27 14v20" fill="#11247D"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Promo
