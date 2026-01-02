import './TutorialCard.css'
import { useLanguage } from '../i18n'

interface TutorialCardProps {
  link?: string
}

function TutorialCard({ link = '#' }: TutorialCardProps) {
  const { l } = useLanguage()
  
  return (
    <div className="tutorial-card">
      <div className="tutorial-content">
        <h3>{l({ 
          ko: '새로운 Spline 튜토리얼', 
          en: 'NEW SPLINE TUTORIAL', 
          ja: '新しいSplineチュートリアル' 
        })}</h3>
        <p>{l({ 
          ko: 'Spline으로 만드는 방법 배우기', 
          en: 'Learn how to make it in Spline', 
          ja: 'Splineで作る方法を学ぶ' 
        })}</p>
      </div>
      <a href={link} className="watch-btn" target="_blank" rel="noopener noreferrer">
        {l({ ko: '지금 보기', en: 'WATCH NOW', ja: '今すぐ見る' })}
      </a>
    </div>
  )
}

export default TutorialCard
