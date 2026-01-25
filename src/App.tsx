import { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProfileCard, { PROFILE_IMAGE_URL } from './components/ProfileCard'
import LocationTimer from './components/LocationTimer'
import ContactBox from './components/ContactBox'
import SkillsBox from './components/SkillsBox'
import SocialLinks from './components/SocialLinks'
import ProjectsList from './components/ProjectsList'
import ProjectDescription from './components/ProjectDescription'
import TechStack, { gameStack, webStack, appStack, otherStack } from './components/TechStack'
import TopMenu from './components/TopMenu'
import LoadingWrapper from './components/LoadingWrapper'
import DosStatusBar from './components/DosStatusBar'
import { projectCategories } from './data/projects'
import { useLanguage } from './i18n'
import './App.css'

export type PageType = 'profile' | 'game' | 'web' | 'app' | 'other'

const techStacks = {
  game: gameStack,
  web: webStack,
  app: appStack,
  other: otherStack
}

// 모든 프로젝트에서 이미지 URL 수집
function getAllProjectImages(): string[] {
  const images: string[] = [PROFILE_IMAGE_URL]
  
  Object.values(projectCategories).forEach(category => {
    Object.values(category.projects).forEach(project => {
      if (project.pictures) {
        images.push(...project.pictures)
      }
    })
  })
  
  return images
}

// URL 경로에서 PageType 추출
function getPageTypeFromPath(pathname: string): PageType {
  const segments = pathname.split('/').filter(Boolean)
  const category = segments[0]
  
  if (category === 'game' || category === 'web' || category === 'app' || category === 'other') {
    return category
  }
  return 'profile'
}

function App() {
  const location = useLocation()
  const { projectId } = useParams<{ projectId?: string }>()
  const { l } = useLanguage()
  
  // URL에서 현재 페이지 타입 결정
  const currentPage = getPageTypeFromPath(location.pathname)
  
  // 모든 프로젝트 이미지를 한 번에 수집 (메모이제이션)
  const allImages = useMemo(() => getAllProjectImages(), [])

  return (
    <LoadingWrapper imagesToLoad={allImages}>
      <div className="portfolio-container">
        <TopMenu />
        <main className="grid-layout">
          {/* Left & Center Column - Changes based on page */}
          {currentPage === 'profile' ? (
            <>
              {/* Default Profile Layout */}
              <section className="left-column">
                <ProfileCard />
              </section>
              
              <section className="center-column">
                <ContactBox />
                <SkillsBox />
              </section>
            </>
          ) : (
            <>
              {/* Project Page Layout - Full width description */}
              <section className="content-column">
                <ProjectDescription 
                  key={currentPage}
                  category={projectCategories[currentPage as keyof typeof projectCategories]}
                  initialProjectId={projectId}
                />
              </section>
            </>
          )}
          
          {/* Right Column - Social/TechStack & Projects */}
          <section className="right-column">
            {currentPage === 'profile' ? (
              <>
                <LocationTimer 
                  location="TOKYO.JP"
                  timezone="Asia/Tokyo"
                  gmtOffset="GMT+9"
                />
                <SocialLinks />
              </>
            ) : (
              <TechStack {...techStacks[currentPage as keyof typeof techStacks]} />
            )}
            <ProjectsList currentPage={currentPage} />
          </section>
        </main>
      </div>
      <DosStatusBar message={l({
        ko: '모든 제안을 환영합니다. 언제든 저에게 이메일로 연락해주세요.',
        en: 'Open to all proposals. Feel free to contact me via email anytime.',
        ja: 'あらゆるご提案を歓迎します。いつでもメールでご連絡ください。'
      })} />
    </LoadingWrapper>
  )
}

export default App
