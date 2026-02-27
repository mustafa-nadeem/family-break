import './Experience.css'
import experienceImg from '../../assets/experience.webp'

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
