import { useState, useMemo, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './ProjectDescription.css'
import './DosMenuBar.css'
import { useLanguage } from '../i18n'
import type { ProjectData, ProjectCategory, LocalizedString } from '../data/projects/types'
import { getLocalizedString } from '../data/projects/types'

// 타입 re-export (기존 코드 호환성 유지)
export type { ProjectData, ProjectCategory }

interface ProjectDescriptionProps {
  category: ProjectCategory
  initialProjectId?: string
}

const DEFAULT_SORT_ORDER: 'asc' | 'desc' = 'desc';

// 진행중 여부 확인 (끝에 ~가 있으면 진행중)
const isOngoing = (yearStr?: string): boolean => {
  if (!yearStr) return false;
  return yearStr.trim().endsWith('~');
}

// 시작 연도 파싱 (예: "2022~2025" -> 2022, "2025~" -> 2025, "2025" -> 2025)
const parseStartYear = (yearStr?: string): number => {
  if (!yearStr) return 0;
  const years = yearStr.match(/\d+/g);
  if (!years) return 0;
  return Number(years[0]); // 첫 번째 숫자 = 시작 연도
}

// 종료 연도 파싱 (예: "2022~2025" -> 2025, "2025~" -> 9999, "2025" -> 2025)
const parseEndYear = (yearStr?: string): number => {
  if (!yearStr) return 0;
  if (isOngoing(yearStr)) return 9999; // 진행중이면 무한대 취급
  const years = yearStr.match(/\d+/g);
  if (!years) return 0;
  return Math.max(...years.map(Number)); // 가장 큰 숫자 = 종료 연도
}

// 정렬용 점수 계산
// 내림차순: 진행중(시작년도 높을수록) > 완료(종료년도 높을수록)
// 오름차순: 완료(종료년도 낮을수록) > 진행중(시작년도 낮을수록)
const getSortScore = (yearStr?: string, sortOrder: 'asc' | 'desc' = 'desc'): number => {
  const ongoing = isOngoing(yearStr);
  const startYear = parseStartYear(yearStr);
  const endYear = parseEndYear(yearStr);
  
  if (sortOrder === 'desc') {
    // 내림차순: 진행중이 먼저, 그 안에서 시작년도 높은 것 먼저
    // 진행중: 10000 + 시작년도, 완료: 종료년도
    return ongoing ? 10000 + startYear : endYear;
  } else {
    // 오름차순: 완료가 먼저, 그 안에서 종료년도 낮은 것 먼저
    // 완료: 종료년도, 진행중: 10000 + 시작년도
    return ongoing ? 10000 + startYear : endYear;
  }
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

function ProjectDescription({ category, initialProjectId }: ProjectDescriptionProps) {
  const { l, language } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(DEFAULT_SORT_ORDER)
  
  // URL에서 카테고리 추출
  const categoryFromUrl = location.pathname.split('/')[1] || 'game'
  
  // 정렬된 메뉴 아이템 계산
  const sortedMenuItems = useMemo(() => {
    return [...category.menuItems].sort((a, b) => {
      const scoreA = getSortScore(category.projects[a]?.year, sortOrder);
      const scoreB = getSortScore(category.projects[b]?.year, sortOrder);
      
      if (sortOrder === 'asc') {
        return scoreA - scoreB;
      } else {
        return scoreB - scoreA;
      }
    });
  }, [category.menuItems, category.projects, sortOrder]);

  // 초기 프로젝트 결정: URL에서 제공된 projectId 또는 정렬된 첫 번째
  const getInitialProject = () => {
    // URL에서 프로젝트 ID가 제공되고 유효한 경우
    if (initialProjectId && category.projects[initialProjectId]) {
      return initialProjectId;
    }
    
    // 그렇지 않으면 정렬된 첫 번째 항목
    const initialSorted = [...category.menuItems].sort((a, b) => {
      const scoreA = getSortScore(category.projects[a]?.year, DEFAULT_SORT_ORDER);
      const scoreB = getSortScore(category.projects[b]?.year, DEFAULT_SORT_ORDER);
      
      if (DEFAULT_SORT_ORDER === 'asc') {
        return scoreA - scoreB;
      } else {
        return scoreB - scoreA;
      }
    });
    return initialSorted[0] || category.menuItems[0];
  };

  const [activeProject, setActiveProject] = useState<string>(getInitialProject)
  
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
  const project = category.projects[activeProject]

  const titleMeta = [project.genre, project.platform].filter(Boolean).join(' / ')

  // 다국어 헬퍼 함수
  const localize = (value: LocalizedString) => getLocalizedString(value, language)

  // 프로젝트 변경 시 이미지 인덱스 초기화 및 URL 업데이트
  const handleProjectChange = (item: string) => {
    setActiveProject(item)
    setActiveImageIndex(0)
    // URL 업데이트 (replace로 히스토리 쌓이지 않게)
    navigate(`/${categoryFromUrl}/${encodeURIComponent(item)}`, { replace: true })
  }

  // URL에서 프로젝트 ID가 변경되면 동기화
  useEffect(() => {
    if (initialProjectId && category.projects[initialProjectId] && initialProjectId !== activeProject) {
      setActiveProject(initialProjectId)
      setActiveImageIndex(0)
    }
  }, [initialProjectId])

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
          
          {/* 주요 구현내용 섹션 - features가 있을 때만 표시 */}
          {project.features && project.features.length > 0 && (
            <div className="desc-section">
              <h3>{l({ ko: '► 주요_구현내용', en: '► KEY_IMPLEMENTATION', ja: '► 主要実装内容' })}</h3>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}><span className="bullet">▸</span> {localize(feature)}</li>
                ))}
              </ul>
            </div>
          )}

          {project.skills && (
            <div className="desc-section">
              <h3>{l({ ko: '► 기술 스택', en: '► SKILLS', ja: '► 技術スタック' })}</h3>
              <p className="skills-text">{project.skills}</p>
            </div>
          )}
          
          {project.architecture && (
            <div className="desc-section">
              <h3>{l({ ko: '► 아키텍처', en: '► ARCHITECTURE', ja: '► アーキテクチャ' })}</h3>
              <div className="architecture-diagram">
                {project.architecture.wrapper ? (
                  <div className="arch-wrapper">
                    <div className="wrapper-label">{project.architecture.wrapper}</div>
                    <div className="wrapper-content">
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
                ) : (
                  <>
                    <div className="arch-box client-box">
                      <span>{project.architecture.client.name}</span>
                      <small>{project.architecture.client.tech}</small>
                    </div>
                    <div className="arch-arrow">⟷</div>
                    <div className="arch-box server-box">
                      <span>{project.architecture.server.name}</span>
                      <small>{project.architecture.server.tech}</small>
                    </div>
                  </>
                )}
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
