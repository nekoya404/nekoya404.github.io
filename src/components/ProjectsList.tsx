import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './ProjectsList.css'
import type { PageType } from '../App'
import { useLanguage } from '../i18n'
import { projectCategories } from '../data/projects'
import { getCategoryUrl } from '../router'

interface ProjectsListProps {
  currentPage: PageType
}

function ProjectsList({ currentPage }: ProjectsListProps) {
  const { l } = useLanguage()

  const getProjectCount = (pageType: PageType): number | null => {
    if (pageType === 'profile') return null

    const category = projectCategories[pageType as keyof typeof projectCategories]
    if (!category) return null

    return Object.keys(category.projects).length
  }

  const renderTitleWithCount = (title: ReactNode, pageType: PageType) => {
    const count = getProjectCount(pageType)
    return (
      <>
        {title}
        {count === null ? null : ` (${count})`}
      </>
    )
  }

  const projects = [
    {
      title: l({ ko: '프로필', en: 'PROFILE', ja: 'プロフィール' }),
      subtitle: l({ ko: '경력 & 스킬', en: 'Experience & Skills', ja: '経歴 & スキル' }),
      pageType: 'profile' as PageType,
    },
    {
      title: l({ ko: '게임_프로젝트', en: 'GAME_PROJECT', ja: 'ゲーム_プロジェクト' }),
      subtitle: l({ ko: '유니티를 이용한 게임 개발', en: 'Game development with Unity', ja: 'Unityを使ったゲーム開発' }),
      pageType: 'game' as PageType,
    },
    {
      title: l({ ko: '웹_프로젝트', en: 'WEB_PROJECT', ja: 'ウェブ_プロジェクト' }),
      subtitle: l({ ko: '리액트를 이용한 웹 개발', en: 'Web development with React', ja: 'Reactを使ったWeb開発' }),
      pageType: 'web' as PageType,
    },
    {
      title: l({ ko: '앱_프로젝트', en: 'APP_PROJECT', ja: 'アプリ_プロジェクト' }),
      subtitle: l({ ko: '플러터를 이용한 앱 개발', en: 'App development with Flutter', ja: 'Flutterを使ったアプリ開発' }),
      pageType: 'app' as PageType,
    },
    {
      title: l({ ko: '기타_프로젝트', en: 'OTHER_PROJECT', ja: 'その他_プロジェクト' }),
      subtitle: l({ ko: 'Etc.', en: 'Etc.', ja: 'その他' }),
      pageType: 'other' as PageType,
    }
  ]

  const currentProject = projects.find(p => p.pageType === currentPage) || projects[0]
  const currentTitle = renderTitleWithCount(currentProject.title, currentProject.pageType)

  return (
    <div id="projects-section" className="projects-list">
      <h3 className="section-title">{currentTitle}</h3>
      <div className="projects">
        {projects.map((project) => (
          <Link 
            key={project.pageType}
            to={getCategoryUrl(project.pageType)}
            className={`project-item ${currentPage === project.pageType ? 'active' : ''}`}
          >
            <div 
              className="project-icon" 
              style={{ background: 'transparent' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
              </svg>
            </div>
            <div className="project-info">
              <h4>{renderTitleWithCount(project.title, project.pageType)}</h4>
              <p>{project.subtitle}</p>
            </div>
            <div className="project-arrow">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
