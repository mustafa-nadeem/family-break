import { useRef, useState, useEffect } from 'react'
import './ResidentialTickets.css'
import residentialHeroImage from '../../assets/residential-hero.png'
import residentialActivitiesImage from '../../assets/DSC_3365.jpg'
import residentialRoomingImage from '../../assets/room.png'

function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}

function ResidentialTickets() {
  const [heroRef, heroVisible] = useRevealOnScroll()
  const [includedRef, includedVisible] = useRevealOnScroll()
  const [activitiesRef, activitiesVisible] = useRevealOnScroll()
  const [roomingRef, roomingVisible] = useRevealOnScroll()
  const [amenitiesRef, amenitiesVisible] = useRevealOnScroll()

  return (
    <section className="residential-section" id="residential-tickets">
      {/* Hero Block */}
      <div
        ref={heroRef}
        className={`residential-block residential-block--hero residential-reveal ${heroVisible ? 'residential-reveal--visible' : ''}`}
      >
        <div className="residential-block-inner residential-block-inner--hero">
          <div className="residential-hero-text">
            <h2 className="residential-title">Residential Tickets</h2>
            <p className="residential-tagline">
              Experience the full Family Break vibes and make this the best Jannah-building
              Qur'an and Activity Staycation of the year!
            </p>
            <p className="residential-intro">
              Residential Tickets allow you and your family to stay on-site throughout the retreat
              while enjoying the full programme, community atmosphere, accommodation, and meals included.
            </p>
          </div>
          <div className="residential-hero-image">
            <img
              className="residential-hero-img"
              src={residentialHeroImage}
              alt="Residential tickets at Family Break"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="residential-divider" />

      {/* What's Included Block */}
      <div
        ref={includedRef}
        className={`residential-block residential-reveal ${includedVisible ? 'residential-reveal--visible' : ''}`}
      >
        <div className="residential-block-inner">
          <h3 className="residential-subtitle">What's Included with Residential Tickets?</h3>

          <div className="residential-features">
            <div
              className={`residential-feature residential-feature-reveal ${includedVisible ? 'residential-feature-reveal--visible' : ''}`}
              style={{ transitionDelay: '0ms' }}
            >
              <h4>Full Access</h4>
              <p>
                Residential guests enjoy complete access to the entire event programme and activities
                throughout the retreat, ensuring you benefit from every inspiring session, workshop,
                and community experiences. From Saturday 3pm until Tuesday 12pm.
              </p>
            </div>

            <div
              className={`residential-feature residential-feature-reveal ${includedVisible ? 'residential-feature-reveal--visible' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h4>Full Board Meals</h4>
              <p>
                Your Residential Ticket includes all meals during the retreat, allowing you to enjoy
                delicious meals together with your loved ones.
              </p>
            </div>

            <div
              className={`residential-feature residential-feature-reveal ${includedVisible ? 'residential-feature-reveal--visible' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <h4>Youth Programme Access</h4>
              <p>
                Families with children can enrol their youngsters into the engaging Youth Programme,
                providing kids with a fun-filled and educational experience throughout the retreat
                within the ticket price!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="residential-divider" />

      {/* Adult Activities Block */}
      <div
        ref={activitiesRef}
        className={`residential-block residential-reveal ${activitiesVisible ? 'residential-reveal--visible' : ''}`}
      >
        <div className="residential-block-inner residential-block-inner--activities">
          <div className="residential-activities-image">
            <img
              className="residential-activities-img"
              src={residentialActivitiesImage}
              alt="Adult activities at Family Break"
              loading="lazy"
            />
          </div>
          <div className="residential-activities-text">
            <h3 className="residential-subtitle">Adult Activities</h3>
            <p className="residential-activities-lead">
              Each ticket includes <strong>2 adult activity sessions</strong> per adult.
            </p>
            <ul className="residential-list">
              <li>Activities will be made available one week prior to the event</li>
              <li>Participants can select their preferred sessions on a first-come, first-served basis</li>
            </ul>
            <p className="residential-activities-note">
              These activities are designed to provide fun, relaxation, learning, and memorable
              experiences for adults throughout the retreat.
            </p>
            <a href="#activities" className="residential-btn">See Previous Activities</a>
          </div>
        </div>
      </div>

      <div className="residential-divider" />

      {/* Hotel Rooming Block */}
      <div
        ref={roomingRef}
        className={`residential-block residential-reveal ${roomingVisible ? 'residential-reveal--visible' : ''}`}
      >
        <div className="residential-block-inner residential-block-inner--rooming">
          <div className="residential-rooming-text">
            <h3 className="residential-subtitle">Hotel Rooming</h3>
            <p className="residential-rooming-lead">
              Residential bookings come with one allocated hotel room per booking.
            </p>
            <ul className="residential-list">
              <li>Each room includes two single beds or one double bed</li>
              <li>Larger families may be allocated larger rooms where available, on a first-come, first-served basis</li>
              <li>To help keep costs low, many families choose to bring sleeping bags or inflatable mattresses for additional children</li>
            </ul>
            <p className="residential-rooming-note">
              However, if you would prefer separate beds for each person (beyond the standard two single beds
              or one double bed), we recommend splitting your booking into multiple reservations.
            </p>
            <div className="residential-example">
              <span className="residential-example-label">For example</span>
              <p>
                A family of four wanting four single beds could make two separate bookings for two
                people each, allowing two rooms to be allocated.
              </p>
            </div>
          </div>
          <div className="residential-rooming-image">
            <img
              className="residential-rooming-img"
              src={residentialRoomingImage}
              alt="Hotel rooming at Family Break"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="residential-divider" />

      {/* Hotel Amenities Block */}
      <div
        ref={amenitiesRef}
        className={`residential-block residential-block--amenities residential-reveal ${amenitiesVisible ? 'residential-reveal--visible' : ''}`}
      >
        <div className="residential-block-inner residential-block-inner--amenities">
          <h3 className="residential-subtitle">Hotel Amenities</h3>
          <p className="residential-amenities-text">
            All hotel rooms come with standard hotel amenities and are serviced and refreshed daily
            for your comfort during the retreat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResidentialTickets
