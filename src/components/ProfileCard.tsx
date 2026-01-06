import { useMemo } from 'react'
import './ProfileCard.css'
import './SkillsBox.css'
import LoadingWrapper from './LoadingWrapper'
import { useLanguage } from '../i18n'
import profileImage from '../assets/projects/nekoyaicon.jpeg'

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
              ko: `게임업계에서 ${yearsOfExperience}년이상의 실무 경험을 가진 <strong>풀스택 개발자</strong>입니다. \n게임외에도 앱, 웹에 걸친 다양한 분야에서 프로젝트를 수행한 경험이 있습니다.`,
              en: `I'm a <strong>full-stack developer</strong> with over ${yearsOfExperience} years of hands-on experience in the game industry. \nI've also delivered projects across mobile apps and the web.`,
              ja: `ゲーム業界で${yearsOfExperience}年以上の実務経験を持つ<strong>フルスタック開発者</strong>です。 \nアプリやWebなど幅広い分野でプロジェクトを担当してきました。`
            })}
          </p>

          <div className="skills-strengths" aria-label="Strengths">
            <div className="skills-strengths-title">
              {l({ ko: '장점', en: 'Strengths', ja: '強み' })}
            </div>
            <p className="skills-strengths-body">
              {l({
                ko: '프로덕트에 열정적인 아이디어를 내는것을 좋아하고 상세한 일정관리에 자신이 있습니다. \n프론트엔드와 백엔드 모두 다룰수 있어 기능 구현이 빠르고 높은 유지보수성을 지닌 코드를 작성할 수 있습니다.',
                en: "I enjoy coming up with product-driven ideas, and I'm confident in detailed schedule management.\nBecause I work across both frontend and backend, I can implement features quickly and write highly maintainable code.",
                ja: 'プロダクトに熱量を持ってアイデアを出すことが好きで、細かなスケジュール管理に自信があります。\nフロントエンドとバックエンドの両方を扱えるため、機能実装が速く、保守性の高いコードを書けます。'
              })}
            </p>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default ProfileCard
