import type { Language } from '../../i18n'

// 다국어 문자열 타입
export type LocalizedString = string | Record<Language, string>

// 프로젝트 데이터 타입 정의
export interface ProjectData {
  title: LocalizedString
  genre?: string  // 선택적 필드 - 타이틀 옆에 작은 글씨로 표시되는 장르
  platform?: string // 선택적 필드 - 표시 플랫폼 (예: Steam, Android, iOS, Windows)
  badge: string
  info: LocalizedString
  pictures?: string[]  // 선택적 필드 - 사진 URL 배열
  features: LocalizedString[]
  architecture?: {
    wrapper?: string
    client: { name: string; tech: string }
    server: { name: string; tech: string }
  }
  skills?: string
  status?: string
  year?: string
}

export interface ProjectCategory {
  categoryTitle: LocalizedString
  menuItems: string[]
  projects: Record<string, ProjectData>
}

// 다국어 문자열에서 현재 언어 값 가져오기
export function getLocalizedString(value: LocalizedString, language: Language): string {
  if (typeof value === 'string') {
    return value
  }
  return value[language] || value.en || Object.values(value)[0]
}
