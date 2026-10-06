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
    ko: '아카츠키에서 트라이브나인 개발에 참여했습니다.',
    en: 'Worked on TRIBE NINE at Akatsuki.',
    ja: 'Akatsukiでトライブナインの開発に携わりました。'
  },
  pictures: [
    tribeNine1,
    tribeNine2
  ],
  features: [],
  status: 'ENDED',
  year: '2022~2025'
}
