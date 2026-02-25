import { useState } from 'react'
import './Pillars.css'

const pillarsData = [
  {
    id: 'sleep',
    label: 'Sleep',
    title: 'The Restorative State',
    description:
      'Sleep is a foundational pillar of well-being, not simply as rest, but as a powerful tool for cellular repair, hormonal balance, and cognitive clarity. Through intentional evening rituals—such as warm elixirs, guided breathwork, and natural supplements—sleep is optimized as a therapeutic state. In this sacred stillness, the body repairs, the mind resets, and the path to longevity quietly unfolds.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Sleep',
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    title: 'Fuel for Vitality',
    description:
      'Nutrition is the cornerstone of lasting energy and resilience. By embracing whole, nutrient-dense foods and mindful eating practices, we nourish the body at a cellular level. Every meal becomes an opportunity to restore balance, support gut health, and cultivate a deeper connection between what we consume and how we feel.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Nutrition',
  },
  {
    id: 'movement',
    label: 'Movement',
    title: 'The Body in Motion',
    description:
      'Movement is medicine—a practice that goes beyond fitness to unlock physical freedom and mental clarity. Whether through structured exercise, yoga, or intuitive movement, the body thrives when it flows. Regular, purposeful motion strengthens the heart, sharpens the mind, and builds a foundation of resilience that carries through every aspect of life.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Movement',
  },
  {
    id: 'self-care',
    label: 'Self-Care',
    title: 'Ritual & Renewal',
    description:
      'Self-care is the deliberate act of returning to yourself. It encompasses the rituals that restore the skin, soothe the nervous system, and honor the body as a whole. From therapeutic treatments to moments of quiet solitude, self-care is not indulgence—it is essential maintenance for a life lived fully and intentionally.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Self-Care',
  },
  {
    id: 'mental-strength',
    label: 'Mental Strength',
    title: 'The Inner Fortress',
    description:
      'Mental strength is cultivated through practice—meditation, journaling, breathwork, and stillness. It is the ability to meet life with equanimity, to respond rather than react. By training the mind with the same dedication we give the body, we build an inner resilience that anchors us through uncertainty and empowers clarity of thought.',
    image: 'https://placehold.co/700x500/2a2a2a/666?text=Mental+Strength',
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
        <div className="pillars-tabs-line" />
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
