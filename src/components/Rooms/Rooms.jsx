import './Rooms.css'
import wellingtonImg from '../../room_images/wekkington.webp'
import wokefieldImg from '../../room_images/wokefield.webp'
import mansionImg from '../../room_images/mansionhouse.webp'

const roomsData = [
  {
    id: 'wellington',
    name: 'Wellington Lodge Room',
    image: wellingtonImg,
    description: 'Located within Wellington Lodge, a short walk from the main reception, this room offers comfort and convenience at our most affordable price.',
    price: null,
    soldOut: true,
  },
  {
    id: 'wokefield',
    name: 'Wokefield Place Room',
    image: wokefieldImg,
    description: 'Nestled within the beautiful Wokefield Place, the Wokefield room provides a delightful blend of comfort and style.',
    price: 'Prices range from £904 to £989',
    soldOut: false,
  },
  {
    id: 'mansion',
    name: 'Mansion House Room',
    image: mansionImg,
    description: 'Located within the historic Wokefield House, these premium rooms offer an elevated experience of opulence and grandeur.',
    price: null,
    soldOut: true,
  },
]

function Rooms() {
  return (
    <section className="rooms-section">
      <div className="rooms-container">
        {/* Header */}
        <div className="rooms-header">
          <span className="rooms-label">Rooms</span>
          <h2 className="rooms-title">
            Welcome to <span className="rooms-title-accent">Your Home</span> Away from Home
          </h2>
          <p className="rooms-tagline">Exquisite, Serene & Exclusive</p>
        </div>

        {/* Description */}
        <div className="rooms-description">
          <p>
            This prestigious 4-star hotel venue offers an unparalleled oasis of comfort and tranquillity. From
            fluffed-up pillows to an air of prestige, our stylish rooms are designed to make your stay truly
            unforgettable.
          </p>
          <p>
            The rooms are meticulously maintained, ensuring they are immaculately clean and supremely
            comfortable. Sink into plush bedding, unwind in well-appointed spaces and let your worries drift
            away as you prepare for another day of enriching experiences.
          </p>
        </div>

        <p className="rooms-cta">Choose from a range of stylish room options</p>

        {/* Room Cards */}
        <div className="rooms-grid">
          {roomsData.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image-wrapper">
                <img src={room.image} alt={room.name} className="room-image" />
              </div>
              <div className="room-content">
                <h4 className="room-name">{room.name}</h4>
                <p className="room-description">{room.description}</p>
                {room.soldOut ? (
                  <span className="room-status sold-out">Sold Out</span>
                ) : (
                  <span className="room-status available">{room.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Footer */}
        <p className="rooms-amenities">
          All these comfortable en-suite bedrooms feature free internet access, showers, a tea &
          coffee tray, an iron, a hair dryer and a TV.
        </p>
      </div>
    </section>
  )
}

export default Rooms
