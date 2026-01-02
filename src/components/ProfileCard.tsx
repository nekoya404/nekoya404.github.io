import { useMemo } from 'react'
import './ProfileCard.css'
import LoadingWrapper from './LoadingWrapper'
import LocationTimer from './LocationTimer'
import ContactBox from './ContactBox'
import { useLanguage } from '../i18n'
import profileImage from '../assets/projects/nekoyaicon.jpeg'

const skills = ['Game Programming',
                'App Programming', 
                'Web Programming']
const languageSkills = ['Korean (Native)', 'Japanese (Fluent)', 'English (B1 Level)', ]
const PROFILE_IMAGE_URL = profileImage
const WORK_START_DATE = new Date(2020, 7, 1) // 2020년 8월 (월은 0부터 시작)

function ProfileCard() {
  const { l } = useLanguage()

  // 경력 연수 계산
  const yearsOfExperience = useMemo(() => {
    const now = new Date()
    const diffTime = now.getTime() - WORK_START_DATE.getTime()
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25))
    return diffYears
  }, [])

  // 로드해야 할 이미지 목록
  const imagesToLoad = useMemo(() => [PROFILE_IMAGE_URL], [])

  return (
    <LoadingWrapper imagesToLoad={imagesToLoad}>
      <div className="profile-card">
        <div className="profile-image-container">
          <div className="profile-image">
            <img 
              src={PROFILE_IMAGE_URL}
              alt="Profile" 
            />
          </div>
          <span className="username">C:\USER&gt;</span>
        </div>
        
        <div className="profile-content">
          <h2 className="name"><span className="highlight">Nekoya404</span></h2>
          <p className="description">
            {l({
              ko: `게임업계에서 ${yearsOfExperience}년이상의 실무 경험을 가진 <strong>풀스택 개발자</strong>입니다. \n게임외에도 앱, 웹에 걸친 다양한 분야에서 프로젝트를 수행한 경험이 있습니다. \n프로그래머는 풀스택을 지향해야하고 특정 기술보다 프로덕트 중심의 사고를 해야 한다고 믿습니다. \n개성있고 창의적인 프로덕트를 만드는데에 기여하고 싶습니다.`,
              en: `I'm a <strong>full-stack developer</strong> with over ${yearsOfExperience} years of hands-on experience in the game industry. \nI've also delivered projects across mobile apps and the web. \nI believe developers should aim to be full-stack and think product-first rather than focusing on a specific technology. \nI want to contribute to building distinctive and creative products.`,
              ja: `ゲーム業界で${yearsOfExperience}年以上の実務経験を持つ<strong>フルスタック開発者</strong>です。 \nアプリやWebなど幅広い分野でプロジェクトを担当してきました。 \nプログラマーはフルスタックを志向し、特定の技術よりもプロダクト中心で考えるべきだと考えています。 \n個性があり創造的なプロダクトづくりに貢献したいです。`
            })}
          </p>
          
          <div className="status">
            <span className="status-dot"></span>
            <span>{l({ 
              ko: '상태: 채용, 비즈니스 제안, 단기 안건 환영', 
              en: 'Status: Open to hiring, business proposals, and short-term projects', 
              ja: '状態: 採用・業務提案・短期案件 歓迎' 
            })}</span>
          </div>
          
          <div className="skills">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">[{skill}]</span>
            ))}
          </div>
          
          <div className="skills">
            {languageSkills.map(lang => (
              <span key={lang} className="language-tag">[{lang}]</span>
            ))}
          </div>
        </div>
        
        <LocationTimer 
          location="TOKYO.JP"
          timezone="Asia/Tokyo"
          gmtOffset="GMT+9"
        />
        
        <ContactBox />
      </div>
    </LoadingWrapper>
  )
}

export default ProfileCard
