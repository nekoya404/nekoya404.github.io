import type { ProjectData } from '../types'
import eightGatu1 from '../../../assets/projects/8gatu.png'
import eightGatu2 from '../../../assets/projects/8gatu2.jpg'

export const hachinai: ProjectData = {
  title: {
    ko: '8월의 신데렐라나인',
    en: 'August Cinderella Nine',
    ja: '8月のシンデレラナイン'
  },
  genre: '2D Card Social Game',
  platform: 'iOS, Android',
  badge: 'Frontend',
  info: {
    ko: '아카츠키에서 8월의 신데렐라나인 개발에 참여했습니다.',
    en: 'Worked on August Cinderella Nine at Akatsuki.',
    ja: 'Akatsukiで8月のシンデレラナインの開発に携わりました。'
  },
  pictures: [
    eightGatu1,
    eightGatu2
  ],
  features: [],
  status: 'ENDED',
  year: '2020~2022'
}
