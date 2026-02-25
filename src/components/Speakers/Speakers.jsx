import './Speakers.css'

const speakersData = [
  {
    id: 1,
    name: 'Shaqur Rehman',
    title: 'Sheikh',
    description: 'An engaging and motivational speaker with a passion for empowering the next generation. Shaqur focuses on mindset, identity, and navigating modern challenges while staying true to strong values and principles.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Speaker Name',
    title: 'Title',
    description: 'Engaging speaker with expertise in personal development and transformational leadership.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Speaker Name',
    title: 'Title',
    description: 'Engaging speaker with expertise in personal development and transformational leadership.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Speaker Name',
    title: 'Title',
    description: 'Engaging speaker with expertise in personal development and transformational leadership.',
    image: 'https://images.unsplash.com/photo-1519631128182-b87fed20a7e7?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Speaker Name',
    title: 'Title',
    description: 'Engaging speaker with expertise in personal development and transformational leadership.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
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
