import './DayVisitor.css'
import audienceImage from '../../assets/audience listening the speech.png'

function DayVisitor() {
  return (
    <section className="day-visitor-section" id="day-visitor">
      <div className="day-visitor-content">
        <div className="day-visitor-text">
          <h2 className="day-visitor-title">Day Visitor Tickets</h2>

          <p className="day-visitor-intro">
            Do you live nearby or simply prefer to attend the event without staying overnight? Our Day Visitor
            Tickets allow you to experience the event as a day visitor while enjoying full access to the event
            programme and meals throughout the entire retreat (except accommodation and breakfast).
          </p>

          <h3 className="day-visitor-subtitle">What's Included with Day Visitor Tickets?</h3>

          <div className="day-visitor-features">
            <div className="feature">
              <h4 className="feature-title">Full Access</h4>
              <p className="feature-description">
                Day visitors enjoy complete access to all event programmes and activities scheduled throughout
                the retreat, ensuring you don't miss out on any of the enriching experiences.
              </p>
            </div>

            <div className="feature">
              <h4 className="feature-title">Meals Included</h4>
              <p className="feature-description">
                Your Day Visitor Ticket covers all meals except breakfast, allowing you to savour delicious,
                full-board meals with the community.
              </p>
            </div>

            <div className="feature">
              <h4 className="feature-title">Youth Programme Enrollment</h4>
              <p className="feature-description">
                Families with children can enrol their youngsters into the engaging Youth Programme, providing
                kids with a day filled with fun and educational activities.
              </p>
            </div>
          </div>

          <p className="day-visitor-note">
            Please note that all day visitors are required to register and pick up their event packs upon
            arrival on Saturday afternoon or between 7-8 am on Sunday morning.
          </p>

          <button className="day-visitor-cta">Book Now</button>
        </div>

        <div className="day-visitor-image">
          <img src={audienceImage} alt="Audience listening to a speech" />
        </div>
      </div>
    </section>
  )
}

export default DayVisitor
