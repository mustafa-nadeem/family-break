import './Speakers.css'
import haithamImage from '../../assets/Haitham Al-Haddad 3.jpeg'
import sajidImage from '../../assets/Sajid Umar 3.jpeg'
import shaqurImage from '../../assets/Shaqur Rehman 2 (2).png'
import faridImage from '../../assets/Farid Haibatan 1.jpg'
import mostafaImage from '../../assets/shaykh-mostafa.png'

const speakersData = [
  {
    id: 1,
    name: 'Shaykh Dr Haitham Al-Haddad',
    title: 'Shaykh',
    description:
      'A respected scholar known for clear, principled guidance and thoughtful reflections rooted in the Qur\'an and Sunnah.',
    image: haithamImage,
  },
  {
    id: 2,
    name: 'Shaykh Dr Sajid Umar',
    title: 'Sheikh',
    description:
      'An engaging teacher and international speaker whose reminders combine scholarship, relevance, and spiritual depth.',
    image: sajidImage,
  },
  {
    id: 3,
    name: 'Shaykh Shaqur Rehman',
    title: 'Shaykh',
    description:
      'An uplifting speaker with a strong focus on faith, family, and nurturing meaningful Islamic growth.',
    image: shaqurImage,
  },
  {
    id: 4,
    name: 'Shaykh Farid Haibattan',
    title: 'Shaykh',
    description:
      'A dynamic and articulate teacher known for practical reminders that resonate with families and young Muslims alike.',
    image: faridImage,
  },
  {
    id: 5,
    name: 'Shaykh Mostafa Shaybaani',
    title: 'Shaykh',
    description:
      'A passionate speaker and educator whose talks emphasise spiritual sincerity, clarity, and everyday transformation.',
    image: mostafaImage,
  },
]

function Speakers() {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-container">
        <h2 className="speakers-title">Speakers</h2>
        
        <div className="speakers-grid">
          {speakersData.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-image-wrapper">
                <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              </div>
              <div className="speaker-content">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-description">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
