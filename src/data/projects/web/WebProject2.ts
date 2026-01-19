import type { ProjectData } from '../types'
import macrogap1 from '../../../assets/projects/macrogap1.png'
import macrogap2 from '../../../assets/projects/macrogap2.png'

export const WebProject2: ProjectData = {
  title: {
    ko: 'MACROGAP',
    en: 'MACROGAP',
    ja: 'MACROGAP'
  },
  genre: 'LoL Team Comp',
  badge: 'Web Service',
  info: {
    ko: '리그오브레전드 팀 조합을 더 빠르고 합리적으로 결정할 수 있도록 돕는 웹 서비스입니다.\n메타 데이터와 챔피언/스킬 정보(Data Dragon)를 활용해 포지션별 추천과 조합 분석을 제공합니다.\n\nURL: https://macrogap.com/',
    en: 'A web service that helps you decide League of Legends team compositions faster and more rationally.\nUsing meta data and champion/skill information (Data Dragon), it provides position-based recommendations and team comp analysis.\n\nURL: https://macrogap.com/',
    ja: 'リーグ・オブ・レジェンドのチーム構成をより速く、より合理的に決めるのを支援するWebサービスです。\nメタデータとチャンピオン/スキル情報（Data Dragon）を活用し、ポジション別のおすすめと構成分析を提供します。\n\nURL: https://macrogap.com/'
  },
  pictures: [macrogap1, macrogap2],
  features: [
    {
      ko: '조합 시뮬레이터',
      en: 'Team comp simulator',
      ja: '構成シミュレーター'
    },
    {
      ko: '조합 시너지 분석 및 평가',
      en: 'Synergy analysis and role balance checks',
      ja: 'シナジー分析と役割バランス確認'
    },
    {
      ko: 'Supabase 기반 커뮤니티(게시글/댓글) 기능',
      en: 'Community features (posts/comments) backed by Supabase',
      ja: 'Supabaseベースのコミュニティ（投稿/コメント）'
    },
    {
      ko: '다국어 지원 (ko/en/ja)',
      en: 'Multilingual UI (ko/en/ja)',
      ja: '多言語対応（ko/en/ja）'
    },
  ],
  architecture: {
    wrapper: 'CSR',
    client: { name: 'FRONTEND', tech: 'React 18 + TypeScript + Vite + TailwindCSS' },
    server: { name: 'BACKEND', tech: 'Supabase + Riot API' }
  },
  skills:
    'React 18, TypeScript, Vite, TailwindCSS, Supabase (Postgres/Auth/Storage/Edge Functions), Riot API',
  status: 'IN_PROGRESS',
  year: '2025~'
}
