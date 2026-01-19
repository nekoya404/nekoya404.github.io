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

          <div className="skills-strengths" aria-label="Things I Like">
            <div className="skills-strengths-title">
              {l({ ko: '좋아하는 것', en: 'Things I Like', ja: '好きなこと' })}
            </div>
            <ul className="skills-strengths-body">
              <li>
                {l({
                  ko: '웹, 앱, 게임등 장르는 가리지 않아요',
                  en: "I don't limit myself to any genre - web, app, game, you name it",
                  ja: 'ウェブ、アプリ、ゲームなどジャンルは問いません'
                })}
              </li>
              <li>
                {l({
                  ko: '누군가에게 유용한 것을 만드는걸 좋아해요',
                  en: 'I love creating things that are useful to others',
                  ja: '誰かの役に立つものを作るのが好きです'
                })}
              </li>
              <li>
                {l({
                  ko: '창의적이고 도전적인 일을 좋아해요',
                  en: 'I enjoy creative and challenging work',
                  ja: '創造的で挑戦的な仕事が好きです'
                })}
              </li>
              <li>
                {l({
                  ko: '레트로한 디자인이나 키치한 디자인을 좋아해요',
                  en: 'I love retro and kitsch design aesthetics',
                  ja: 'レトロなデザインやキッチュなデザインが好きです'
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default ProfileCard
