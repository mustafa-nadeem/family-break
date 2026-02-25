import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './YouthProgram.css'

gsap.registerPlugin(ScrollTrigger)

const youthCards = [
  {
    id: 1,
    title: 'Fun Games & Sports',
    color: '#e91e8c'
  },
  {
    id: 2,
    title: 'Structured Learning',
    color: '#0a1a4a'
  },
  {
    id: 3,
    title: 'Competitions & Awards',
    color: '#2d8f6f'
  },
  {
    id: 4,
    title: 'Evening Story-Time',
    color: '#6b4ce6'
  }
]

function YouthProgram() {
  const sectionRef = useRef(null)
  const cardsContainerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardRefs.current
    const scrollPerCard = 300

    // All cards start completely off-screen at the bottom
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: '100vh',
        rotation: 12,
        zIndex: index + 1
      })
    })

    // Create the pinning ScrollTrigger for the entire section
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${cards.length * scrollPerCard}`,
      pin: true,
      pinSpacing: true
    })

    // Animate each card from bottom to stack position
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        rotation: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: `top+=${index * scrollPerCard} top`,
          end: `top+=${(index + 1) * scrollPerCard} top`,
          scrub: 0.5
        }
      })
    })

    return () => {
      scrollTrigger.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="youth-program-section" ref={sectionRef}>
      <div className="youth-program-container">
        <div className="youth-program-content">
          <span className="youth-program-label">Youth Program</span>
          <h2 className="youth-program-title">
            Discover a Youth Programme Like No Other
          </h2>
          <p className="youth-program-tagline">Engaging, Empowering & Educational</p>
          <p className="youth-program-description">
            Our carefully curated youth program ensures that children of all ages 
            are engaged, entertained, and enriched throughout the retreat. From 
            interactive learning sessions to exciting outdoor activities, every 
            moment is designed to inspire and empower young minds.
          </p>
          <p className="youth-program-description">
            Professional facilitators create a safe, nurturing environment where 
            children can make new friends, discover new talents, and create 
            lasting memories while parents enjoy their own transformative experience.
          </p>
        </div>
        
        <div className="youth-program-cards" ref={cardsContainerRef}>
          {youthCards.map((card, index) => (
            <div
              key={card.id}
              className="youth-card"
              style={{ backgroundColor: card.color }}
              ref={el => cardRefs.current[index] = el}
            >
              <div className="youth-card-label">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YouthProgram
