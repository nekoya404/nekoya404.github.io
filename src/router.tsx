import { createHashRouter, Navigate } from 'react-router-dom'
import App from './App'

// URL 경로 상수
export const ROUTES = {
  PROFILE: '/',
  GAME: '/game',
  GAME_PROJECT: '/game/:projectId',
  WEB: '/web',
  WEB_PROJECT: '/web/:projectId',
  APP: '/app',
  APP_PROJECT: '/app/:projectId',
  OTHER: '/other',
  OTHER_PROJECT: '/other/:projectId',
} as const

// PageType과 경로 매핑
export const PAGE_TO_PATH: Record<string, string> = {
  profile: '/',
  game: '/game',
  web: '/web',
  app: '/app',
  other: '/other',
}

export const PATH_TO_PAGE: Record<string, string> = {
  '/': 'profile',
  '/game': 'game',
  '/web': 'web',
  '/app': 'app',
  '/other': 'other',
}

// 프로젝트 URL 생성 헬퍼
export function getProjectUrl(category: string, projectId: string): string {
  return `/${category}/${encodeURIComponent(projectId)}`
}

// 카테고리 URL 생성 헬퍼
export function getCategoryUrl(category: string): string {
  return PAGE_TO_PATH[category] || '/'
}

// HashRouter 사용 (GitHub Pages 호환)
export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/game',
    element: <App />,
  },
  {
    path: '/game/:projectId',
    element: <App />,
  },
  {
    path: '/web',
    element: <App />,
  },
  {
    path: '/web/:projectId',
    element: <App />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/app/:projectId',
    element: <App />,
  },
  {
    path: '/other',
    element: <App />,
  },
  {
    path: '/other/:projectId',
    element: <App />,
  },
  {
    // 잘못된 경로는 홈으로 리다이렉트
    path: '*',
    element: <Navigate to="/" replace />,
  },
])
