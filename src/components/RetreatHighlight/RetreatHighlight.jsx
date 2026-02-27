import heroImage from '../../assets/hero-image.png'
import logo from '../../assets/logo.png'
import './RetreatHighlight.css'

function RetreatHighlight() {
  return (
    <section className="retreat-highlight">
      <div className="retreat-highlight__inner">
        <h2 className="retreat-highlight__title">
          The Ultimate Quran &amp; Activity-Based Retreat of the Year!
        </h2>

        <div className="retreat-highlight__frame">
          <div className="retreat-highlight__media">
            <img src={heroImage} alt="Retreat highlight" />
            <img className="retreat-highlight__logo" src={logo} alt="Family Break" />
            <div className="retreat-highlight__play" aria-hidden="true">
              <span />
            </div>
            <div className="retreat-highlight__overlay-text">
              <span className="overlay-subtitle">The</span>
              <span className="overlay-title">Largest</span>
              <span className="overlay-caption">Muslim Family Break</span>
              <span className="overlay-caption">in the UK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatHighlight
