import { useRef, useState, useEffect } from 'react'
import './DayVisitor.css'
import audienceImage from '../../assets/audience listening the speech.png'

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

function DayVisitor() {
  const [sectionRef, sectionVisible] = useRevealOnScroll(0.1)

  return (
    <section className="day-visitor-section" id="day-visitor" ref={sectionRef}>
      <div className="day-visitor-content">
        <div className={`day-visitor-text day-visitor-reveal ${sectionVisible ? 'day-visitor-reveal--visible' : ''}`}>
          <h2 className="day-visitor-title">Day Visitor Tickets</h2>

          <p className="day-visitor-intro">
            Do you live nearby or simply prefer to attend the event without staying overnight? Our Day Visitor
            Tickets allow you to experience the event as a day visitor while enjoying full access to the event
            programme and meals throughout the entire retreat (except accommodation and breakfast).
          </p>

          <h3 className="day-visitor-subtitle">What's Included with Day Visitor Tickets?</h3>

          <div className="day-visitor-features">
            <div
              className={`feature day-visitor-feature-reveal ${sectionVisible ? 'day-visitor-feature-reveal--visible' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h4 className="feature-title">Full Access</h4>
              <p className="feature-description">
                Day visitors enjoy complete access to all event programmes and activities scheduled throughout
                the retreat, ensuring you don't miss out on any of the enriching experiences.
              </p>
            </div>

            <div
              className={`feature day-visitor-feature-reveal ${sectionVisible ? 'day-visitor-feature-reveal--visible' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <h4 className="feature-title">Meals Included</h4>
              <p className="feature-description">
                Your Day Visitor Ticket covers all meals except breakfast, allowing you to savour delicious,
                full-board meals with the community.
              </p>
            </div>

            <div
              className={`feature day-visitor-feature-reveal ${sectionVisible ? 'day-visitor-feature-reveal--visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h4 className="feature-title">Youth Programme Enrollment</h4>
              <p className="feature-description">
                Families with children can enrol their youngsters into the engaging Youth Programme, providing
                kids with a day filled with fun and educational activities.
              </p>
            </div>
          </div>

          <p
            className={`day-visitor-note day-visitor-feature-reveal ${sectionVisible ? 'day-visitor-feature-reveal--visible' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            Please note that all day visitors are required to register and pick up their event packs upon
            arrival on Saturday afternoon or between 7-8 am on Sunday morning.
          </p>

          <a
            href="https://checkout.family-break.com/"
            className={`day-visitor-cta day-visitor-feature-reveal ${sectionVisible ? 'day-visitor-feature-reveal--visible' : ''}`}
            style={{ transitionDelay: '500ms' }}
          >
            Book Now
          </a>
        </div>

        <div className={`day-visitor-image day-visitor-image-reveal ${sectionVisible ? 'day-visitor-image-reveal--visible' : ''}`}>
          <img src={audienceImage} alt="Audience listening to a speech" />
        </div>
      </div>
    </section>
  )
}

export default DayVisitor
