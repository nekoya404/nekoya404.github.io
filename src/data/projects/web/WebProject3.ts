import type { ProjectData } from '../types'

export const WebProject3: ProjectData = {
  title: {
    ko: 'METARMO',
    en: 'METARMO',
    ja: 'METARMO'
  },
  badge: 'Frontend',
  info: {
    ko: 'metarmo의 웹사이트 제작의뢰를 받아 구현했습니다.\n\nURL: https://www.metarmo.com/',
    en: 'I was commissioned to build the metarmo website.\n\nURL: https://www.metarmo.com/',
    ja: 'metarmoのウェブサイト制作依頼を受けて実装しました。\n\nURL: https://www.metarmo.com/'
  },
  features: [
    {
      ko: '반응형 레이아웃',
      en: 'Responsive layout',
      ja: 'レスポンシブレイアウト'
    }
  ],
  architecture: {
    wrapper: 'CSR',
    client: { name: 'FRONTEND', tech: 'Next.js' },
    server: { name: 'HOSTING', tech: 'Vercel' }
  },
  status: 'COMPLETED',
  year: '2025'
}
