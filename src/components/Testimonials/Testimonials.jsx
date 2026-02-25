import './Testimonials.css'

const testimonialsRow1 = [
  { id: 1, quote: "Left Speechless" },
  { id: 2, quote: "A True Family Event" },
  { id: 3, quote: "Life Changing" },
  { id: 4, quote: "Amazing Sister Activities" },
  { id: 5, quote: "Love the Brotherhood" },
  { id: 6, quote: "Made Friends for Life" },
]

const testimonialsRow2 = [
  { id: 7, quote: "Spiritually Boosting" },
  { id: 8, quote: "Event of the Year" },
  { id: 9, quote: "Fantastic Youth Program" },
  { id: 10, quote: "Next Best Thing After Umrah and Hajj for My Family" },
  { id: 11, quote: "Wow – I Never Knew We Can Build Jannah Whilst Having Fun" },
  { id: 12, quote: "Really Helped Our Family Come Together" },
]

const FiveStars = () => (
  <div className="testimonial-stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Families Say About Their Experience</h2>
        
        {/* Row 1 - Scrolls Left */}
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-left">
            {[...testimonialsRow1, ...testimonialsRow1].map((item, index) => (
              <div key={`${item.id}-${index}`} className="testimonial-card">
                <FiveStars />
                <p className="testimonial-quote">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-right">
            {[...testimonialsRow2, ...testimonialsRow2].map((item, index) => (
              <div key={`${item.id}-${index}`} className="testimonial-card">
                <FiveStars />
                <p className="testimonial-quote">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
