import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToContact = (e) => {
    e.preventDefault()
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return
    }
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={scrollToTop}
          className="font-heading font-bold text-xl text-navy tracking-tight hover:text-gold transition-colors duration-300"
        >
          Neel Parekh
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            onClick={scrollToTop}
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Home
          </a>
          <Link
            to="/projects"
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Projects
          </Link>
          <a
            href="/NeelParekh_Resume.pdf"
            download="NeelParekh_Resume.pdf"
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a
            href="#"
            onClick={scrollToTop}
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Home
          </a>
          <Link
            to="/projects"
            onClick={() => setMobileOpen(false)}
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Projects
          </Link>
          <a
            href="/NeelParekh_Resume.pdf"
            download="NeelParekh_Resume.pdf"
            onClick={() => setMobileOpen(false)}
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="font-body text-sm font-medium text-charcoal hover:text-gold transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
