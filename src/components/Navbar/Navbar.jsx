import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const btnRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false)

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
        <div className="navbar-right-mobile">
          <a className="navbar-book navbar-book-mobile" href="#book">
            Book Now
          </a>
          <button
            ref={btnRef}
            className={`navbar-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <nav
        ref={menuRef}
        className={`navbar-mobile-menu${menuOpen ? ' visible' : ''}`}
        aria-label="Mobile"
      >
        <a href="#overview" onClick={handleLinkClick}>Overview</a>
        <a href="#rooms" onClick={handleLinkClick}>Rooms</a>
        <a href="#day-visitor" onClick={handleLinkClick}>Day Visitor</a>
        <a href="#speakers" onClick={handleLinkClick}>Speakers</a>
        <a href="#youth-programme" onClick={handleLinkClick}>Youth Programme</a>
        <a href="#faq" onClick={handleLinkClick}>FAQ</a>
      </nav>
    </header>
  )
}

export default Navbar
