import type { ProjectData } from '../types'
import tribeNine1 from '../../../assets/projects/tribenine1.jpg'
import tribeNine2 from '../../../assets/projects/tribenine2.jpg'

export const GameProject1: ProjectData = {
  title: {
    ko: '트라이브나인',
    en: 'TRIBE NINE',
    ja: 'トライブナイン'
  },
  genre: '3D Action RPG',
  platform: 'Steam, iOS, Android',
  badge: 'Frontend',
  info: {
    ko: '3D UI 아키텍쳐 기반 및 다양한 기능 구현을 했습니다.',
    en: 'Implemented various features based on a 3D UI architecture.',
    ja: '3D UIアーキテクチャを基盤に、さまざまな機能を実装しました。'
  },
  pictures: [
    tribeNine1,
    tribeNine2
  ],
  features: [
    {
      ko: '3D UI 아키텍쳐 설계',
      en: 'Designed a 3D UI architecture',
      ja: '3D UIアーキテクチャの設計'
    },
    {
      ko: 'API 네트워크 설계',
      en: 'Designed the API networking layer',
      ja: 'APIネットワークの設計'
    },
    {
      ko: '다이얼로그 시스템 구현',
      en: 'Implemented a dialog system',
      ja: 'ダイアログシステムの実装'
    },
    {
      ko: '다양한 UI 화면 구현',
      en: 'Implemented various UI screens',
      ja: '各種UI画面の実装'
    },
    {
      ko: '에디터 확장 툴 개발',
      en: 'Developed editor extension tools',
      ja: 'エディタ拡張ツールの開発'
    }
  ],
  skills: 'Unity, URP, Addressable, UniTask, DI, Protocol Buffers, MemoryPack',
  status: 'ENDED',
  year: '2021~2024'
}