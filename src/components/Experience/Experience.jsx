import './Experience.css'
import experienceImg from '../../assets/trusted-experience.png'
import sajidQuoteImg from '../../assets/sajidumarv2.jpeg'

function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-content">
        <div className="experience-text">
          <h2 className="experience-title">A Trusted Experience</h2>
          <p className="experience-subtitle">Hosted by Family Events</p>

          <div className="experience-paragraphs">
            <p>
              With 15+ years of experience and over 50,000 attendees served, Family Break has become
              a cherished annual tradition for thousands.
            </p>
          </div>

          <div className="experience-stats">
            <h3 className="experience-stats-heading">What families say:</h3>
            <ul className="experience-stats-list">
              <li>87% say this experience is the next best thing after Hajj and Umrah</li>
              <li>95% describe it as the best spiritual and practical learning event they have attended</li>
              <li>99% recommend Family Break to their family and friends</li>
            </ul>
          </div>

          <figure className="experience-quote">
            <div className="experience-quote__portrait">
              <img src={sajidQuoteImg} alt="Shaykh Sajid Umar" />
            </div>
            <figcaption className="experience-quote__content">
              <blockquote className="experience-quote__text">
                "The next best holiday after Hajj and Umrah"
              </blockquote>
              <p className="experience-quote__author">Shaykh Sajid Umar</p>
            </figcaption>
          </figure>

          <div className="experience-cta">
            <h3 className="experience-cta-title">Your Family's Next Beautiful Memory Awaits</h3>
            <p className="experience-cta-text">
              Join thousands of families for a spectacular experience that blends spirituality,
              learning, relaxation and joy — all in one remarkable setting.
            </p>
          </div>
        </div>

        <div className="experience-image">
          <img
            src={experienceImg}
            alt="Event activities and experiences"
          />
        </div>
      </div>
    </section>
  )
}

export default Experience
