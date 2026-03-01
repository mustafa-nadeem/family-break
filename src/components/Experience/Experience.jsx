import './Experience.css'
import experienceImg from '../../assets/experience.webp'
import sajidQuoteImg from '../../assets/quote-sajid.jpg'

function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-content">
        <div className="experience-text">
          <h2 className="experience-title">Unleash Your Adventurous Side</h2>
          <p className="experience-subtitle">Exhilarating, Enjoyable & Enriching</p>

          <div className="experience-paragraphs">
            <p>
              We've curated a wide range of activities for every member of your family. Whether you're
              an adrenaline junkie, a fitness enthusiast, or simply seeking relaxation, Family Break
              has something for everyone.
            </p>
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
