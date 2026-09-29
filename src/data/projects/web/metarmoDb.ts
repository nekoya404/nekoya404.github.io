import type { ProjectData } from '../types'

export const metarmoDb: ProjectData = {
  title: {
    ko: 'METARMO DB',
    en: 'METARMO DB',
    ja: 'METARMO DB'
  },
  badge: 'Fullstack',
  info: {
    ko: '일본의 공개 법인정보를 바탕으로 기업의 웹사이트와 연락처, SNS를 함께 찾아볼 수 있는 회원용 데이터베이스입니다. 수집한 정보를 정리해 회사별로 탐색할 수 있도록 만들었습니다.',
    en: 'A members-only company database built from public Japanese corporate records. It brings together company websites, contact details, and social links so members can explore the collected information by company.',
    ja: '日本の公開法人情報を基に、企業のウェブサイト・連絡先・SNSをまとめて探せる会員向けデータベースです。収集した情報を整理し、会社ごとに閲覧できるようにしました。'
  },
  features: [
    {
      ko: '회사명·지역·등록 시기별 검색과 필터',
      en: 'Search and filters by company name, area, and registration period',
      ja: '会社名・地域・登録時期による検索とフィルター'
    },
    {
      ko: '웹사이트·메일·전화·문의 폼·SNS 정보 조회',
      en: 'Company website, email, phone, contact form, and social link lookup',
      ja: 'ウェブサイト・メール・電話・問い合わせフォーム・SNSの確認'
    },
    {
      ko: '공개 원자료를 수집·정리하는 Python 데이터 파이프라인',
      en: 'Python pipeline for collecting and organizing public source data',
      ja: '公開元データを収集・整理するPythonデータパイプライン'
    },
    {
      ko: '회원 권한에 따른 정보 접근 제어',
      en: 'Member-based access control',
      ja: '会員権限に応じた情報へのアクセス制御'
    }
  ],
  skills: 'Next.js, React, TypeScript, Supabase, PostgreSQL, Python',
  status: 'IN_PROGRESS',
  year: '2026~'
}
