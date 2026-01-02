import { useState, useEffect, useRef, useCallback, ReactNode } from 'react'
import './LoadingWrapper.css'
import { useLanguage } from '../i18n'

interface LoadingWrapperProps {
  children: ReactNode
  imagesToLoad?: string[]
  onLoadComplete?: () => void
}

function LoadingWrapper({ 
  children, 
  imagesToLoad = [], 
  onLoadComplete 
}: LoadingWrapperProps) {
  const { l } = useLanguage()
  
  // 이미지가 없으면 바로 완료 상태로 시작
  const hasImages = imagesToLoad.length > 0
  
  const [isLoading, setIsLoading] = useState(hasImages)
  const [loadedCount, setLoadedCount] = useState(0)
  const loadedSetRef = useRef(new Set<string>())
  const totalImages = imagesToLoad.length
  const progress = hasImages ? Math.round((loadedCount / totalImages) * 100) : 100

  // 이미지 로드 완료 핸들러
  const handleImageLoaded = useCallback((src: string) => {
    // 중복 호출 방지
    if (loadedSetRef.current.has(src)) return
    loadedSetRef.current.add(src)
    
    setLoadedCount(prev => {
      const newCount = prev + 1
      return newCount
    })
  }, [])

  // 모든 이미지 로드 완료 체크
  useEffect(() => {
    if (loadedCount >= totalImages && totalImages > 0) {
      // RAF를 사용해 페인팅 후 로딩 해제
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsLoading(false)
          onLoadComplete?.()
        })
      })
    }
  }, [loadedCount, totalImages, onLoadComplete])

  // 실제 이미지 프리로딩 (DOM에 숨겨진 img 요소 사용)
  useEffect(() => {
    if (!hasImages) {
      setIsLoading(false)
      onLoadComplete?.()
      return
    }

    // 이미 캐시된 이미지들은 바로 로드 완료 처리
    imagesToLoad.forEach(src => {
      const img = new Image()
      img.onload = () => handleImageLoaded(src)
      img.onerror = () => handleImageLoaded(src) // 에러도 완료로 처리
      img.src = src
      
      // 이미 캐시되어 있으면 complete가 바로 true
      if (img.complete) {
        handleImageLoaded(src)
      }
    })
  }, [hasImages, imagesToLoad, handleImageLoaded, onLoadComplete])

  return (
    <div className="loading-wrapper-container">
      {/* 로딩 오버레이 */}
      {isLoading && (
        <div className="loading-wrapper">
          <div className="loading-content">
            <div className="loading-title">► {l({ ko: '로딩중...', en: 'LOADING...', ja: '読み込み中...' })}</div>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="progress-text">{progress}%</div>
            </div>
            <div className="loading-blocks">
              {[...Array(20)].map((_, i) => (
                <span 
                  key={i} 
                  className={`block ${progress >= (i + 1) * 5 ? 'filled' : ''}`}
                >
                  ▓
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* 컨텐츠 - 항상 렌더링하되 로딩 중에는 숨김 */}
      <div 
        className={`loading-wrapper-content ${isLoading ? 'loading-hidden' : 'loading-visible'}`}
        style={{ 
          visibility: isLoading ? 'hidden' : 'visible',
          opacity: isLoading ? 0 : 1,
          position: isLoading ? 'absolute' : 'relative',
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default LoadingWrapper
