import './ProjectsList.css'
import type { PageType } from '../App'
import { useLanguage } from '../i18n'

interface ProjectsListProps {
  currentPage: PageType
  onPageChange: (page: PageType) => void
}

function ProjectsList({ currentPage, onPageChange }: ProjectsListProps) {
  const { l } = useLanguage()

  const projects = [
    {
      title: l({ ko: '프로필', en: 'PROFILE', ja: 'プロフィール' }),
      subtitle: l({ ko: '경력 & 스킬', en: 'Experience & Skills', ja: '経歴 & スキル' }),
      pageType: 'profile' as PageType,
    },
    {
      title: l({ ko: '게임_프로젝트', en: 'GAME_PROJECT', ja: 'ゲーム_プロジェクト' }),
      subtitle: l({ ko: '풀스택', en: 'Full Stack', ja: 'フルスタック' }),
      pageType: 'game' as PageType,
    },
    {
      title: l({ ko: '웹_프로젝트', en: 'WEB_PROJECT', ja: 'ウェブ_プロジェクト' }),
      subtitle: l({ ko: '풀스택(서버리스)', en: 'Full Stack(Serverless)', ja: 'フルスタック(サーバーレス)' }),
      pageType: 'web' as PageType,
    },
    {
      title: l({ ko: '앱_프로젝트', en: 'APP_PROJECT', ja: 'アプリ_プロジェクト' }),
      subtitle: l({ ko: '풀스택(서버리스)', en: 'Full Stack(Serverless)', ja: 'フルスタック(サーバーレス)' }),
      pageType: 'app' as PageType,
    },
    {
      title: l({ ko: '기타_프로젝트', en: 'OTHER_PROJECT', ja: 'その他_プロジェクト' }),
      subtitle: l({ ko: '기타', en: 'Etc.', ja: 'その他' }),
      pageType: 'other' as PageType,
    }
  ]

  const handleClick = (e: React.MouseEvent, pageType: PageType) => {
    e.preventDefault()
    onPageChange(pageType)
  }

  const currentTitle = projects.find(p => p.pageType === currentPage)?.title || projects[0].title

  return (
    <div className="projects-list">
      <h3 className="section-title">{currentTitle}</h3>
      <div className="projects">
        {projects.map((project) => (
          <a 
            key={project.pageType}
            href="#"
            className={`project-item ${currentPage === project.pageType ? 'active' : ''}`}
            onClick={(e) => handleClick(e, project.pageType)}
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
              <h4>{project.title}</h4>
              <p>{project.subtitle}</p>
            </div>
            <div className="project-arrow">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
