import { useState } from 'react'
import './FAQ.css'

const faqData = [
  {
    question: 'Is the event suitable for all ages?',
    answer:
      'Yes! With youth tracks, crèche, and adult sessions, the event is designed for the entire family.',
  },
  {
    question: 'Is lunch included in the ticket price?',
    answer:
      'No. You can add a buffet meal for £10 per person, or buy food from halal vendors on-site.',
  },
  {
    question: 'Will there be prayer facilities?',
    answer:
      'Yes, with designated areas for men and women and time allocated for both Ḍhuhr and ʿAṣr.',
  },
  {
    question: 'Can I drop off my kids and attend adult sessions?',
    answer:
      'Yes. Youth and crèche programmes are fully supervised, so parents can enjoy the main sessions.',
  },
  {
    question: 'Can I attend just part of the day?',
    answer:
      'Yes, but we recommend staying for the full programme to get the most benefit.',
  },
  {
    question: 'Is the venue accessible?',
    answer:
      'Absolutely. The estate is fully accessible for wheelchairs and prams.',
  },
  {
    question: 'Are there accommodation options nearby?',
    answer:
      "The venue offers overnight stays — book via us, or direct on the deVere Wokefield Estate website if you'd like to turn your day into a weekend stay.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left — heading */}
        <div className="faq-heading">
          <h2 className="faq-title">
            Questions
            <br />
            <span className="faq-title-and">and</span>
            <br />
            answers
          </h2>
          <p className="faq-subtitle">
            Can't find the answer here?
            <br />
            <a href="mailto:info@familybreak.co.uk" className="faq-contact-link">
              Contact support
            </a>
          </p>
        </div>

        {/* Right — accordion */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={
                          isOpen
                            ? 'M4 10h12'
                            : 'M10 4v12M4 10h12'
                        }
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                  }}
                >
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
