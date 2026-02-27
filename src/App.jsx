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
  Footer
} from './components'

function App() {
  return (
    <>
      <Navbar />
      {/* Hero Section (includes Event Info) */}
      <Hero />

      <RetreatHighlight />

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
