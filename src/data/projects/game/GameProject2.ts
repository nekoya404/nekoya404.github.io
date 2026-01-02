import type { ProjectData } from '../types'
import eightGatu1 from '../../../assets/projects/8gatu.png'
import eightGatu2 from '../../../assets/projects/8gatu2.jpg'

export const GameProject2: ProjectData = {
  title: {
    ko: '8월의 신데렐라나인',
    en: 'August Cinderella Nine',
    ja: '8月のシンデレラナイン'
  },
  genre: '2D Card Social Game',
  platform: 'iOS, Android',
  badge: 'Frontend',
  info: {
    ko: '신기능 개발 및 기존의 화면을 리뉴얼하고 개선하는 작업을 담당했습니다. 에디터 확장 및 운영 이슈 대응도 수행했습니다.',
    en: 'Responsible for developing new features and renewing/improving existing screens. Also extended editor tooling and handled live-ops issues and bug fixes.',
    ja: '新機能開発および既存画面のリニューアル・改善を担当しました。あわせてエディタ拡張や運用イシュー対応、不具合修正も行いました。'
  },
  pictures: [
    eightGatu1,
    eightGatu2
  ],
  features: [
    {
      ko: 'MVRP 아키텍처 기반 UI화면 구현',
      en: 'Implemented UI screens based on an MVRP architecture',
      ja: 'MVRPアーキテクチャに基づくUI画面の実装'
    },
    {
      ko: '운영 이슈 및 버그 대응',
      en: 'Handled live-ops issues and bug fixes',
      ja: '運用イシュー対応および不具合修正'
    },
    {
      ko: '에디터 확장',
      en: 'Extended editor tooling',
      ja: 'エディタ拡張'
    }
  ],
  skills: 'Unity, AssetBundle, UniTask, UniRx',
  status: 'ENDED',
  year: '2020~2022'
}
