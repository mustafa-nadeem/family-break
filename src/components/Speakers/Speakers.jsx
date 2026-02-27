import './Speakers.css'

const speakersData = [
  {
    id: 1,
    name: 'Asim Khan',
    title: 'Imam',
    description:
      'An inspiring imam who connects faith to everyday life, guiding communities with warmth, clarity, and purpose.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Shaqur Rehman',
    title: 'Sheikh',
    description:
      'An engaging and motivational speaker with a passion for empowering the next generation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Umer Suleman',
    title: 'Ustadh',
    description:
      'A thoughtful educator focused on reflection, character, and building a resilient Muslim identity.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Omar Farooq',
    title: 'Sheikh',
    description:
      'A dynamic speaker blending tradition and relevance to inspire meaningful spiritual growth.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Bilal Nazir',
    title: 'Imam',
    description:
      'A community leader dedicated to uplifting families through faith, service, and practical guidance.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop',
  },
]

function Speakers() {
  return (
    <section className="speakers-section">
      <div className="speakers-container">
        <h2 className="speakers-title">Speakers</h2>
        
        <div className="speakers-grid">
          {speakersData.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-image-wrapper">
                <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              </div>
              <div className="speaker-content">
                <span className="speaker-title">{speaker.title}</span>
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
