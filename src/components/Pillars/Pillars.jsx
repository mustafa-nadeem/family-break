import { useState } from 'react'
import './Pillars.css'

const pillarsData = [
  {
    id: 'topic',
    label: 'Topic',
    title: 'The Greatest: Reflections from Ayatul Kursi',
    description:
      'Family Break 2026 is a Qur’an-centred, activity-filled retreat for the heart, mind, and soul. Come together to learn, laugh, and reflect in an atmosphere of warmth, connection, and joy. Relax. Reconnect. Revive.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Topic',
  },
  {
    id: 'activities',
    label: 'Activities',
    title: 'Inspiration & Transformation',
    description:
      'Dedicated programmes for toddlers, children, and youth, plus engaging sessions for men and women. Enjoy sisters-only and brothers-only sessions, with practical reminders rooted in the Qur’an and Sunnah.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Activities',
  },
  {
    id: 'food',
    label: 'Food',
    title: 'Fun, Food & Family Fun',
    description:
      'Days and evenings are filled with energy, laughter, and shared experiences. Enjoy exciting family entertainment, gameshows, and live performances as part of the Family Break atmosphere.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Food',
  },
  {
    id: 'venue',
    label: 'Venue',
    title: 'De Vere Wokefield Estate',
    description:
      'A beautiful luxury 4-star estate in Reading. Step away from everyday life and immerse your family in 3 nights and 4 unforgettable days where relaxation meets inspiration.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Venue',
  },
]

function Pillars() {
  const [activeTab, setActiveTab] = useState(0)
  const active = pillarsData[activeTab]

  return (
    <section className="pillars-section">
      {/* Tabs */}
      <div className="pillars-tabs">
        {pillarsData.map((pillar, index) => (
          <button
            key={pillar.id}
            className={`pillars-tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {pillar.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="pillars-content">
        <div className="pillars-image">
          <img src={active.image} alt={active.label} />
        </div>
        <div className="pillars-text">
          <h2 className="pillars-title">{active.title}</h2>
          <p className="pillars-description">{active.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Pillars
