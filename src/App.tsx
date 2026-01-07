import { useState, useMemo } from 'react'
import ProfileCard from './components/ProfileCard'
import LocationTimer from './components/LocationTimer'
import ContactBox from './components/ContactBox'
import SkillsBox from './components/SkillsBox'
import SocialLinks from './components/SocialLinks'
import ProjectsList from './components/ProjectsList'
import ProjectDescription from './components/ProjectDescription'
import TechStack, { defaultGameStack, webStack, appStack, otherStack } from './components/TechStack'
import TopMenu from './components/TopMenu'
import LoadingWrapper from './components/LoadingWrapper'
import { projectCategories } from './data/projects'
import './App.css'

export type PageType = 'profile' | 'game' | 'web' | 'app' | 'other'

const techStacks = {
  game: defaultGameStack,
  web: webStack,
  app: appStack,
  other: otherStack
}

// 모든 프로젝트에서 이미지 URL 수집
function getAllProjectImages(): string[] {
  const images: string[] = []
  
  Object.values(projectCategories).forEach(category => {
    Object.values(category.projects).forEach(project => {
      if (project.pictures) {
        images.push(...project.pictures)
      }
    })
  })
  
  return images
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('profile')
  
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
                />
              </section>
            </>
          )}
          
          {/* Right Column - Social/TechStack & Projects */}
          <section className="right-column">
            {currentPage === 'profile' ? (
              <SocialLinks />
            ) : (
              <TechStack {...techStacks[currentPage as keyof typeof techStacks]} />
            )}
            <ProjectsList currentPage={currentPage} onPageChange={setCurrentPage} />
            {currentPage === 'profile' ? (
              <>
                <ContactBox />
                <LocationTimer 
                  location="TOKYO.JP"
                  timezone="Asia/Tokyo"
                  gmtOffset="GMT+9"
                />
              </>
            ) : null}
          </section>
        </main>
      </div>
    </LoadingWrapper>
  )
}

export default App
