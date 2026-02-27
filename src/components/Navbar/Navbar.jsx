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
          <a href="#topic">Topic</a>
          <a href="#activities">Activities</a>
          <a href="#food">Food</a>
          <a href="#venue">Venue</a>
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
