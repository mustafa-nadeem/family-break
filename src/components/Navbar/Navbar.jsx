import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const overviewLinks = [
  { href: '#theme', label: 'Theme', target: 'theme' },
  { href: '#activities', label: 'Activities', target: 'activities' },
  { href: '#entertainment', label: 'Entertainment', target: 'entertainment' },
  { href: '#food', label: 'Food', target: 'food' },
  { href: '#venue', label: 'Venue', target: 'venue' },
]

const eventPassLinks = [
  { href: '#residential-tickets', label: 'Residential Tickets' },
  { href: '#day-visitor', label: 'Day Visitor Tickets' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileGroups, setMobileGroups] = useState({
    eventOverview: false,
    eventPasses: false,
  })
  const menuRef = useRef(null)
  const btnRef = useRef(null)

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setMobileGroups({
      eventOverview: false,
      eventPasses: false,
    })
  }

  const clearFocusedNavItem = () => {
    window.requestAnimationFrame(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    })
  }

  const handleOverviewNavigation = (target) => (event) => {
    event.preventDefault()

    const overviewSection = document.getElementById('overview')
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const hash = `#${target}`
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash)
    }
    window.dispatchEvent(new Event('hashchange'))

    closeMobileMenu()
    clearFocusedNavItem()
  }

  const handleLinkClick = () => {
    closeMobileMenu()
    clearFocusedNavItem()
  }

  const toggleMobileGroup = (groupKey) => {
    setMobileGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }))
  }

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        btnRef.current && !btnRef.current.contains(event.target)
      ) {
        closeMobileMenu()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  return (
    <header className="navbar">
      <div className="navbar-shell">
        <div className="navbar-logo">
          <img src={logo} alt="Family Break" />
        </div>

        <nav className="navbar-links" aria-label="Primary">
          <a href="#previous-events" onClick={handleLinkClick}>Previous Events</a>

          <div className="navbar-dropdown-item">
            <a href="#overview" className="navbar-parent-link" onClick={handleOverviewNavigation('overview')}>
              Event Overview
            </a>
            <div className="navbar-dropdown-menu" role="menu" aria-label="Event Overview links">
              {overviewLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleOverviewNavigation(link.target)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="navbar-dropdown-item">
            <a href="#event-passes" className="navbar-parent-link" onClick={handleLinkClick}>
              Event Passes
            </a>
            <div className="navbar-dropdown-menu" role="menu" aria-label="Event Passes links">
              {eventPassLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <a href="#speakers" onClick={handleLinkClick}>Speakers</a>
          <a href="#youth-programme" onClick={handleLinkClick}>Youth Programme</a>
          <a href="#faq" onClick={handleLinkClick}>FAQ</a>
        </nav>

        <div className="navbar-cta">
          <a className="navbar-book" href="https://checkout.family-break.com/">
            Book Now
          </a>
        </div>

        <div className="navbar-right-mobile">
          <a className="navbar-book navbar-book-mobile" href="https://checkout.family-break.com/">
            Book Now
          </a>
          <button
            ref={btnRef}
            className={`navbar-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((value) => !value)}
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

      <nav
        ref={menuRef}
        className={`navbar-mobile-menu${menuOpen ? ' visible' : ''}`}
        aria-label="Mobile"
      >
        <a href="#previous-events" onClick={handleLinkClick}>Previous Events</a>

        <div className="navbar-mobile-group">
          <button
            type="button"
            className={`navbar-mobile-group-toggle${mobileGroups.eventOverview ? ' open' : ''}`}
            onClick={() => toggleMobileGroup('eventOverview')}
            aria-expanded={mobileGroups.eventOverview}
          >
            Event Overview
          </button>
          <div className={`navbar-mobile-submenu${mobileGroups.eventOverview ? ' visible' : ''}`}>
            <a href="#overview" onClick={handleOverviewNavigation('overview')}>Overview</a>
            {overviewLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleOverviewNavigation(link.target)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="navbar-mobile-group">
          <button
            type="button"
            className={`navbar-mobile-group-toggle${mobileGroups.eventPasses ? ' open' : ''}`}
            onClick={() => toggleMobileGroup('eventPasses')}
            aria-expanded={mobileGroups.eventPasses}
          >
            Event Passes
          </button>
          <div className={`navbar-mobile-submenu${mobileGroups.eventPasses ? ' visible' : ''}`}>
            {eventPassLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <a href="#speakers" onClick={handleLinkClick}>Speakers</a>
        <a href="#youth-programme" onClick={handleLinkClick}>Youth Programme</a>
        <a href="#faq" onClick={handleLinkClick}>FAQ</a>
      </nav>
    </header>
  )
}

export default Navbar
