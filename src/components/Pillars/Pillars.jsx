import { useState } from 'react'
import './Pillars.css'

const pillarsData = [
  {
    id: 'topic',
    label: 'Topic',
    title: 'Event Focus',
    description:
      'Explore the central theme guiding the experience, from keynote ideas to the stories shaping our gatherings. The topic frames the conversations and helps everyone connect around shared purpose.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Topic',
  },
  {
    id: 'activities',
    label: 'Activities',
    title: 'Engaging Experiences',
    description:
      'Discover a diverse range of activities designed to inspire, entertain, and create lasting memories. From interactive sessions to networking opportunities, our carefully curated activities ensure every moment is meaningful and enjoyable.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Activities',
  },
  {
    id: 'food',
    label: 'Food',
    title: 'Culinary Excellence',
    description:
      'Indulge in an exquisite culinary journey featuring fine dining experiences and carefully selected cuisines. Our food offerings celebrate excellence, sustainability, and the art of bringing people together through exceptional dining.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Food',
  },
  {
    id: 'venue',
    label: 'Venue',
    title: 'Elegant Setting',
    description:
      'Experience an elegantly designed venue that provides the perfect backdrop for an unforgettable event. Our sophisticated space combines comfort, ambiance, and functionality to create an immersive environment.',
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
