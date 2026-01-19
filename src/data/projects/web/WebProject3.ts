import type { ProjectData } from '../types'

export const WebProject3: ProjectData = {
  title: {
    ko: 'METARMO',
    en: 'METARMO',
    ja: 'METARMO'
  },
  badge: 'Frontend',
  info: {
    ko: 'metarmo의 웹사이트 제작의뢰를 받아 구현했습니다.\n디자이너가 Figma를 통해서 디자인을 전달하고 해당 디자인을 바탕으로 구현했습니다.\n\nURL: https://www.metarmo.com/',
    en: 'I was commissioned to build the metarmo website.\nThe designer delivered the design through Figma, and I implemented it based on that design.\n\nURL: https://www.metarmo.com/',
    ja: 'metarmoのウェブサイト制作依頼を受けて実装しました。\nデザイナーがFigmaを通じてデザインを渡し、そのデザインを基に実装しました。\n\nURL: https://www.metarmo.com/'
  },
  features: [
    {
      ko: '모든 화면',
      en: 'All screens',
      ja: '全画面'
    },
    {
      ko: '반응형 레이아웃',
      en: 'Responsive layout',
      ja: 'レスポンシブレイアウト'
    },
    {
      ko: 'Framer Motion을 통한 애니메이션',
      en: 'Animations with Framer Motion',
      ja: 'Framer Motionによるアニメーション'
    },
    {
      ko: 'EmailJS를 사용한 이메일 전송',
      en: 'Email sending with EmailJS',
      ja: 'EmailJSを使用したメール送信'
    },
    {
      ko: 'next-sitemap을 사용한 SEO용 사이트맵 생성',
      en: 'SEO sitemap generation with next-sitemap',
      ja: 'next-sitemapを使用したSEO用サイトマップ生成'
    }
  ],
  architecture: {
    wrapper: 'SSG',
    client: { name: 'FRONTEND', tech: 'React + Next.js' },
    server: { name: 'HOSTING', tech: 'Vercel' }
  },
  status: 'COMPLETED',
  year: '2025'
}
