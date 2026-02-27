import logo from '../../assets/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-shell">
        <div className="navbar-logo">
          <img src={logo} alt="Family Break" />
        </div>
        <nav className="navbar-links" aria-label="Primary">
          <a href="#overview">Overview</a>
          <a href="#rooms">Rooms</a>
          <a href="#day-visitor">Day Visitor</a>
          <a href="#speakers">Speakers</a>
          <a href="#youth-programme">Youth Programme</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="navbar-cta">
          <a className="navbar-book" href="#book">
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
