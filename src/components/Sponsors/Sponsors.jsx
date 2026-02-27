import i2Logo from '../../sponsorslogos/i2.webp'
import icLogo from '../../sponsorslogos/ic.webp'
import mLogo from '../../sponsorslogos/m.webp'
import myLogo from '../../sponsorslogos/my.webp'
import sLogo from '../../sponsorslogos/s.webp'
import './Sponsors.css'

const sponsors = [
  { id: 1, name: 'Islam21c', logo: i2Logo },
  { id: 2, name: 'Islamic Council', logo: icLogo },
  { id: 3, name: 'MRDF', logo: mLogo },
  { id: 4, name: 'Muslim Youth Initiative', logo: myLogo },
  { id: 5, name: 'Sabeel', logo: sLogo },
]

function Sponsors() {
  const doubled = [...sponsors, ...sponsors]

  return (
    <section className="sponsors-section">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <div className="sponsors-marquee-wrapper">
        <div className="sponsors-marquee-track">
          {doubled.map((sponsor, index) => (
            <div key={`${sponsor.id}-${index}`} className="sponsor-logo-card">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
