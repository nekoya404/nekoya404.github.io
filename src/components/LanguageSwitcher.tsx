import { useState, useRef, useEffect } from 'react'
import { useLanguage, type Language } from '../i18n'
import './LanguageSwitcher.css'

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
]

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const currentOption = languageOptions.find(opt => opt.code === language)

  // 외부 클릭 시 드롭다운 닫기
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

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="lang-flag">{currentOption?.flag}</span>
        <span className="lang-code">{language.toUpperCase()}</span>
        <span className="lang-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <ul className="language-dropdown" role="listbox">
          {languageOptions.map(option => (
            <li key={option.code}>
              <button
                className={`language-option ${language === option.code ? 'active' : ''}`}
                onClick={() => handleSelect(option.code)}
                role="option"
                aria-selected={language === option.code}
              >
                <span className="lang-flag">{option.flag}</span>
                <span className="lang-label">{option.label}</span>
                {language === option.code && <span className="lang-check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
