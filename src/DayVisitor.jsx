import './DayVisitor.css'

function DayVisitor() {
  return (
    <section className="day-visitor-section">
      <div className="day-visitor-inner">
        <div className="day-visitor-copy">
          <p className="day-visitor-kicker">Day Visitor Tickets</p>
          <h2 className="day-visitor-title">All the energy, none of the overnight stay.</h2>
          <p className="day-visitor-lede">
            Built for local guests who want the full retreat experience in a single day. Join the
            programme, share the meals, and head home at night.
          </p>

          <div className="day-visitor-list">
            <div className="day-visitor-item">
              <h3>Full programme access</h3>
              <p>Workshops, sessions, and activities across the entire schedule.</p>
            </div>
            <div className="day-visitor-item">
              <h3>Meals included</h3>
              <p>All meals provided except breakfast, with shared community tables.</p>
            </div>
            <div className="day-visitor-item">
              <h3>Youth programme option</h3>
              <p>Family-friendly programming with dedicated kids activities.</p>
            </div>
          </div>

          <p className="day-visitor-note">
            Check-in and pack collection is required on Friday or Saturday between 7:00-8:00 AM.
          </p>

          <div className="day-visitor-actions">
            <button className="day-visitor-button" type="button">
              Book day ticket
            </button>
          </div>
        </div>

        <div className="day-visitor-image">
          <div className="day-visitor-image-frame">
            <div className="day-visitor-image-placeholder">
              <span>Image coming soon</span>
              <p>Drop in the collage when ready.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DayVisitor
