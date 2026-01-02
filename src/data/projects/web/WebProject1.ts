import type { ProjectData } from '../types'

export const WebProject1: ProjectData = {
  title: {
    ko: 'PORTFOLIO_WEBSITE',
    en: 'PORTFOLIO_WEBSITE',
    ja: 'PORTFOLIO_WEBSITE'
  },
  badge: 'Fullstack',
  info: {
    ko: 'React와 TypeScript를 활용한 개인 포트폴리오 웹사이트입니다. Spline 3D 요소와 레트로 스타일 UI를 결합하여 웹 클라이언트 기술을 공부하며 개성있는 홈페이지를 만드려고 했습니다.',
    en: 'A personal portfolio website built with React and TypeScript. While studying web client technologies, I combined Spline 3D elements with a retro style UI to create a distinctive, characterful homepage.',
    ja: 'ReactとTypeScriptを活用した個人ポートフォリオウェブサイトです。Webクライアント技術を学びながら、Splineの3D要素とレトロ風UIを組み合わせて、個性のあるホームページを目指しました。'
  },
  features: [
    'React 18 + TypeScript',
    'Spline 3D',
    'Vite',
    {
      ko: '반응형 레이아웃',
      en: 'Responsive layout',
      ja: 'レスポンシブレイアウト'
    },
    {
      ko: 'CSS 커스텀 애니메이션',
      en: 'CSS custom animations',
      ja: 'CSSカスタムアニメーション'
    }
  ],
  architecture: {
    client: { name: 'FRONTEND', tech: 'React + Vite' },
    server: { name: 'HOSTING', tech: 'Vercel' }
  },
  status: 'COMPLETED',
  year: '2026'
}
