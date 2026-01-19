import { useEffect, useRef, useState } from 'react'
import { useLanguage, type Language } from '../i18n'
import './DosMenuBar.css'
import './TopMenu.css'

const languageOptions: { code: Language; label: string }[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
]

function TopMenu() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const highlightTimeoutRef = useRef<number | null>(null)
  const removeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  const toggleOpen = () => setIsOpen((v) => !v)

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
      // Clear any existing timeouts
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current)
      }
      if (removeTimeoutRef.current) {
        clearTimeout(removeTimeoutRef.current)
      }
      
      // Add highlight animation after scroll
      highlightTimeoutRef.current = window.setTimeout(() => {
        projectsSection.classList.remove('highlight')
        // Force reflow to restart animation
        void projectsSection.offsetWidth
        projectsSection.classList.add('highlight')
        
        // Remove class after animation completes
        removeTimeoutRef.current = window.setTimeout(() => {
          projectsSection.classList.remove('highlight')
        }, 1500)
      }, 300)
    }
  }

  return (
    <div className="topmenu-bar">
      <nav className="desc-navbar" aria-label="Main">
        <div className="nav-scroll" aria-label="Menu">
          <button className="nav-item" type="button" onClick={scrollToProjects}>
            <span className="nav-title">CHECK PROJECTS</span>
          </button>
        </div>

        <div className="topmenu-lang" ref={dropdownRef}>
          <button
            className="nav-item sort-btn"
            type="button"
            onClick={toggleOpen}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="nav-title" style={{ fontSize: '18px' }}>
              Language: {language.toUpperCase()} {isOpen ? '▲' : '▼'}
            </span>
          </button>

          {isOpen && (
            <div className="topmenu-dropdown" role="listbox">
              {languageOptions.map((opt) => (
                <button
                  key={opt.code}
                  className={`topmenu-dropdown-item ${language === opt.code ? 'active' : ''}`}
                  type="button"
                  role="option"
                  aria-selected={language === opt.code}
                  onClick={() => handleSelect(opt.code)}
                >
                  <span className="topmenu-dropdown-code">{opt.code.toUpperCase()}</span>
                  <span className="topmenu-dropdown-label">{opt.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default TopMenu
