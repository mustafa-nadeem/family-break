import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fungameImg from '../../kidspic/fungame.png'
import learningImg from '../../kidspic/structuredlearning.png'
import competitionImg from '../../kidspic/competition.png'
import storytimeImg from '../../kidspic/storytime.png'
import './YouthProgram.css'

gsap.registerPlugin(ScrollTrigger)

/* ── Data: Info panel sections (easily swappable) ── */
const programSections = [
  {
    id: 'under-4',
    label: 'Under 4 year olds',
    title: 'Under 4 Year Olds',
    content:
      'Our youngest attendees will be looked after in a safe, nurturing environment with gentle play activities, sensory exploration, and age-appropriate Islamic nasheeds. Trained caregivers ensure every child feels comfortable and happy while parents attend sessions.',
  },
  {
    id: '4-6',
    label: '4–6 year olds',
    title: 'Little Hearts Programme (Ages 4–6)',
    content:
      'A joyful and nurturing introduction to Islamic learning, designed especially for our youngest attendees. Little Hearts blends storytelling, creativity, movement and play within a warm, safe, faith-centred environment.\n\nWhat children enjoy:\n• Islamic story adventures that bring morals to life\n• Creative crafts, roleplay and interactive learning\n• Light football sessions and active play\n• Safe soft play exploration\n• Nasheeds and puppet theatre experiences\n\nChildren are placed into colour-coded classes (Yellow, Green, Red) based on age and development.\n\nSessions:\nMorning: 9:00am–12:00pm\nAfternoon: 3:00pm–6:00pm\n\nLittle Hearts — where young imaginations grow and a love for Islam begins.',
  },
  {
    id: '7-11',
    label: '7–11 year olds',
    title: 'Young Explorers Programme (Ages 7–11)',
    content:
      'A vibrant programme where meaningful Islamic learning meets energetic fun. Designed to build confidence, curiosity and strong friendships in a structured, supportive setting.\n\nProgramme highlights:\n• Age-appropriate Islamic principle lessons\n• Four activity sessions and two educational lessons daily\n• Football, inflatables, gaming tournaments, rounders, arts and more\n• Small group classes supported by dedicated mentors\n\nYoung Explorers encourages teamwork, independence and spiritual growth — helping children thrive socially and personally.\n\nYoung Explorers — where learning is exciting and young Muslims grow with confidence.',
  },
  {
    id: '12-16',
    label: '12–16 year olds',
    title: 'Teen Track Programme (Ages 12–16)',
    content:
      'A transformative experience supporting teens through identity, faith and real-life challenges in a safe, empowering environment.\n\nWhat teens engage in:\n• Identity and resilience workshops\n• Open discussions on real-life issues through an Islamic lens\n• Sports tournaments and obstacle challenges\n• Mentorship from experienced youth leaders\n\nTeen Track builds confidence, strengthens faith and equips young people with direction and purpose.\n\nTeen Track — where young Muslims find their voice and step forward with clarity.',
  },
  {
    id: 'parent',
    label: 'Parent / Guardian',
    title: 'Parent / Guardian',
    content:
      'While the children are engaged in their programmes, parents and guardians can attend dedicated lectures, workshops, and social gatherings. Rest assured that your children are in safe, capable hands throughout the retreat.',
  },
  {
    id: 'awards',
    label: 'Award Ceremony',
    title: 'Award Ceremony',
    content:
      'The retreat concludes with a memorable award ceremony celebrating the achievements of every child. Certificates, trophies, and special recognitions are handed out in front of proud families — a perfect ending to an unforgettable experience.',
  },
]

/* ── Data: GSAP card stack ── */
const cardsData = [
  {
    id: 1,
    title: 'Fun Games & Sports',
    image: fungameImg,
    color: '#0a1a6b',
  },
  {
    id: 2,
    title: 'Structured Learning',
    image: learningImg,
    color: '#1a3a8a',
  },
  {
    id: 3,
    title: 'Competitions & Awards',
    image: competitionImg,
    color: '#0d2463',
  },
  {
    id: 4,
    title: 'Evening Story-Time',
    image: storytimeImg,
    color: '#142d7a',
  },
]

function YouthProgram() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [activeSection, setActiveSection] = useState(programSections[0].id)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const contentRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean)
      const totalCards = cards.length
      if (!totalCards) return

      cards.forEach((card, index) => {
        gsap.set(card, {
          rotation: 15,
          y: window.innerHeight,
          zIndex: index + 1,
        })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalCards * Math.max(window.innerHeight * 0.45, 320)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 3,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      })

      cards.forEach((card) => {
        tl.to(card, {
          rotation: 0,
          y: 0,
          duration: 1,
          ease: 'none',
        })
      })
    }, section)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  /* ── Info panel navigation handler ── */
  const handleNavClick = (id) => {
    if (id === activeSection) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSection(id)
      if (contentRef.current) contentRef.current.scrollTop = 0
      setIsTransitioning(false)
    }, 200)
  }

  const handleKeyDown = (e, id, index) => {
    let target = index
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      target = (index + 1) % programSections.length
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      target = (index - 1 + programSections.length) % programSections.length
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleNavClick(id)
      return
    } else {
      return
    }
    const buttons = document.querySelectorAll('.yp-info-nav-item')
    if (buttons[target]) {
      buttons[target].focus()
      handleNavClick(programSections[target].id)
    }
  }

  const activeData = programSections.find((s) => s.id === activeSection)

  return (
    <div className="youth-program-shell">
      {/* ===== GSAP Card Stack Section ===== */}
      <section className="youth-program-section" ref={sectionRef}>
        <div className="youth-program-layout">
          {/* Left — static text */}
          <div className="youth-program-text">
            <h2 className="youth-program-title">
              Discover a <strong>Youth Programme</strong> Like No Other
            </h2>
            <p className="youth-program-subtitle">
              <em>Engaging, Empowering &amp; Educational</em>
            </p>
            <p className="youth-program-description">
              The youth programme is designed to be engaging, fun and inclusive for
              children, tailored to suit the interests and energy levels of each
              age group. With safety as our utmost priority, we provide constant
              supervision in a warm Islamic atmosphere.
            </p>
            <p className="youth-program-highlight">
              Our goal is to empower them to build a connection with Jannah while
              having a great time. We believe in nurturing their faith and
              providing a strong Islamic foundation.
            </p>
            <p className="youth-program-description">
              During this retreat, children can look forward to interactive
              educational sessions, public speaking workshops, Quran workshops,
              story time sessions and Islamic discussions led by knowledgeable
              youth specialists. These activities aim to deepen their understanding
              of Islam, strengthen their connection with Allah and equip them with
              essential life skills.
            </p>
            <p className="youth-program-description">
              In between educational sessions, we have a range of exciting
              activities lined up, from arcade games to boxing/martial arts and
              swimming, ensuring a well-rounded and enjoyable experience for your
              little ones.
            </p>
          </div>

          {/* Right — card stack */}
          <div className="youth-program-stack">
            <div className="youth-program-cards">
              {cardsData.map((card, index) => (
                <div
                  key={card.id}
                  className="youth-card"
                  ref={(el) => (cardsRef.current[index] = el)}
                  style={{ backgroundColor: card.color }}
                >
                  <div className="youth-card-inner">
                    <div className="youth-card-image-wrapper">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="youth-card-image"
                      />
                    </div>
                    <h3 className="youth-card-title">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Youth Program Info Panel Section ===== */}
      <section className="yp-info-section">
        <div className="yp-info-container">
          <nav
            className="yp-info-nav"
            role="tablist"
            aria-label="Youth program age groups"
            aria-orientation="vertical"
          >
            <ul className="yp-info-nav-list">
              {programSections.map((item, index) => (
                <li key={item.id}>
                  <button
                    className={`yp-info-nav-item${
                      activeSection === item.id ? ' yp-info-nav-item--active' : ''
                    }`}
                    onClick={() => handleNavClick(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id, index)}
                    aria-selected={activeSection === item.id}
                    role="tab"
                    tabIndex={activeSection === item.id ? 0 : -1}
                    id={`yp-tab-${item.id}`}
                    aria-controls={`yp-panel-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`yp-info-content${
              isTransitioning ? ' yp-info-content--fading' : ''
            }`}
            ref={contentRef}
            role="tabpanel"
            id={`yp-panel-${activeData.id}`}
            aria-labelledby={`yp-tab-${activeData.id}`}
          >
            <h3 className="yp-info-content-title">{activeData.title}</h3>
            <div className="yp-info-divider" />
            <p className="yp-info-content-text">{activeData.content}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default YouthProgram
