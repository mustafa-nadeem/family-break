import { useState } from 'react'
import './FAQ.css'

const categories = [
  {
    id: 'when-where',
    label: 'When & Where',
    questions: [
      {
        question: 'When does Family Break 2026 take place?',
        answer: 'Family Break 2026 runs from Saturday 25th July to Tuesday 28th July 2026 — 3 nights and 4 days of an unforgettable experience.',
      },
      {
        question: 'Where is the event held?',
        answer: 'The retreat takes place at the beautiful De Vere Wokefield Estate in Reading — a luxury 4-star countryside venue.',
      },
      {
        question: 'What time does registration open?',
        answer: 'Registration opens at 3pm on Saturday. We recommend arriving early to settle in and explore the venue.',
      },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    questions: [
      {
        question: 'If I book the accommodation, how much more is it for the lectures and other activities?',
        answer: 'When you book the accommodation, the price includes full board meals and all the lectures and activities over the weekend. If you wish to put your children (4yrs \u2013 16yrs old) in the Children or Youth Programme, there is a \u00A320 surcharge per child, which must be booked when booking your room(s).',
      },
      {
        question: 'How many beds are there in the hotel rooms?',
        answer: 'There is either a twin bed or double bed in each room. Additional people will need to bring sleeping bags or other sleeping materials to sleep on the floor of the hotel rooms. We recommend you bring your own travel cots.',
      },
      {
        question: 'My family is much larger than 2 adults and 3 children and I cannot get different rooms for my young children, what shall I do?',
        answer: "Please contact our Sales department and they will help you as much as they can to make it practical for your family, insha'Allah. Call us on 020 3743 8484.",
      },
      {
        question: 'Will we get towels and other toiletries in our rooms?',
        answer: 'The hotel rooms will be fully serviced and have towels and bed sheets which will be replaced daily if required.',
      },
      {
        question: 'Do the rooms have kettles and irons?',
        answer: 'All hotel rooms have kettles and irons.',
      },
      {
        question: 'Do the rooms have fridges?',
        answer: 'The hotel rooms do not have fridges.',
      },
    ],
  },
  {
    id: 'bookings',
    label: 'Bookings, Payments & Cancellations',
    questions: [
      {
        question: 'Can I reserve my room or my child on the youth programme without paying now?',
        answer: 'No, all bookings are on a first-come-first-served basis and there are no cancellations or reservations.',
      },
      {
        question: 'I cannot pay it all at once, can I pay some now and some later?',
        answer: "We have always had a policy never to close doors to those who are unable to afford our programmes. We can arrange a payment plan for those who need it and get discounts sponsored insha'Allah. But these are all assessed and you would need to contact us by email to begin the assessment process, registration@familyretreat.co.uk. Please remember we too are a not-for-profit organisation and rely upon donations, but we assure you, we will try our utmost to help you, insha'Allah.",
      },
      {
        question: 'I did not book my child on the Youth Programme when I booked my rooms, how do I add him or her onto the programme?',
        answer: "If there are places available and your child meets the minimum requirements for joining the programme, then just email us at registration@familyretreat.co.uk, and we will send you a link to add your children to the system and make the additional payment, insha'Allah.",
      },
      {
        question: 'I need to cancel my room as I am unable to come now, what shall I do?',
        answer: 'ALL bookings are non-refundable. Please note if cancelled, modified or in a case of no-shows, the total price of your booking will be charged. Alternatively, you may sell your room to a family or friend. After you have sold it, please inform us of the changed details via email and we will confirm the change for you. The last name changes permitted are 72 hours before the event begins.',
      },
    ],
  },
  {
    id: 'children-youth',
    label: 'Children & Youth Programme',
    questions: [
      {
        question: 'What age groups and programmes will be available at the weekend?',
        answer: "Please see the Youth Programme section for more details on age groups. Closer to the event, we will provide even more details on daily itineraries, insha'Allah.",
      },
      {
        question: 'If I have not registered for the programmes, can my child join on the day?',
        answer: "No, pre-registration is a must, so don't delay.",
      },
      {
        question: 'Are the programmes segregated?',
        answer: 'Yes, the programmes are fully segregated above the age of 12 years old.',
      },
      {
        question: 'My child is just under 4 years old and is really independent, can he/she please join the Youth Programme?',
        answer: 'We apologise but the team organising the children\u2019s weekend of activities have explicitly said they will not be able to cater for children under 4 years old. We do not recommend very young children being away from their parents for such long periods as we believe it is not good for their emotional development.',
      },
      {
        question: "I don't want my child doing a specific activity.",
        answer: 'We respect individual choice, but this may mean that you would have to collect your child for that period.',
      },
      {
        question: 'What happens at lunchtime, do our children get lunch on the programme?',
        answer: 'Parents are expected to collect their children and take them for lunch. Unless we have made a specific arrangement for some of the older children, parents must collect their children. Children who are not collected will not be allowed to continue on the programme the following day.',
      },
      {
        question: 'What if you need to contact us in an emergency?',
        answer: 'We will be taking all parent mobile numbers. Children who cry for long periods and need their parents will be asked to join their parents outside of the programme. Parents who do not pick their children up will not be allowed to bring them the following day to the programme.',
      },
      {
        question: 'Do I need to bring any special clothing?',
        answer: 'Closer to the event, our team will be in contact with you to give you more exact details. But we expect you to bring a spare change of clothes, outdoor clothes and shoes as well as swimwear. We carry out all activities regardless of the weather conditions.',
      },
    ],
  },
  {
    id: 'day-visitors',
    label: 'Day Visitors',
    questions: [
      {
        question: 'Can I get my own accommodation?',
        answer: 'You may do so, especially if you live near the venue. But please note, you will find that staying in the event accommodation is not only more convenient but it gives you the full experience of the event.',
      },
      {
        question: 'Will I get full board meals throughout my stay?',
        answer: 'Day visitors will only be provided with lunch and dinner.',
      },
      {
        question: 'Can my children attend the Youth Programme on the weekend?',
        answer: 'Yes, they can attend as long as you pre-register them while there are spaces left. There is a \u00A320 charge per child above 4 years old till 16 yrs old. Under 4s are not permitted on the programme but there is a play area for Parents and Toddlers. The Youth Programme will take place from 9:00am \u2013 6:00pm on Saturday and Sunday.',
      },
    ],
  },
  {
    id: 'transport',
    label: 'Transport, Parking & Directions',
    questions: [
      {
        question: 'What are the exact location details of the event?',
        answer: 'De Vere Wokefield Estate, Goodboys Lane, Reading, RG7 3AE',
      },
      {
        question: 'Is there parking at the venue?',
        answer: 'Yes, there are free parking spaces available. Please follow directions by our stewards when arriving for the retreat.',
      },
      {
        question: 'Will you be providing coaches to and from the venue from various cities in the UK?',
        answer: 'At the moment we do not have any plans to do so as most people are planning to make their own way to the venue.',
      },
    ],
  },
]

function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)

  const handleCategoryClick = (index) => {
    setActiveCategory(index)
    setOpenIndex(0)
  }

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const activeQuestions = categories[activeCategory].questions

  return (
    <section className="faq-section" id="faq">
      {/* Category pills */}
      <div className="faq-categories">
        {categories.map((cat, index) => (
          <button
            key={cat.id}
            className={`faq-category-pill${index === activeCategory ? ' faq-category-pill--active' : ''}`}
            onClick={() => handleCategoryClick(index)}
          >
            {cat.label}
          </button>
        ))}
      </div>

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
            <a href="mailto:enquiry@familyevents.org.uk" className="faq-contact-link">
              Contact support
            </a>
          </p>
        </div>

        {/* Right — accordion */}
        <div className="faq-list">
          {activeQuestions.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={`${activeCategory}-${index}`}
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
