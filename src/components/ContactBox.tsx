import { useState } from 'react'
import { useLanguage } from '../i18n'

function ContactBox() {
  const { l, language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nekoya404@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="contact-box">
      <div className="contact-info">
        <div className="email-row">
          <h3>nekoya404@gmail.com</h3>
          <button 
            onClick={handleCopy} 
            className="copy-btn-small"
            title={{ ko: '복사하기', en: 'Copy', ja: 'コピー' }[language]}
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
        <a href="mailto:nekoya404@gmail.com" className="btn btn-primary">
          {l({ ko: '연락하기', en: 'CONTACT.ME', ja: 'お問い合わせ' })}
        </a>
      </div>
    </div>
  )
}

export default ContactBox
