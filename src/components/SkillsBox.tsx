import { useLayoutEffect, useRef, useState } from 'react'
import './SkillsBox.css'
import { useLanguage } from '../i18n'

type SkillKey = 'Game Programming' | 'App Programming' | 'Web Programming' | 'Korean (Native)' | 'Japanese (Fluent)' | 'English (B1 Level)'

const skills: SkillKey[] = ['Game Programming', 'App Programming', 'Web Programming']
const languageSkills: SkillKey[] = ['Korean (Native)', 'Japanese (Fluent)', 'English (B1 Level)']

// 각 스킬에 대한 설명 데이터
const skillDescriptions: Record<SkillKey, { ko: string; en: string; ja: string }> = {
  'Game Programming': {
    ko: `► 게임 개발 경력: 10년+

◆ 주요 게임 엔진
  • Unity (C#) - 전문가 수준
  • Unreal Engine (Blueprint/C++) - 중급
  • Godot (GDScript) - 중급

◆ 전문 분야
  • 2D/3D 게임 개발
  • 게임 시스템 설계 및 아키텍처
  • 멀티플레이어/네트워크 게임
  • 모바일 게임 최적화
  • 게임 AI 구현

◆ 출시 경험
  • Steam, Google Play, App Store 출시 다수
  • 상용 게임 개발 및 운영 경험`,
    en: `► Game Development: 10+ years

◆ Main Game Engines
  • Unity (C#) - Expert level
  • Unreal Engine (Blueprint/C++) - Intermediate
  • Godot (GDScript) - Intermediate

◆ Specializations
  • 2D/3D Game Development
  • Game System Design & Architecture
  • Multiplayer/Network Games
  • Mobile Game Optimization
  • Game AI Implementation

◆ Release Experience
  • Multiple releases on Steam, Google Play, App Store
  • Commercial game development & operation`,
    ja: `► ゲーム開発経験: 10年以上

◆ 主要ゲームエンジン
  • Unity (C#) - エキスパート
  • Unreal Engine (Blueprint/C++) - 中級
  • Godot (GDScript) - 中級

◆ 専門分野
  • 2D/3Dゲーム開発
  • ゲームシステム設計・アーキテクチャ
  • マルチプレイヤー/ネットワークゲーム
  • モバイルゲーム最適化
  • ゲームAI実装

◆ リリース実績
  • Steam、Google Play、App Storeに多数リリース
  • 商用ゲーム開発・運営経験`
  },
  'App Programming': {
    ko: `► 앱 개발 경력: 5년+

◆ 모바일 개발
  • React Native - 크로스플랫폼 개발
  • Flutter (Dart) - 중급
  • iOS (Swift) - 기초
  • Android (Kotlin) - 기초

◆ 데스크톱 앱
  • Electron - 크로스플랫폼 데스크톱 앱
  • Tauri (Rust) - 경량 데스크톱 앱

◆ 전문 분야
  • 사용자 경험(UX) 최적화
  • 상태 관리 및 데이터 흐름 설계
  • 오프라인 기능 구현
  • 푸시 알림 시스템`,
    en: `► App Development: 5+ years

◆ Mobile Development
  • React Native - Cross-platform development
  • Flutter (Dart) - Intermediate
  • iOS (Swift) - Basic
  • Android (Kotlin) - Basic

◆ Desktop Apps
  • Electron - Cross-platform desktop apps
  • Tauri (Rust) - Lightweight desktop apps

◆ Specializations
  • User Experience (UX) Optimization
  • State Management & Data Flow Design
  • Offline Functionality Implementation
  • Push Notification Systems`,
    ja: `► アプリ開発経験: 5年以上

◆ モバイル開発
  • React Native - クロスプラットフォーム開発
  • Flutter (Dart) - 中級
  • iOS (Swift) - 基礎
  • Android (Kotlin) - 基礎

◆ デスクトップアプリ
  • Electron - クロスプラットフォーム
  • Tauri (Rust) - 軽量デスクトップアプリ

◆ 専門分野
  • ユーザー体験(UX)最適化
  • 状態管理・データフロー設計
  • オフライン機能実装
  • プッシュ通知システム`
  },
  'Web Programming': {
    ko: `► 웹 개발 경력: 5년+

◆ 프론트엔드
  • React / TypeScript - 전문가 수준
  • Next.js - 고급
  • Vue.js - 중급
  • HTML5 / CSS3 / SASS

◆ 백엔드
  • Node.js / Express - 고급
  • Python / FastAPI - 중급
  • REST API / GraphQL 설계

◆ 데이터베이스
  • PostgreSQL, MySQL
  • MongoDB, Redis
  • Firebase / Supabase

◆ DevOps
  • Docker, AWS, Vercel
  • CI/CD 파이프라인 구축`,
    en: `► Web Development: 5+ years

◆ Frontend
  • React / TypeScript - Expert level
  • Next.js - Advanced
  • Vue.js - Intermediate
  • HTML5 / CSS3 / SASS

◆ Backend
  • Node.js / Express - Advanced
  • Python / FastAPI - Intermediate
  • REST API / GraphQL Design

◆ Databases
  • PostgreSQL, MySQL
  • MongoDB, Redis
  • Firebase / Supabase

◆ DevOps
  • Docker, AWS, Vercel
  • CI/CD Pipeline Setup`,
    ja: `► ウェブ開発経験: 5年以上

◆ フロントエンド
  • React / TypeScript - エキスパート
  • Next.js - 上級
  • Vue.js - 中級
  • HTML5 / CSS3 / SASS

◆ バックエンド
  • Node.js / Express - 上級
  • Python / FastAPI - 中級
  • REST API / GraphQL設計

◆ データベース
  • PostgreSQL, MySQL
  • MongoDB, Redis
  • Firebase / Supabase

◆ DevOps
  • Docker, AWS, Vercel
  • CI/CDパイプライン構築`
  },
  'Korean (Native)': {
    ko: `► 한국어 (모국어)

◆ 역량
  • 비즈니스 문서 작성
  • 기술 문서 작성 및 번역
  • 프레젠테이션 및 커뮤니케이션

◆ 전문 용어
  • IT/게임 개발 전문 용어 능숙
  • 기술 번역 (영→한, 일→한)`,
    en: `► Korean (Native)

◆ Capabilities
  • Business Documentation
  • Technical Writing & Translation
  • Presentation & Communication

◆ Professional Terms
  • Proficient in IT/Game Dev terminology
  • Technical Translation (EN→KO, JA→KO)`,
    ja: `► 韓国語 (母国語)

◆ 能力
  • ビジネス文書作成
  • 技術文書作成・翻訳
  • プレゼンテーション・コミュニケーション

◆ 専門用語
  • IT/ゲーム開発専門用語に精通
  • 技術翻訳 (英→韓、日→韓)`
  },
  'Japanese (Fluent)': {
    ko: `► 일본어 (유창)

◆ 자격
  • JLPT N1 보유
  • 비즈니스 일본어 가능

◆ 경험
  • 일본 현지 프로젝트 참여 경험
  • 일본어 게임/앱 로컬라이제이션
  • 일본 클라이언트와의 협업

◆ 역량
  • 기술 문서 읽기/작성
  • 미팅 및 프레젠테이션
  • 일상 및 비즈니스 회화`,
    en: `► Japanese (Fluent)

◆ Qualifications
  • JLPT N1 Certified
  • Business Japanese Capable

◆ Experience
  • Japan-based project participation
  • Game/App Localization (JP)
  • Collaboration with Japanese clients

◆ Capabilities
  • Technical Document Reading/Writing
  • Meetings & Presentations
  • Daily & Business Conversation`,
    ja: `► 日本語 (流暢)

◆ 資格
  • JLPT N1 取得
  • ビジネス日本語可能

◆ 経験
  • 日本現地プロジェクト参加経験
  • ゲーム/アプリローカライゼーション
  • 日本のクライアントとの協業

◆ 能力
  • 技術文書の読み書き
  • ミーティング・プレゼンテーション
  • 日常・ビジネス会話`
  },
  'English (B1 Level)': {
    ko: `► 영어 (B1 레벨)

◆ 역량
  • 기술 문서 읽기/작성
  • 이메일 커뮤니케이션
  • 기본적인 비즈니스 회화

◆ 경험
  • 영어권 개발자와의 협업
  • 영문 기술 자료 참조
  • 오픈소스 프로젝트 기여
  • Stack Overflow 등 기술 커뮤니티 활동

◆ 학습
  • 지속적인 영어 실력 향상 중
  • 기술 영어에 집중`,
    en: `► English (B1 Level)

◆ Capabilities
  • Technical Document Reading/Writing
  • Email Communication
  • Basic Business Conversation

◆ Experience
  • Collaboration with English-speaking devs
  • English Technical Reference
  • Open Source Project Contribution
  • Tech Community Participation (Stack Overflow)

◆ Learning
  • Continuously improving English skills
  • Focus on Technical English`,
    ja: `► 英語 (B1レベル)

◆ 能力
  • 技術文書の読み書き
  • メールコミュニケーション
  • 基本的なビジネス会話

◆ 経験
  • 英語圏開発者との協業
  • 英語技術資料参照
  • オープンソースプロジェクト貢献
  • 技術コミュニティ活動 (Stack Overflow等)

◆ 学習
  • 継続的な英語力向上中
  • 技術英語に集中`
  }
}

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
