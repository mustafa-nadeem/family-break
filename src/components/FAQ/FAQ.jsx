import { useState } from 'react'
import './FAQ.css'

const faqData = [
  {
    question: 'Is the event suitable for all ages?',
    answer: 'Yes! With youth tracks, crèche, and adult sessions, the event is designed for the entire family.',
  },
  {
    question: 'Is lunch included in the ticket price?',
    answer: 'No. You can add a buffet meal for £10 per person, or buy food from halal vendors on-site.',
  },
  {
    question: 'Will there be prayer facilities?',
    answer: 'Yes, with designated areas for men and women and time allocated for both Ḍhuhr and ʿAṣr.',
  },
  {
    question: 'Can I drop off my kids and attend adult sessions?',
    answer: 'Yes. Youth and crèche programmes are fully supervised, so parents can enjoy the main sessions.',
  },
  {
    question: 'Can I attend just part of the day?',
    answer: 'Yes, but we recommend staying for the full programme to get the most benefit.',
  },
  {
    question: 'Is the venue accessible?',
    answer: 'Absolutely. The estate is fully accessible for wheelchairs and prams.',
  },
  {
    question: 'Are there accommodation options nearby?',
    answer: 'The venue offers overnight stays — book via us, or direct on the deVere Wokefield Estate website if you\'d like to turn your day into a weekend stay.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <ul className="faq-list" role="presentation">
          {faqData.map((item, index) => (
            <li key={index} className={`faq-item${openIndex === index ? ' faq-open' : ''}`}>
              <div
                className="faq-question"
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(index)
                  }
                }}
              >
                <h6 className="faq-question-text">{item.question}</h6>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div
                className="faq-answer"
                style={{ display: openIndex === index ? 'block' : 'none' }}
              >
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
