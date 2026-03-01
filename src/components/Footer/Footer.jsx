import logo from '../../assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-card">
          <div className="footer-grid">
            <div className="footer-column">
              <p className="footer-label">Official Organiser</p>
              <div className="footer-brand">
                <img src={logo} alt="Family Break" className="footer-logo" />
                <p className="footer-brand-copy">
                  A family-centred retreat experience built around connection,
                  reflection, and memorable shared moments.
                </p>
              </div>
            </div>

            <div className="footer-column">
              <p className="footer-label">About The Organisers</p>
              <ul className="footer-stat-list">
                <li>100+ events hosted</li>
                <li>10,000+ attendees welcomed</li>
                <li>15+ years of experience</li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-label">Contact</p>
              <ul className="footer-contact-list">
                <li>
                  <span className="footer-contact-icon" aria-hidden="true">
                    @
                  </span>
                  <a href="mailto:enquiry@familyevents.org.uk">
                    enquiry@familyevents.org.uk
                  </a>
                </li>
                <li>
                  <span className="footer-contact-icon" aria-hidden="true">
                    T
                  </span>
                  <a href="tel:02037438484">020 3743 8484</a>
                </li>
              </ul>
              <div className="footer-pill-row">
                <span className="footer-pill">Family Break 2026</span>
                <span className="footer-pill">Reading</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              Copyright Family Break 2026
            </p>
            <p className="footer-signoff">Relax. Reconnect. Revive.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
