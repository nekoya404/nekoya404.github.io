import type { ProjectData } from '../types'

export const AppProject1: ProjectData = {
  title: {
    ko: 'UNIQUIZ',
    en: 'UNIQUIZ',
    ja: 'UNIQUIZ'
  },
  badge: 'Cross-Platform',
  info: {
    ko: 'Unity 개발자를 위한 퀴즈 플랫폼입니다. 다양한 Unity 주제의 퀴즈를 풀고, 틀린 문제 복습 기능을 제공합니다. 광고를 통한 수익을 창출하는 B2C 앱입니다.\n\niOS 다운로드: https://apps.apple.com/jp/app/uniquiz-unity-quiz/id6754654962',
    en: 'A quiz platform for Unity developers. Solve quizzes on various Unity topics and review the questions you got wrong. A B2C app monetized through ads.\n\niOS download: https://apps.apple.com/jp/app/uniquiz-unity-quiz/id6754654962',
    ja: 'Unity開発者向けのクイズプラットフォームです。さまざまなUnityトピックのクイズに挑戦し、間違えた問題を復習できます。広告によって収益化するB2Cアプリです。\n\niOSダウンロード: https://apps.apple.com/jp/app/uniquiz-unity-quiz/id6754654962'
  },
  features: [
    {
      ko: '레벨/경험치 시스템 및 퀴즈 타입별 통계',
      en: 'Level/experience system and per-category quiz stats',
      ja: 'レベル/経験値システムとカテゴリ別統計'
    },
    {
      ko: '퀴즈 및 실력 테스트 기능',
      en: 'Quiz and skill test feature',
      ja: 'クイズと実力テスト機能'
    },
    {
      ko: '틀린 문제 복습 및 해설(마크다운)',
      en: 'Wrong-answer review with explanations (Markdown)',
      ja: '間違えた問題の復習と解説（Markdown）'
    },
    {
      ko: '다국어 지원 (ko/en/ja)',
      en: 'Multilingual UI (ko/en/ja)',
      ja: '多言語対応（ko/en/ja）'
    },
    {
      ko: 'Riverpod 기반 상태 관리 + MVVM 패턴',
      en: 'Riverpod-based state management + MVVM pattern',
      ja: 'Riverpodによる状態管理 + MVVMパターン'
    }
  ],
  architecture: {
    client: { name: 'FRONTEND', tech: 'Flutter (Web) + Riverpod + MVVM + GoRouter' },
    server: { name: 'BACKEND', tech: 'Firebase' }
  },
  status: 'IN_PROGRESS',
  year: '2025~'
}
