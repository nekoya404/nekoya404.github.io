import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'

export type Language = 'ko' | 'en' | 'ja'

// 인라인 다국어 타입
type LocalizedText = string | { ko: string; en: string; ja: string }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  /** 인라인 다국어 헬퍼 - 컴포넌트에서 직접 { ko, en, ja } 형태로 사용. <strong> 태그 지원 */
  l: (text: LocalizedText) => ReactNode
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'portfolio-language'

// IP 기반 국가 감지
async function detectCountryByIP(): Promise<Language> {
  try {
    // 무료 IP 지오로케이션 API 사용
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000), // 3초 타임아웃
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch location')
    }
    
    const data = await response.json()
    const countryCode = data.country_code?.toUpperCase()
    
    // 국가 코드에 따른 언어 반환
    if (countryCode === 'JP') {
      return 'ja'
    } else if (countryCode === 'KR') {
      return 'ko'
    }
    
    return 'en' // 기본값
  } catch (error) {
    console.log('Could not detect location, using default language')
    return 'en' // 오류 시 영어 기본
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isInitialized, setIsInitialized] = useState(false)

  // 초기 언어 설정
  useEffect(() => {
    async function initializeLanguage() {
      // 1. 로컬 스토리지에서 저장된 언어 확인
      const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null
      
      if (savedLanguage && ['ko', 'en', 'ja'].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
        setIsInitialized(true)
        return
      }
      
      // 2. IP 기반 국가 감지
      const detectedLanguage = await detectCountryByIP()
      setLanguageState(detectedLanguage)
      localStorage.setItem(STORAGE_KEY, detectedLanguage)
      setIsInitialized(true)
    }
    
    initializeLanguage()
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  // 문자열에서 <strong> 태그를 파싱해서 JSX로 변환
  const parseHtmlTags = useCallback((str: string): ReactNode => {
    // <strong>...</strong> 패턴을 찾아서 분리
    const parts = str.split(/(<strong>.*?<\/strong>)/g)
    
    if (parts.length === 1) {
      return str // 태그가 없으면 그냥 문자열 반환
    }
    
    return parts.map((part, index) => {
      const strongMatch = part.match(/<strong>(.*?)<\/strong>/)
      if (strongMatch) {
        return <strong key={index}>{strongMatch[1]}</strong>
      }
      return part
    })
  }, [])

  // 인라인 다국어 헬퍼 함수
  const l = useCallback((text: LocalizedText): ReactNode => {
    if (typeof text === 'string') return parseHtmlTags(text)
    const result = text[language] || text.en || ''
    return parseHtmlTags(result)
  }, [language, parseHtmlTags])

  const value: LanguageContextType = {
    language,
    setLanguage,
    l,
  }

  // 초기화 전에는 로딩 표시 (깜빡임 방지)
  if (!isInitialized) {
    return null
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
