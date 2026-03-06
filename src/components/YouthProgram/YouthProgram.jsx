import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import under4Img from '../../assets/youthprogamme/under4.png'
import ages4to6Img from '../../assets/youthprogamme/4-6.jpg'
import ages7to11Img from '../../assets/youthprogamme/7-11.png'
import ages12to16Img from '../../assets/youthprogamme/12-16.png'
import parentsImg from '../../assets/youthprogamme/parents.png'
import awardsImg from '../../assets/youthprogamme/awards5.jpeg'
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
    label: 'Ages 0–3',
    title: '💛 Al Hamdh Crèche (Ages 0–3)',
    content:
      'The Al Hamdh Crèche provides a safe, fun, and imaginative environment designed especially for our youngest attendees. With supervised play, creative activities, and gentle Islamic inspiration, parents can enjoy peace of mind while their children are cared for by qualified staff.\n\nThis service is operated by an external company and is available for an additional hourly fee, payable directly during the event. Prices start from £7.50 per hour.',
    image: under4Img,
  },
  {
    id: '4-6',
    label: 'Ages 4–6',
    title: '💛 Little Hearts Programme (Ages 4–6)',
    content:
      'A joyful, nurturing and imaginative space created especially for our youngest attendees, the Little Hearts Programme brings learning to life through play, creativity and Islamic inspiration.\n\nDesigned for children aged 4–6, this engaging experience blends storytelling, movement, creativity and free play to help little ones develop confidence, character and a love for learning — all within a warm, safe and faith-centred environment.\n\n✨ What Little Hearts Will Experience\n\n📖 Islamic Story Adventures — Children journey through captivating Islamic stories that bring morals and values to life in ways they can understand, relate to and remember.\n🎨 Hands-on Crafts & Moral Play — Creative craft sessions, roleplay and interactive activities allow children to express themselves while reinforcing the lessons they learn through storytelling.\n⚽ Little Kickers Football — Fun, light football sessions that encourage teamwork, coordination and active play — helping children burn energy while building friendships.\n🧸 Soft Play Zone — A safe and welcoming soft play area offering space for exploration, movement and unstructured play time — essential for young learners.\n🎭 Nasheeds & Puppet Theatre — A magical blend of nasheeds, puppetry and theatrical storytelling that captures attention, sparks imagination and embeds key Islamic messages.\n🌟 Inspirational Fun Learning — Every moment is intentionally designed to delight, inspire and nurture young hearts, ensuring children associate Islamic learning with joy and excitement.\n\n🕘 Programme Structure\nTo ensure children feel comfortable and supported, participants are placed into three colour-coded classes — Yellow, Green and Red — based on age and development stage.\n\nDaily sessions run:\nMorning: 9:00am – 12:00pm\nAfternoon: 3:00pm – 6:00pm\n\nThis balanced structure allows children to learn, play, rest and return refreshed for more memorable experiences.\n\nLittle Hearts — where young imaginations grow, friendships blossom and love for Islam begins.',
    image: ages4to6Img,
  },
  {
    id: '7-11',
    label: 'Ages 7–11',
    title: '🚀 Young Explorers Programme (Ages 7–11)',
    content:
      'The Young Explorers Programme is a vibrant and spiritually enriching experience crafted for children aged 7–11, where meaningful learning meets energetic fun and discovery.\n\nBlending engaging Islamic education with a wide range of exciting activities, this programme nurtures confidence, curiosity and connection — helping children grow socially, spiritually and personally in an environment designed just for them.\n\n✨ What Young Explorers Will Experience\n\n📘 Islamic Principle Lessons — Age-appropriate lessons that make essential Islamic teachings accessible, relevant and engaging — encouraging children to understand, reflect and apply values in their everyday lives.\n⚡ A Balanced Day of Learning & Activity — Each day is thoughtfully structured with 4 activity sessions and 2 educational lessons, creating the perfect rhythm of movement, learning and connection.\n🎯 Action-Packed Activities Include: Football for teamwork and healthy competition, inflatable outdoor games bringing laughter and high-energy fun, gaming tournaments offering friendly digital challenges, rounders to build coordination and group participation, art and craft sessions encouraging creativity and expression… and many more surprises throughout the experience.\n👥 Small Groups, Big Impact — Children are placed into 6 dedicated classes, each supported by two experienced Murabieen (mentors) who provide guidance, care and positive role modelling throughout the programme.\n\n🤝 Social & Spiritual Growth\nBeyond activities and lessons, Young Explorers is intentionally designed to foster meaningful friendships, develop teamwork and collaboration, build confidence and independence, and strengthen spiritual identity in a joyful setting.\n\nFor returning attendees, the programme becomes even more special — offering opportunities to reconnect with friends and continue building memories year after year.\n\nYoung Explorers — where learning is exciting, friendships flourish and young Muslims grow with confidence.',
    image: ages12to16Img,
  },
  {
    id: '12-16',
    label: 'Ages 12–16',
    title: '🔥 Teen Track Programme (Ages 12–16)',
    content:
      'The Teen Track Programme is a powerful, transformative experience designed specifically for young people aged 12–16, supporting them through one of life\'s most defining stages with guidance, connection and purpose.\n\nGrounded in real-life relevance, Islamic resilience and open youth-led dialogue, Teen Track creates a safe and empowering space where teenagers can explore identity, strengthen faith and build the confidence to navigate today\'s world with clarity.\n\n✨ What Teens Will Experience\n\n🧭 Identity & Resilience Workshops — Thought-provoking sessions that help teens understand who they are, where they belong and how Islamic values can guide them through the challenges of adolescence.\n💬 Islamic Lens on Real-Life Issues — Honest, facilitated group discussions exploring social pressures, relationships, digital life and everyday dilemmas — all examined through a balanced Islamic perspective that encourages reflection and growth.\n🏆 Sports Tournaments & Obstacle Courses — High-energy activities designed to develop leadership, perseverance and teamwork. From competitive tournaments to obstacle challenges, teens will push themselves, support one another and grow in confidence.\n\n🌟 An Experience That Leaves a Mark\nTeen Track is led by dedicated youth workers with over a decade of experience, bringing deep understanding, relatability and mentorship that resonates with young people.\n\nCarefully curated and thoughtfully delivered, this programme stands as one of the most relevant, engaging and inspiring youth experiences, helping teens leave not only with memories — but with direction, resilience and lasting friendships.\n\nTeen Track — where young Muslims find their voice, strengthen their identity and step forward with purpose.',
    image: ages7to11Img,
  },
  {
    id: 'parent',
    label: 'Parent / Guardian',
    title: 'Parent / Guardian',
    content:
      'While the children are engaged in their programmes, parents and guardians can attend dedicated lectures, workshops, and social gatherings. Rest assured that your children are in safe, capable hands throughout the retreat.',
    image: parentsImg,
  },
  {
    id: 'awards',
    label: 'Award Ceremony',
    title: 'Award Ceremony',
    content:
      'The retreat concludes with a memorable award ceremony celebrating the achievements of every child. Certificates, trophies, and special recognitions are handed out in front of proud families — a perfect ending to an unforgettable experience.',
    image: awardsImg,
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
    title: 'Interactive Sessions',
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
    let mm

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean)
      if (!cards.length) return

      mm = gsap.matchMedia()

      mm.add('(min-width: 769px)', () => {
        const cardsToAnimate = cards.slice(1)

        cards.forEach((card, index) => {
          gsap.set(card, {
            rotation: index === 0 ? 0 : 15,
            y: index === 0 ? 0 : window.innerHeight,
            zIndex: index + 1,
          })
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.max(cardsToAnimate.length, 1) * Math.max(window.innerHeight * 0.5, 360)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.2,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        })

        cardsToAnimate.forEach((card) => {
          tl.to(card, {
            rotation: 0,
            y: 0,
            duration: 1,
            ease: 'none',
          })
        })

        // Buffer at end — section stays pinned briefly after last card lands
        tl.to({}, { duration: 0.3 })
      })
    }, section)

    ScrollTrigger.refresh()

    return () => {
      mm?.revert()
      ctx.revert()
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
    <div className="youth-program-shell">
      {/* ===== GSAP Card Stack Section ===== */}
      <section className="youth-program-section" id="youth-programme" ref={sectionRef}>
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
        {/* Horizontal tabs */}
        <div className="yp-info-tabs">
          {programSections.map((item, index) => (
            <button
              key={item.id}
              className={`yp-info-tab${activeSection === item.id ? ' yp-info-tab--active' : ''}`}
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
          ))}
        </div>

        {/* Content: image left + text right */}
        <div
          className={`yp-info-layout${isTransitioning ? ' yp-info-layout--fading' : ''}`}
          role="tabpanel"
          id={`yp-panel-${activeData.id}`}
          aria-labelledby={`yp-tab-${activeData.id}`}
        >
          <div className="yp-info-image-side">
            <img
              src={activeData.image}
              alt={activeData.title}
              className="yp-info-image"
            />
          </div>

          <div className="yp-info-text-side" ref={contentRef}>
            <h3 className="yp-info-content-title">{activeData.title}</h3>
            <div className="yp-info-content-body">
              {activeData.content.split('\n\n').map((section, idx) => {
                const lines = section.split('\n')
                const hasPoints = lines.some((line) => line.trim().startsWith('•') || line.trim().startsWith('•'))

                if (hasPoints) {
                  const points = lines
                    .filter((line) => line.trim().startsWith('•') || line.trim().startsWith('•'))
                    .map((line) => line.trim().replace(/^[••]\s*/, ''))

                  return (
                    <ul key={idx} className="yp-info-points">
                      {points.map((point, pidx) => (
                        <li key={pidx}>{point}</li>
                      ))}
                    </ul>
                  )
                } else {
                  return (
                    <p key={idx} className="yp-info-content-text">
                      {section}
                    </p>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default YouthProgram
