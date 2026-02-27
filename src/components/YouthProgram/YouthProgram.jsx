import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fungameImg from '../../kidspic/fungame.webp'
import learningImg from '../../kidspic/strcuturedlearning.webp'
import competitionImg from '../../kidspic/competition.webp'
import storytimeImg from '../../kidspic/storytime.webp'
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
    title: '4–6 Year Olds',
    content:
      'This group enjoys a mix of creative arts, storytelling, outdoor play and introductory Islamic lessons. Activities are designed to spark curiosity and build social skills in a fun, supervised setting with plenty of energy breaks and snack times.',
  },
  {
    id: '7-11',
    label: '7–11 year olds',
    title: '7–11 Year Olds',
    content:
      'Children in this age group participate in structured Quran workshops, public speaking exercises, team sports, and exciting competitions. The programme is designed to challenge them intellectually while keeping things engaging and enjoyable.',
  },
  {
    id: '12-16',
    label: '12–16 year olds',
    title: '12–16 Year Olds',
    content:
      'Teens take part in leadership workshops, debate sessions, advanced Islamic studies, martial arts, and team-building challenges. This track is built to inspire confidence, strengthen identity, and create lasting friendships.',
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

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current.filter(Boolean)
    const totalCards = cards.length

    // Set initial state for all cards
    cards.forEach((card, index) => {
      gsap.set(card, {
        rotation: 15,
        y: '100vh',
        zIndex: index + 1,
      })
    })

    // Build a single timeline with all card animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${totalCards * 400}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
      },
    })

    // Each card gets an equal slice of the timeline
    cards.forEach((card) => {
      tl.to(card, {
        rotation: 0,
        y: 0,
        duration: 1,
        ease: 'none',
      })
    })

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
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
    <>
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
    </>
  )
}

export default YouthProgram
