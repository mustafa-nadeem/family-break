import { useState, useEffect, useCallback } from 'react'
import paintballingIcon from '../../assets/paintballing.svg'
import footballIcon from '../../assets/football.svg'
import inflatableIcon from '../../assets/inflatable.svg'
import swimmingIcon from '../../assets/swimming.svg'
import golfIcon from '../../assets/golf.svg'
import escapeRoomIcon from '../../assets/escape_room.svg'
import treasureHuntIcon from '../../assets/treasure_hunt.svg'
import mentalHealthIcon from '../../assets/mental_health.svg'
import mmaIcon from '../../assets/mma.svg'
import fitnessIcon from '../../assets/fitness.svg'
import rugbyIcon from '../../assets/rugby.svg'
import gamingIcon from '../../assets/gaming.svg'
import entertainmentImg from '../../assets/Group 5 (1).png'
import activityTabImg from '../../assets/activity-v2.png'
import foodImg from '../../assets/food.png'
import venueImg from '../../assets/venue.png'
import './Pillars.css'

const pillarsData = [
  {
    id: 'theme',
    label: 'Theme',
    title: 'Islamic Experience Like No Other : The Greatest. Quran & Activity Retreat',
    description: [
      'Ayat al-Kursi is described by the Prophet (peace be upon him) as the greatest verse in the Quran. Within a single ayah, it unveils the majesty of Allah, the perfection of His life and power, the vastness of His knowledge, and the absolute sovereignty of His dominion over the heavens and the earth. It is a verse that anchors the heart in tawhid, strengthens certainty, and fills the believer with awe, trust, and reliance upon Allah.',
      'In this retreat, we will journey through the profound meanings of Ayat al-Kursi, reflecting on its language, structure, and the divine realities it reveals. Each phrase opens a door to deeper understanding: Allah\'s perfect life and self-subsistence, His protection and authority, His encompassing knowledge, and the utter dependence of all creation upon Him.',
      'Through guided reflection, discussion, and practical insights, participants will explore how this remarkable verse shapes belief, worship, and daily life, transforming the way we think about Allah, the world, and our place within it. By the end, you will not only recite Ayat al-Kursi with familiarity, but with a renewed sense of reverence, clarity, and connection to the One whose greatness it proclaims.',
    ],
    highlightText:
      '3 Inspiring Lectures | 4 Interactive Seminars | 3 Dedicated Q&A Sessions | 1 Panel Discussion | 2 Podcasts',
    image: '/topic.png',
  },
  {
    id: 'activities',
    label: 'Activities',
    title: 'Building Jannah Whilst Having Fun',
    activityIntro:
      'Alongside learning, Family Break creates space for adults to unwind, connect and enjoy uplifting experiences designed around relaxation and shared enjoyment.',
    activityPoints: [
      'Brothers will have the opportunity to select 2–3 activities on Sunday',
      'Sisters will have the opportunity to select 2–3 activities on Monday',
    ],
    activityBody:
      'Whether energising, creative or purely relaxing, these curated activity options provide the perfect environment to laugh, recharge and bond with like-minded individuals.',
    activityParallel:
      'and crèche, these sessions allow parents to fully switch off, enjoy themselves and participate freely — knowing their children are safe, engaged and thriving nearby.',
    activityClosing: 'Moments to relax. Spaces to connect. Experiences to remember.',
    activityExperiences: [
      { label: 'Paintballing', icon: paintballingIcon },
      { label: 'Football', icon: footballIcon },
      { label: 'Inflatable Crash Course', icon: inflatableIcon },
      { label: 'Swimming', icon: swimmingIcon },
      { label: 'Golf Range', icon: golfIcon },
      { label: 'Escape Room', icon: escapeRoomIcon },
      { label: 'Treasure Hunt', icon: treasureHuntIcon },
      { label: 'Mental Health Workshop', icon: mentalHealthIcon },
      { label: 'Mixed Martial Arts', icon: mmaIcon },
      { label: 'Fitness Workout Session', icon: fitnessIcon },
      { label: 'Tag Rugby', icon: rugbyIcon },
      { label: 'Mobile Gaming Van', icon: gamingIcon },
    ],
    image: activityTabImg,
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
    highlightText:
      'The Deenies Puppet Performance | The Family Gameshow | The Family Story Time',
    image: entertainmentImg,
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
      'Providing 8 Full Board Meals throughout the event. 3 Dinners, 2 Lunches, 3 Breakfasts.',
    ],
    image: foodImg,
  },
  {
    id: 'venue',
    label: 'Venue',
    title: 'Explore the Beyond Beautiful',
    description: [
      'An Exclusive Private Venue Just for Family Break Attendees!',
      'Residential Ticket holders can enjoy the complete experience with staying in this amazing 4 star Estate throughout the retreat. Making the Family Break the best Qur\'an and Activity Staycation of the year!',
      'De Vere Wokefield Estate is a beautifully renovated venue set in landscaped countryside near Reading, just 10 minutes from the M4 (J11) and 40 minutes from Heathrow Airport. Travel into London Paddington takes just 50 minutes via the new Elizabeth Line from Reading station. The estate features restored event spaces within the historic Mansion House, including the elegant Terrace Suite. Facilities include on-site parking, wheelchair/pram access, a PGA-standard 18-hole golf course, outdoor activity areas, a fully equipped gym, and an indoor swimming pool.',
      'Hotel rooms are furnished with a traditional modern English feel with each room coming with either a double bed or twin beds.',
      'Rooms are located across two buildings, the Mansion House and Wokefield Place. Set in acres of landscaped countryside, the venue combines beautiful grounds with a state-of-the-art, multi-million-pound renovation.',
    ],
    points: [
      'On-site parking',
      'Wheelchair/pram access',
      'Conference Facilities',
    ],
    image: venueImg,
  },
]

const TRANSITION_MS = 380

function Pillars() {
  const [activeTab, setActiveTab] = useState(0)
  const [displayTab, setDisplayTab] = useState(0)
  const [animating, setAnimating] = useState(false)

  const active = pillarsData[displayTab]

  useEffect(() => {
    pillarsData.forEach(({ image }) => {
      const img = new Image()
      img.src = image
    })
  }, [])

  useEffect(() => {
    const applyHashSelection = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (!hash || hash === 'overview' || hash === 'event-overview') {
        setActiveTab(0)
        setDisplayTab(0)
        setAnimating(false)
        return
      }

      const targetIndex = pillarsData.findIndex((item) => item.id === hash)
      if (targetIndex === -1) return

      setActiveTab(targetIndex)
      setDisplayTab(targetIndex)
      setAnimating(false)
    }

    applyHashSelection()
    window.addEventListener('hashchange', applyHashSelection)
    return () => window.removeEventListener('hashchange', applyHashSelection)
  }, [])

  const handleTabClick = useCallback(
    (index) => {
      if (index === activeTab || animating) return
      setActiveTab(index)
      setAnimating(true)

      setTimeout(() => {
        setDisplayTab(index)
        setAnimating(false)
      }, TRANSITION_MS)
    },
    [activeTab, animating],
  )

  const exiting = animating
  const entering = !animating && displayTab === activeTab
  const descriptionBlocks = Array.isArray(active.description) ? active.description : [active.description]
  const isActivitiesTab = active.id === 'activities'

  return (
    <section id="overview" className="pillars-section">
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

      <div className={`pillars-content${isActivitiesTab ? ' pillars-content--activities' : ''}`}>
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
          {isActivitiesTab ? (
            <div className="pillars-activity-copy">
              <p className="pillars-description pillars-description--dark">{active.activityIntro}</p>
              <ul className="pillars-activity-points">
                {active.activityPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="pillars-description pillars-description--dark">{active.activityBody}</p>
              <p className="pillars-description pillars-description--dark">
                Running in parallel with the{' '}
                <a className="pillars-inline-link" href="#youth-programme">
                  youth programme
                </a>{' '}
                {active.activityParallel}
              </p>
              {/* Activity icons marquee */}
              <h3 className="pillars-activity-marquee-heading">Previous Activities</h3>
              <div className="pillars-activity-marquee-wrapper">
                <div className="pillars-activity-marquee-track">
                  {[...active.activityExperiences, ...active.activityExperiences].map((experience, index) => (
                    <div key={`${experience.label}-${index}`} className="pillars-activity-marquee-item">
                      <img
                        src={experience.icon}
                        alt={experience.label}
                        className="pillars-activity-marquee-icon"
                      />
                      <span className="pillars-activity-marquee-label">{experience.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="pillars-activity-closing">{active.activityClosing}</p>
            </div>
          ) : (
            <>
              <div className="pillars-description-group">
                {descriptionBlocks.map((paragraph) => (
                  <p key={paragraph} className="pillars-description">
                    {paragraph}
                  </p>
                ))}
              </div>
              {active.points && (
                <ul className="pillars-points">
                  {active.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {active.highlightText && <p className={`pillars-highlight ${active.id === 'entertainment' ? 'pillars-highlight--entertainment' : ''}`}>{active.highlightText}</p>}
            </>
          )}
        </div>
      </div>


    </section>
  )
}

export default Pillars
