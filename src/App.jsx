import { useState } from 'react'
import {
  Hero,
  Navbar,
  RetreatHighlight,
  Pillars,
  Experience,
  Rooms,
  DayVisitor,
  Speakers,
  YouthProgram,
  Testimonials,
  FAQ,
  Sponsors,
  Footer,
  CloudIntro
} from './components'
import './App.css'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {/* Cinematic cloud reveal — unmounts after animation */}
      <CloudIntro onComplete={() => setIntroComplete(true)} />

      <Navbar />
      <div className="hero-retreat-gradient">
        {/* Hero Section (includes Event Info) */}
        <Hero />
        <RetreatHighlight />
      </div>

      {/* Pillars Section */}
      <Pillars />

      {/* Experience Section */}
      <Experience />

      {/* Rooms Section */}
      <Rooms />

      {/* Day Visitor Section */}
      <DayVisitor />

      {/* Speakers Section */}
      <Speakers />

      {/* Youth Program Section */}
      <YouthProgram />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Sponsors Section */}
      <Sponsors />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
