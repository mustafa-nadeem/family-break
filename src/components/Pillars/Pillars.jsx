import { useState, useEffect, useCallback } from 'react'
import './Pillars.css'

const pillarsData = [
  {
    id: 'topic',
    label: 'Topic',
    title: 'An Islamic Experience for the Heart, Mind & Soul',
    description:
      'Family Break 2026 is a Qur\'an-centred, activity-filled retreat where families step away from the noise of everyday life and immerse themselves in 3 nights and 4 unforgettable days of learning, reflection, joy, and connection. This year\'s theme, "The Greatest. Reflections from Ayatul Kursi", sets the tone for a retreat built around spiritual depth, shared experiences, and the path to Jannah.',
    points: [
      'A luxury 4-star countryside retreat designed for reflection, rest, and renewal',
      'Tadabbur sessions rooted in the timeless reflections of Ayatul Kursi',
      'A warm, family-centred atmosphere shaped by learning, laughter, and love for Allah',
    ],
    image: '/topic.png',
  },
  {
    id: 'activities',
    label: 'Activities',
    title: 'Inspiration, Transformation & Purposeful Activity',
    description:
      'Every generation has been considered. From toddlers to teens, and from brothers to sisters, the retreat is designed to offer meaningful learning, practical reminders, and energising activities that leave each attendee inspired, refreshed, and spiritually recharged.',
    points: [
      'Dedicated programmes for toddlers, children, and youth from 6 months to 16 years',
      'Brothers-only and sisters-only sessions and curated activity selections on separate days',
      'Practical Qur\'an- and Sunnah-rooted reminders that stay with you long after the retreat',
    ],
    image: '/activities.png',
  },
  {
    id: 'food',
    label: 'Food',
    title: 'Delicious Halal Food & A Warm Family Atmosphere',
    description:
      'Food at Family Break is part of the experience. Throughout the retreat, families enjoy delicious, wholesome halal meals in a relaxed setting that makes it easy to gather, reconnect, and slow down together between sessions and activities.',
    points: [
      'Full board halal meals served throughout your stay',
      'Family seating and shared meal moments that strengthen connection',
      'A buzzing bazaar with stalls to explore between sessions',
    ],
    image: '/food.png',
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    title: 'Evenings Full of Energy, Joy & Shared Memories',
    description:
      'Family Break is not only about learning. Your days and evenings are filled with energy, laughter, and memorable moments that bring families closer together in a lively, uplifting Islamic environment.',
    points: [
      'Exciting family entertainment, gameshows, and live performances',
      'Interactive experiences that create lasting shared memories',
      'A joyful retreat atmosphere that balances spiritual growth with genuine fun',
    ],
    image: '/entertainment.png',
  },
  {
    id: 'venue',
    label: 'Venue',
    title: 'De Vere Wokefield Estate',
    description:
      'Set in the countryside at De Vere Wokefield Estate, Reading, Family Break takes place in a beautiful and spacious 4-star setting where families can breathe, slow down, and reconnect in comfort.',
    points: [
      'A fully accessible countryside estate with room to relax and reflect',
      'Prayer spaces, picnic spots, and an indoor pool within the venue',
      'Registration from 3pm on Saturday and checkout at 12pm on Tuesday',
    ],
    image: '/venue.png',
  },
]

const TRANSITION_MS = 380

function Pillars() {
  const [activeTab, setActiveTab] = useState(0)
  const [displayTab, setDisplayTab] = useState(0)
  const [animating, setAnimating] = useState(false)

  const active = pillarsData[displayTab]

  /* Preload all tab images on mount */
  useEffect(() => {
    pillarsData.forEach(({ image }) => {
      const img = new Image()
      img.src = image
    })
  }, [])

  const handleTabClick = useCallback(
    (index) => {
      if (index === activeTab || animating) return
      setActiveTab(index)
      setAnimating(true)

      // After exit animation completes, swap content & enter
      setTimeout(() => {
        setDisplayTab(index)
        setAnimating(false)
      }, TRANSITION_MS)
    },
    [activeTab, animating],
  )

  // Derive animation classes
  const exiting = animating
  const entering = !animating && displayTab === activeTab

  return (
    <section className="pillars-section" id="overview">
      {/* Tabs */}
      <div className="pillars-tabs">
        {pillarsData.map((pillar, index) => (
          <button
            key={pillar.id}
            className={`pillars-tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {pillar.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="pillars-content">
        <div
          className={`pillars-image ${
            exiting ? 'pillars-image--exit' : entering ? 'pillars-image--enter' : ''
          }`}
        >
          <img src={active.image} alt={active.label} />
        </div>
        <div
          className={`pillars-text ${
            exiting ? 'pillars-text--exit' : entering ? 'pillars-text--enter' : ''
          }`}
        >
          <h2 className="pillars-title">{active.title}</h2>
          <p className="pillars-description">{active.description}</p>
          {active.points && (
            <ul className="pillars-points">
              {active.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default Pillars
