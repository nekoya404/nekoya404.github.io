import { useState, useMemo } from 'react'
import './ProjectDescription.css'
import { useLanguage } from '../i18n'
import type { ProjectData, ProjectCategory, LocalizedString } from '../data/projects/types'
import { getLocalizedString } from '../data/projects/types'

// 타입 re-export (기존 코드 호환성 유지)
export type { ProjectData, ProjectCategory }

interface ProjectDescriptionProps {
  category: ProjectCategory
}

const DEFAULT_SORT_ORDER: 'asc' | 'desc' = 'desc';

// 연도 파싱 헬퍼 함수
const parseYear = (yearStr?: string): number => {
  if (!yearStr) return 0;
  // 숫자만 추출하여 배열로 만듦
  const years = yearStr.match(/\d+/g);
  if (!years) return 0;
  // 추출된 숫자 중 가장 큰 값을 반환 (예: "2013~2024" -> 2024)
  return Math.max(...years.map(Number));
}

const URL_REGEX = /(https?:\/\/[^\s]+)/g

const renderTextWithLinks = (text: string) => {
  const lines = text.split('\n')

  return lines.map((line, lineIndex) => {
    const parts = line.split(URL_REGEX)

    return (
      <span key={`line-${lineIndex}`}>
        {parts.map((part, partIndex) => {
          if (part.match(URL_REGEX)) {
            return (
              <a
                key={`url-${lineIndex}-${partIndex}`}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            )
          }
          return <span key={`txt-${lineIndex}-${partIndex}`}>{part}</span>
        })}
        {lineIndex < lines.length - 1 ? <br /> : null}
      </span>
    )
  })
}

function ProjectDescription({ category }: ProjectDescriptionProps) {
  const { l, language } = useLanguage()
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(DEFAULT_SORT_ORDER)
  
  // 정렬된 메뉴 아이템 계산
  const sortedMenuItems = useMemo(() => {
    return [...category.menuItems].sort((a, b) => {
      const yearA = parseYear(category.projects[a]?.year);
      const yearB = parseYear(category.projects[b]?.year);
      
      if (sortOrder === 'asc') {
        return yearA - yearB;
      } else {
        return yearB - yearA;
      }
    });
  }, [category.menuItems, category.projects, sortOrder]);

  // key prop으로 인해 category 변경 시 컴포넌트가 재마운트되므로
  // useState 초기값이 항상 올바른 카테고리의 첫 번째 항목으로 설정됨
  // 정렬된 리스트의 첫 번째 항목을 기본값으로 설정
  const [activeProject, setActiveProject] = useState<string>(() => {
    const initialSorted = [...category.menuItems].sort((a, b) => {
      const yearA = parseYear(category.projects[a]?.year);
      const yearB = parseYear(category.projects[b]?.year);
      
      if (DEFAULT_SORT_ORDER === 'asc') {
        return yearA - yearB;
      } else {
        return yearB - yearA;
      }
    });
    return initialSorted[0] || category.menuItems[0];
  })
  
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
  const project = category.projects[activeProject]

  const titleMeta = [project.genre, project.platform].filter(Boolean).join(' / ')

  // 다국어 헬퍼 함수
  const localize = (value: LocalizedString) => getLocalizedString(value, language)

  // 프로젝트 변경 시 이미지 인덱스 초기화
  const handleProjectChange = (item: string) => {
    setActiveProject(item)
    setActiveImageIndex(0)
  }

  // 정렬 토글
  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  }

  // 이미지 네비게이션
  const handlePrevImage = () => {
    if (project.pictures && project.pictures.length > 0) {
      setActiveImageIndex((prev) => 
        prev === 0 ? project.pictures!.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (project.pictures && project.pictures.length > 0) {
      setActiveImageIndex((prev) => 
        prev === project.pictures!.length - 1 ? 0 : prev + 1
      )
    }
  }

  // 상태 라벨 번역
  const getStatusLabel = (status: string) => {
    const statusLower = status.toLowerCase().replace('_', '-')
    if (statusLower === 'completed') return l({ ko: '완료', en: 'COMPLETED', ja: '完了' })
    if (statusLower === 'in-progress') return l({ ko: '진행중', en: 'IN_PROGRESS', ja: '進行中' })
    if (statusLower === 'planning') return l({ ko: '계획중', en: 'PLANNING', ja: '計画中' })
    return status
  }

  return (
    <div className="project-description">
      {/* 카테고리 타이틀 */}
      <div className="category-label">[ {localize(category.categoryTitle)} ]</div>
      
      {/* 메뉴 네비게이션 바 */}
      <nav className="desc-navbar">
        <div className="nav-scroll" aria-label="Project menu">
          {sortedMenuItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeProject === item ? 'active' : ''}`}
              onClick={() => handleProjectChange(item)}
            >
              <span className="nav-title">{localize(category.projects[item]?.title) || item}</span>
              {category.projects[item]?.year && (
                <span
                  className={`nav-year${String(category.projects[item].year).trim().endsWith('~') ? ' ongoing' : ''}`}
                >
                  {category.projects[item].year}
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          className="nav-item sort-btn"
          onClick={toggleSort}
          title={sortOrder === 'asc' ? "Sort Descending" : "Sort Ascending"}
        >
          <span className="nav-title" style={{ fontSize: '18px' }}>
            {sortOrder === 'asc' ? 'YEAR ▲' : 'YEAR ▼'}
          </span>
        </button>
      </nav>

      <div className="desc-inner">
        <div className="desc-header">
          <h2 className="desc-title">
            {localize(project.title)}
            {titleMeta && <span className="desc-genre"> / {titleMeta}</span>}
          </h2>
          <span className="desc-badge">{project.badge}</span>
        </div>
        
        <div className="desc-content">
          <div className="desc-section">
            <h3>{l({ ko: '► 설명', en: '► Description', ja: '► 説明' })}</h3>
            <p>{renderTextWithLinks(localize(project.info))}</p>
          </div>

          {/* 사진 섹션 - pictures가 있을 때만 표시 */}
          {project.pictures && project.pictures.length > 0 && (
            <div className="desc-section">
              <h3>{l({ ko: '► 스크린샷', en: '► SCREENSHOTS', ja: '► スクリーンショット' })}</h3>
              <div className="pictures-gallery">
                <button className="gallery-nav prev" onClick={handlePrevImage}>◄</button>
                <div className="gallery-container">
                  <img 
                    src={project.pictures[activeImageIndex]} 
                    alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                    className="gallery-image"
                  />
                  <div className="gallery-indicator">
                    {project.pictures.map((_, index) => (
                      <span 
                        key={index}
                        className={`indicator-dot ${index === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(index)}
                      />
                    ))}
                  </div>
                  <div className="gallery-counter">
                    [{activeImageIndex + 1}/{project.pictures.length}]
                  </div>
                </div>
                <button className="gallery-nav next" onClick={handleNextImage}>►</button>
              </div>
            </div>
          )}
          
          <div className="desc-section">
            <h3>{l({ ko: '► 주요_구현내용', en: '► KEY_IMPLEMENTATION', ja: '► 主要実装内容' })}</h3>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}><span className="bullet">▸</span> {localize(feature)}</li>
              ))}
            </ul>
          </div>

          {project.skills && (
            <div className="desc-section">
              <h3>{l({ ko: '► 기술 스택', en: '► SKILLS', ja: '► 技術スタック' })}</h3>
              <p className="skills-text">{project.skills}</p>
            </div>
          )}
          
          {project.architecture && (
            <div className="desc-section">
              <h3>{l({ ko: '► 아키텍처11', en: '► ARCHITECTURE', ja: '► アーキテクチャ' })}</h3>
              <div className="architecture-diagram">
                <div className="arch-box client-box">
                  <span>{project.architecture.client.name}</span>
                  <small>{project.architecture.client.tech}</small>
                </div>
                <div className="arch-arrow">⟷</div>
                <div className="arch-box server-box">
                  <span>{project.architecture.server.name}</span>
                  <small>{project.architecture.server.tech}</small>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {(project.status || project.year) && (
          <div className="desc-footer">
            {project.status && (
              <>
                <span className={`status-indicator ${project.status.toLowerCase().replace('_', '-')}`}></span>
                <span>{l({ ko: '상태', en: 'STATUS', ja: '状態' })}: {getStatusLabel(project.status)}</span>
              </>
            )}
            {project.year && <span className="year">{project.year}</span>}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDescription
