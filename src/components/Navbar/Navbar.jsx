import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const navItems = [
  { href: '#overview', label: 'Overview' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#day-visitor', label: 'Day Visitor' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#youth-programme', label: 'Youth Programme' },
  { href: '#faq', label: 'FAQ' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleToggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-shell">
        <div className="navbar-logo">
          <img src={logo} alt="Family Break" />
        </div>
        <nav className="navbar-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="navbar-actions">
          <a className="navbar-book" href="#book">
            Book Now
          </a>
          <button
            className={`navbar-menu-toggle${isMenuOpen ? ' navbar-menu-toggle--open' : ''}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={handleToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu${isMenuOpen ? ' navbar-mobile-menu--open' : ''}`}
        aria-label="Mobile primary"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
