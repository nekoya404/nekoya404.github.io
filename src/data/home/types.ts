import type { Language } from '../../i18n'

// 다국어 문자열 타입
export type LocalizedString = string | Record<Language, string>

// 스킬 관련 타입
export type SkillKey = 
  | 'Game Programming' 
  | 'App Programming' 
  | 'Web Programming' 
  | 'Korean (Native)' 
  | 'Japanese (Fluent)' 
  | 'English (B1 Level)'

export interface SkillDescription {
  ko: string
  en: string
  ja: string
}

// 프로필 관련 타입
export interface ProfileStrength {
  ko: string
  en: string
  ja: string
}

export interface ProfileData {
  name: string
  username: string
  workStartDate: Date
  description: {
    ko: string
    en: string
    ja: string
  }
  strengthsTitle: {
    ko: string
    en: string
    ja: string
  }
  strengths: ProfileStrength[]
}

// 테크 스택 관련 타입
export interface TechBadge {
  name: string
  badgeUrl: string
}

export interface TechStackData {
  clientStack: TechBadge[]
  serverStack: TechBadge[]
  dbStack?: TechBadge[]
}

// 소셜 링크 관련 타입
export interface SocialLink {
  name: string
  icon: string
  url: string
  color?: string
}

// 연락처 관련 타입
export interface ContactData {
  email: string
  buttonText: {
    ko: string
    en: string
    ja: string
  }
  copyTooltip: {
    ko: string
    en: string
    ja: string
  }
}

// 다국어 문자열에서 현재 언어 값 가져오기
export function getLocalizedString(value: LocalizedString, language: Language): string {
  if (typeof value === 'string') {
    return value
  }
  return value[language] || value.en || Object.values(value)[0]
}
