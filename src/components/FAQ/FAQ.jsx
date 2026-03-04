import { useState } from 'react'
import './FAQ.css'

const categories = [
  {
    id: 'when-where',
    label: 'When & Where',
    questions: [
      {
        q: 'When is Family Break 2026 taking place?',
        a: 'Family Break 2026 is scheduled for 24–27 April 2026 (3 nights, 4 days).',
      },
      {
        q: 'Where is the event being held?',
        a: 'The event is at deVere Wokefield Estate, a 4-star venue nestled in the Berkshire countryside, approximately 1 hour from London.',
      },
      {
        q: 'What time does registration start?',
        a: 'Registration begins at 3:00 PM on Friday, 24 April. Day visitors can arrive from 7:00–8:00 AM on Saturday or 8:00 AM onwards on other days.',
      },
      {
        q: 'What time does it finish?',
        a: 'The final award ceremony wraps up by 12:30 PM on Sunday, 27 April.',
      },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    questions: [
      {
        q: 'What are the room options?',
        a: 'We offer stylish rooms across two main lodges: Wellington Lodge and Wokefield Place, ranging from twin to family rooms with en-suite facilities.',
      },
      {
        q: 'Are families with young children accommodated separately?',
        a: 'Families with children under 4 can request family-friendly rooms to ensure comfort during the stay. Please specify this during booking.',
      },
      {
        q: 'Is bedding and towels provided?',
        a: 'Yes, all rooms come with fresh, quality bedding and towels. The rooms are meticulously cleaned throughout your stay.',
      },
      {
        q: 'Can I bring my own pillow or special bedding?',
        a: 'Yes, you\'re welcome to bring personal items for comfort. Contact us ahead of time if you have specific bedding needs.',
      },
      {
        q: 'Are rooms air-conditioned or climate-controlled?',
        a: 'Rooms are temperature-controlled with heating for comfort. The venue is air-conditioned in common areas.',
      },
    ],
  },
  {
    id: 'bookings-payments',
    label: 'Bookings / Payments / Cancellations',
    questions: [
      {
        q: 'How do I book?',
        a: 'Visit our website and complete the online booking form. A deposit secures your place, with full payment due 6 weeks before the event.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept card payments, bank transfers, and instalments for larger bookings. Contact us for a custom payment plan.',
      },
      {
        q: 'Is a deposit required?',
        a: 'Yes, a non-refundable deposit of 25% is required to confirm your booking.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations made 8+ weeks before the event receive a 75% refund (minus deposit). Cancellations within 4 weeks receive no refund.',
      },
      {
        q: 'Can I transfer my booking to another person?',
        a: 'Yes, you can transfer your booking to another family member at no extra charge, provided we\'re notified 4 weeks before the event.',
      },
      {
        q: 'Are group discounts available?',
        a: 'Yes! Groups of 10+ families receive a 10% discount. Contact us for group booking details.',
      },
    ],
  },
  {
    id: 'children-youth',
    label: 'Children & Youth',
    questions: [
      {
        q: 'Is there a programme for toddlers?',
        a: 'Yes! Our crèche caters for children under 4 with supervised play, sensory activities, and Islamic nasheeds.',
      },
      {
        q: 'What if my child has special dietary needs?',
        a: 'Please notify us at booking. We accommodate allergies, intolerances, and dietary preferences (halal, vegan, gluten-free, etc.).',
      },
      {
        q: 'Can children with additional needs attend?',
        a: 'Absolutely. We welcome all children and work with families to ensure appropriate support is in place. Contact us to discuss requirements.',
      },
      {
        q: 'Are siblings placed together in the youth programme?',
        a: 'Yes, siblings are placed in the same group whenever possible to ensure comfort and continuity.',
      },
      {
        q: 'Do you offer transport between the venue and activities?',
        a: 'All youth and children\'s activities are at the venue. Supervised transport is arranged for any off-site adventures.',
      },
      {
        q: 'What happens if my child gets homesick?',
        a: 'Our trained youth leaders are experienced in managing homesickness. Parents are contactable, and we\'ll support your child through the experience.',
      },
      {
        q: 'What should I pack for my child?',
        a: 'Pack comfortable clothing, trainers, and a light jacket. A packing list is sent upon confirmation.',
      },
    ],
  },
  {
    id: 'day-visitors',
    label: 'Day Visitors',
    questions: [
      {
        q: 'Can I attend as a day visitor?',
        a: 'Yes! Day Visitor Tickets give full access to all sessions and meals (except breakfast) without staying overnight.',
      },
      {
        q: 'What are day visitor ticket prices?',
        a: 'Day visitor pricing varies by day. Contact us for the latest rates.',
      },
      {
        q: 'Do day visitors get meals?',
        a: 'Yes, all meals except breakfast (lunch, afternoon snacks, dinner) are included.',
      },
      {
        q: 'Can day visitor children join the youth programme?',
        a: 'Yes, day visitor children can enrol in the Youth Programme for an additional fee.',
      },
      {
        q: 'When should I arrive as a day visitor?',
        a: 'Day visitors register from 7:00–8:00 AM on Saturdays and 8:00 AM onwards on other days.',
      },
    ],
  },
  {
    id: 'transport-parking',
    label: 'Transport / Parking',
    questions: [
      {
        q: 'Is there free parking at the venue?',
        a: 'Yes, ample free onsite parking is available for all guests.',
      },
      {
        q: 'Is the venue easily accessible by car?',
        a: 'Yes! Located near major roads (M4), with postcode RG7 4PE for sat-nav. Clear signage guides you from the main road.',
      },
      {
        q: 'Is there public transport to the venue?',
        a: 'The nearest train station is 20 minutes away. We can arrange group transportation upon request if you book a large family group.',
      },
      {
        q: 'Do you offer a shuttle service from a central location?',
        a: 'We can arrange coach hire for large groups returning to London. Contact us for options and pricing.',
      },
      {
        q: 'Can I arrive early or leave late?',
        a: 'Early arrival and late departure can be arranged for an additional fee. Request this at booking.',
      },
    ],
  },
]

function FAQ() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  const currentCategory = categories.find((cat) => cat.id === activeCategory)

  return (
    <section id="faq" className="faq-section">
      {/* Title */}
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {/* Category Pills */}
      <div className="faq-categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`faq-category-pill ${
              activeCategory === cat.id ? 'faq-category-pill--active' : ''
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* QA List */}
      <div className="faq-questions-wrapper">
        {currentCategory && (
          <div className="faq-questions-list">
            {currentCategory.questions.map((item, idx) => (
              <div key={idx} className="faq-qa-pair">
                <h3 className="faq-question-text">{item.q}</h3>
                <p className="faq-answer-text">{item.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FAQ
