import type { SkillKey, SkillDescription, SkillSection } from './types'
import { aiEngineeringSections } from './aiEngineering'

export const skills: SkillKey[] = ['AI Engineering', 'Game Development']
export const languageSkills: SkillKey[] = ['Korean (Native)', 'Japanese (Fluent)']

export const skillLabels: Record<SkillKey, SkillDescription> = {
  'AI Engineering': {
    ko: 'AI엔지니어링',
    en: 'AI Engineering',
    ja: 'AIエンジニアリング'
  },
  'Game Development': {
    ko: '게임개발',
    en: 'Game Development',
    ja: 'ゲーム開発'
  },
  'Korean (Native)': {
    ko: 'Korean (Native)',
    en: 'Korean (Native)',
    ja: 'Korean (Native)'
  },
  'Japanese (Fluent)': {
    ko: 'Japanese (Fluent)',
    en: 'Japanese (Fluent)',
    ja: 'Japanese (Fluent)'
  }
}

export const skillDescriptions: Record<SkillKey, SkillDescription> = {
  'AI Engineering': { ko: '', en: '', ja: '' },
  'Game Development': { ko: '', en: '', ja: '' },
  'Korean (Native)': {
    ko: '한국어는 모국어입니다.',
    en: 'Korean is my native language.',
    ja: '韓国語は母国語です。'
  },
  'Japanese (Fluent)': {
    ko: '긴기간 일본에 거주하였습니다.\n문제없이 의사소통이 가능합니다.',
    en: 'I lived in Japan for a long time.\nI can communicate without any problems.',
    ja: '長期間日本に住んでいました。\n問題なくコミュニケーションができます。'
  }
}

export const skillSections: Partial<Record<SkillKey, SkillSection[]>> = {
  'AI Engineering': aiEngineeringSections,
  'Game Development': [{
    items: [
      {
        ko: '유니티를 사용한 모바일 소셜 게임 아키텍처의 이해',
        en: 'Understanding mobile social game architecture using Unity',
        ja: 'Unityを用いたモバイルソーシャルゲームのアーキテクチャへの理解'
      },
      {
        ko: '자체 엔진에 대한 이해',
        en: 'Understanding custom game engines',
        ja: '自作ゲームエンジンへの理解'
      },
      {
        ko: '자체 엔진 개발 경험',
        en: 'Experience developing a custom game engine',
        ja: '自作ゲームエンジンの開発経験'
      },
      {
        ko: '자체 엔진을 이용한 게임 개발 경험',
        en: 'Experience developing games with a custom engine',
        ja: '自作ゲームエンジンを用いたゲーム開発経験'
      },
      {
        ko: 'AI 하네스를 자체 엔진에 결합한 자동화 경험',
        en: 'Experience automating a custom engine by integrating an AI harness',
        ja: 'AIハーネスを自作エンジンに組み込んだ自動化の経験'
      },
      {
        ko: '자체 엔진과 자체 툴을 이용한 워크플로우 구축',
        en: 'Building workflows with a custom engine and custom tools',
        ja: '自作エンジンと自作ツールを用いたワークフローの構築'
      }
    ]
  }]
}
