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
    ko: '회사 프로젝트이기 때문에 자세한 내용은 비공개합니다.',
    en: 'Details are confidential as this is a company project.',
    ja: '会社プロジェクトのため、詳細は非公開とさせていただきます。'
  },
  pictures: [
    eightGatu1,
    eightGatu2
  ],
  features: [],
  status: 'ENDED',
  year: '2020~2022'
}
