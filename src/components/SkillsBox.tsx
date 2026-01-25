import { useLayoutEffect, useRef, useState } from 'react'
import './SkillsBox.css'
import { useLanguage } from '../i18n'
import { skills, languageSkills, skillDescriptions, type SkillKey } from '../data/home'

function SkillsBox() {
  const { language } = useLanguage()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const [displayedSkill, setDisplayedSkill] = useState<SkillKey | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [lockedMinHeight, setLockedMinHeight] = useState<number | null>(null)
  const listHeightRef = useRef<number | null>(null)

  const getLayoutContentHeight = (el: HTMLElement) => {
    const styles = getComputedStyle(el)
    const gapRaw = styles.rowGap || styles.gap
    const gap = Number.isFinite(parseFloat(gapRaw)) ? parseFloat(gapRaw) : 0
    const children = Array.from(el.children) as HTMLElement[]
    const childrenHeight = children.reduce((sum, child) => sum + child.offsetHeight, 0)
    const gapsHeight = children.length > 1 ? gap * (children.length - 1) : 0
    return Math.ceil(childrenHeight + gapsHeight)
  }

  // 목록(초기 화면) 높이를 캐시해두면, 닫기(out) 시작 시 즉시 그 높이로 줄일 수 있다.
  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (transitionPhase === 'idle' && displayedSkill == null) {
      listHeightRef.current = Math.ceil(el.getBoundingClientRect().height)
    }
  }, [transitionPhase, displayedSkill, language])

  // 전환(out/in) 중에만 콘텐츠 높이를 잠가 레이아웃 점프를 방지하고,
  // 전환이 끝나면(idle) 높이 잠금을 해제해 자연스러운 레이아웃으로 복귀한다.
  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return

    if (transitionPhase === 'idle') {
      setLockedMinHeight(null)
      return
    }

    // out 단계에서는 애니메이션 시작(스케일 변화) 전에 현재 높이를 즉시 잠근다.
    if (transitionPhase === 'out') {
      const currentHeight = Math.ceil(el.getBoundingClientRect().height)
      const targetHeight = displayedSkill != null ? (listHeightRef.current ?? currentHeight) : currentHeight
      setLockedMinHeight(targetHeight)
      return
    }

    // in 단계에서는 transform(scale) 애니메이션이 적용되므로 getBoundingClientRect()는 왜곡된다.
    // 레이아웃 기준 높이(자식 offsetHeight 합산)로 정확히 잠근다.
    const nextHeight = getLayoutContentHeight(el)
    setLockedMinHeight(nextHeight)
  }, [transitionPhase, displayedSkill, language])

  // 스킬 선택/해제 핸들러
  const handleSkillClick = (skill: SkillKey) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setTransitionPhase('out')
    
    // Phase 1: 현재 내용 사라지는 애니메이션
    setTimeout(() => {
      setDisplayedSkill(skill)
      setTransitionPhase('in')
      
      // Phase 2: 새 내용 나타나는 애니메이션
      setTimeout(() => {
        setTransitionPhase('idle')
        setIsTransitioning(false)
      }, 300)
    }, 300)
  }

  const handleClose = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setTransitionPhase('out')
    
    setTimeout(() => {
      setDisplayedSkill(null)
      setTransitionPhase('in')
      
      setTimeout(() => {
        setTransitionPhase('idle')
        setIsTransitioning(false)
      }, 300)
    }, 300)
  }

  // 현재 표시할 타이틀
  const currentTitle = displayedSkill ? `[ ${displayedSkill} ]` : '[ SKILLS ]'

  return (
    <div className="skills-card">
      <div 
        className={`skills-title ${transitionPhase === 'out' ? 'out' : transitionPhase === 'in' ? 'in' : ''}`}
      >
        {currentTitle}
        {displayedSkill && (
          <button 
            className="skills-close-btn" 
            onClick={handleClose}
            aria-label="Close"
          >
            [X]
          </button>
        )}
      </div>
      
      <div
        ref={contentRef}
        className={`skills-content ${transitionPhase}`}
        style={lockedMinHeight != null ? { minHeight: `${lockedMinHeight}px` } : undefined}
      >
        {!displayedSkill ? (
          // 스킬 목록 보기
          <>
            <div className="skills-tags" aria-label="Skills">
              {skills.map((skill) => (
                <button 
                  key={skill} 
                  className="btn btn-large btn-block btn-primary"
                  type="button"
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>

            <div className="skills-tags" aria-label="Languages">
              {languageSkills.map((lang) => (
                <button 
                  key={lang} 
                  className="btn btn-large btn-block btn-primary"
                  type="button"
                  onClick={() => handleSkillClick(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </>
        ) : (
          // 스킬 상세 설명 보기
          <div className="skill-detail">
            <pre className="skill-description">
              {skillDescriptions[displayedSkill][language]}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillsBox
