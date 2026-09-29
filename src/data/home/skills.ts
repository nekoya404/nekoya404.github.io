import type { SkillKey, SkillDescription } from './types'

// 스킬 목록
export const skills: SkillKey[] = ['Game Programming', 'App Programming', 'Web Programming']
export const languageSkills: SkillKey[] = ['Korean (Native)', 'Japanese (Fluent)', 'English (B1 Level)']

// 각 스킬에 대한 설명 데이터
export const skillDescriptions: Record<SkillKey, SkillDescription> = {
  'Game Programming': {
    ko: '게임 프로그래밍 - 6년이상의 경력',
    en: 'Game Programming - Over 6 years of experience',
    ja: 'ゲームプログラミング - 6年以上の経験'
  },
  'App Programming': {
    ko: '앱 프로그래밍 - 2년 이상의 경력',
    en: 'App Programming - Over 2 years of experience',
    ja: 'アプリプログラミング - 2年以上の経験'
  },
  'Web Programming': {
    ko: '웹 프로그래밍 - 1년 이상의 경력',
    en: 'Web Programming - Over 1 year of experience',
    ja: 'Webプログラミング - 1年以上の経験'
  },
  'Korean (Native)': {
    ko: `한국어는 모국어입니다.`,
    en: `Korean is my native language.`,
    ja: `韓国語は母国語です。`
  },
  'Japanese (Fluent)': {
    ko: `긴기간 일본에 거주하였습니다.
문제없이 의사소통이 가능합니다.`,
    en: `I lived in Japan for a long time.
I can communicate without any problems.`,
    ja: `長期間日本に住んでいました。
問題なくコミュニケーションができます。`
  },
  'English (B1 Level)': {
    ko: `◆ 역량
  • 기술 문서 읽기/작성
  • 이메일 커뮤니케이션
  • 기본적인 비즈니스 회화

◆ 경험
  • 영어권 개발자와의 협업
  • 영문 기술 자료 참조
  • 레딧에서 기술 커뮤니티 활동

◆ 학습
  • 지속적인 영어 실력 향상 중`,
    en: `◆ Capabilities
  • Technical Document Reading/Writing
  • Email Communication
  • Basic Business Conversation

◆ Experience
  • Collaboration with English-speaking devs
  • English Technical Reference
  • Tech Community on Reddit

◆ Learning
  • Continuously improving English skills`,
    ja: `◆ 能力
  • 技術文書の読み書き
  • メールコミュニケーション
  • 基本的なビジネス会話

◆ 経験
  • 英語圏開発者との協業
  • 英語技術資料参照
  • Redditで技術コミュニティ活動

◆ 学習
  • 継続的な英語力向上中`
  }
}
