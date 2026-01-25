import './TechStack.css'
import { useLanguage } from '../i18n'
import { 
  gameStack, 
  webStack, 
  appStack, 
  otherStack, 
  defaultStack,
  type TechBadge
} from '../data/home'

interface TechStackProps {
  clientStack?: TechBadge[]
  serverStack?: TechBadge[]
  dbStack?: TechBadge[]
}

function TechStack({ 
  clientStack = defaultStack.clientStack, 
  serverStack = defaultStack.serverStack, 
  dbStack = defaultStack.dbStack 
}: TechStackProps) {
  const { l } = useLanguage()
  
  // If all stacks are empty, show nothing
  const isEmpty = clientStack.length === 0 && serverStack.length === 0 && (!dbStack || dbStack.length === 0)
  
  if (isEmpty) {
    return (
      <div className="tech-stack">
        <div className="stack-section">
          <p className="empty-stack">{l({ ko: '기술 스택 정보 없음', en: 'No tech stack info', ja: '技術スタック情報なし' })}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="tech-stack">
      {clientStack.length > 0 && (
        <div className="stack-section">
          <h4 className="stack-label">{l({ ko: '클라이언트', en: 'CLIENT', ja: 'クライアント' })}</h4>
          <div className="badge-container">
            {clientStack.map((tech) => (
              <img 
                key={tech.name}
                src={tech.badgeUrl}
                alt={tech.name}
                className="tech-badge"
              />
            ))}
          </div>
        </div>
      )}
      
      {serverStack.length > 0 && (
        <div className="stack-section">
          <h4 className="stack-label">{l({ ko: '서버', en: 'SERVER', ja: 'サーバー' })}</h4>
          <div className="badge-container">
            {serverStack.map((tech) => (
              <img 
                key={tech.name}
                src={tech.badgeUrl}
                alt={tech.name}
                className="tech-badge"
              />
            ))}
          </div>
        </div>
      )}

      {dbStack && dbStack.length > 0 && (
        <div className="stack-section">
          <h4 className="stack-label">{l({ ko: '데이터베이스', en: 'DATABASE', ja: 'データベース' })}</h4>
          <div className="badge-container">
            {dbStack.map((tech) => (
              <img 
                key={tech.name}
                src={tech.badgeUrl}
                alt={tech.name}
                className="tech-badge"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TechStack
export { gameStack, webStack, appStack, otherStack }
export type { TechStackProps, TechBadge }
