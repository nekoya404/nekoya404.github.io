import type { ProjectData } from '../types'
import home from '../../../assets/projects/kigyoten-home.png'

export const kigyoten: ProjectData = {
  title: {
    ko: 'KIGYOTEN',
    en: 'KIGYOTEN',
    ja: 'KIGYOTEN'
  },
  badge: 'Fullstack',
  info: {
    ko: '창업을 염두에 둔 이직을 돕는 일본 채용 플랫폼입니다. 구직자는 공고를 찾고 지원하거나 캐주얼 면담을 요청할 수 있고, 기업은 공고와 지원자, 스카우트 메시지를 관리할 수 있습니다.\n\nURL: https://kigyoten.com/',
    en: 'A Japanese recruitment platform for people considering entrepreneurship as part of their career path. Job seekers can find openings, apply, or request a casual interview, while companies manage listings, applicants, and scout messages.\n\nURL: https://kigyoten.com/',
    ja: '起業を見据えた転職を支援する求人プラットフォームです。求職者は求人を探して応募したりカジュアル面談を申し込んだりでき、企業は求人・応募者・スカウトメッセージを管理できます。\n\nURL: https://kigyoten.com/'
  },
  pictures: [home],
  features: [
    {
      ko: '초기 Flutter 버전을 Next.js 웹앱으로 전환',
      en: 'Rebuilt the initial Flutter version as a Next.js web app',
      ja: '初期のFlutter版をNext.jsのWebアプリに移行'
    },
    {
      ko: '조건별 채용 공고 검색과 상세 화면',
      en: 'Job search with filters and listing details',
      ja: '条件別の求人検索と詳細画面'
    },
    {
      ko: '지원 및 캐주얼 면담 요청',
      en: 'Applications and casual interview requests',
      ja: '応募とカジュアル面談の申し込み'
    },
    {
      ko: '기업용 공고·지원자·스카우트 관리',
      en: 'Recruiter tools for listings, applicants, and scouting',
      ja: '企業向けの求人・応募者・スカウト管理'
    },
    {
      ko: '구직자와 기업 간 메시지 기능',
      en: 'Messaging between job seekers and companies',
      ja: '求職者と企業間のメッセージ機能'
    },
    {
      ko: '회원·기업·채용 현황을 살펴보는 운영 콘솔',
      en: 'Operations console for members, companies, and recruitment activity',
      ja: '会員・企業・採用状況を確認する運用コンソール'
    }
  ],
  skills: 'Next.js, React, TypeScript, Tailwind CSS, Supabase',
  status: 'IN_PROGRESS',
  year: '2026~'
}
