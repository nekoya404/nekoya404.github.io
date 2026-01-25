import { useState } from 'react'
import { useLanguage } from '../i18n'
import './ContactBox.css'
import { contactData } from '../data/home'

function ContactBox() {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(contactData.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="contact-card">
      <div className="contact-info">
        <div className="email-row">
          <h3>{contactData.email}</h3>
          <button 
            onClick={handleCopy} 
            className="copy-btn-small"
            title={contactData.copyTooltip[language]}
          >
            {copied ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            )}
          </button>
        </div>
        <a href={`mailto:${contactData.email}`} className="btn btn-primary">
          {contactData.buttonText[language]}
        </a>
      </div>
    </div>
  )
}

export default ContactBox
