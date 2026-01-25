import type { ProjectData } from '../types'
import tribeNine1 from '../../../assets/projects/tribenine1.jpg'
import tribeNine2 from '../../../assets/projects/tribenine2.jpg'

export const tribenine: ProjectData = {
  title: {
    ko: '트라이브나인',
    en: 'TRIBE NINE',
    ja: 'トライブナイン'
  },
  genre: '3D Action RPG',
  platform: 'Steam, iOS, Android',
  badge: 'Frontend',
  info: {
    ko: '회사 프로젝트이기 때문에 자세한 내용은 비공개합니다.',
    en: 'Details are confidential as this is a company project.',
    ja: '会社プロジェクトのため、詳細は非公開とさせていただきます。'
  },
  pictures: [
    tribeNine1,
    tribeNine2
  ],
  features: [],
  status: 'ENDED',
  year: '2022~2025'
}