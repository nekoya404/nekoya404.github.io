import './SocialLinks.css'
import { socialLinks } from '../data/home'

const getIcon = (icon: string) => {
  switch (icon) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.73.5.75 5.6.75 12.02c0 5.11 3.17 9.44 7.57 10.98.55.1.76-.24.76-.54 0-.27-.01-.98-.02-1.93-3.08.69-3.73-1.53-3.73-1.53-.5-1.32-1.22-1.67-1.22-1.67-1-.7.08-.69.08-.69 1.1.08 1.68 1.17 1.68 1.17.98 1.72 2.57 1.22 3.2.93.1-.73.38-1.22.69-1.5-2.46-.29-5.05-1.26-5.05-5.62 0-1.24.42-2.25 1.12-3.05-.11-.29-.49-1.46.11-3.05 0 0 .92-.3 3.02 1.16a10.06 10.06 0 0 1 2.75-.38c.93 0 1.87.13 2.75.38 2.1-1.46 3.02-1.16 3.02-1.16.6 1.59.22 2.76.11 3.05.7.8 1.12 1.81 1.12 3.05 0 4.37-2.6 5.33-5.07 5.62.39.35.74 1.04.74 2.1 0 1.51-.02 2.73-.02 3.1 0 .3.2.65.77.54 4.4-1.54 7.56-5.87 7.56-10.98C23.25 5.6 18.27.5 12 .5z" />
        </svg>
      )
    case 'qiita':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <text
            x="12"
            y="12"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="25"
            fontWeight="900"
            textLength="25"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
          >
            QIITA
          </text>
        </svg>
      )
    default:
      return null
  }
}

function SocialLinks() {
  return (
    <div className="social-links">
      <div className="hex-grid">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="hex-item"
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
          >
            <div className="hex-content">
              {getIcon(social.icon)}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
