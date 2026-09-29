import type { ProjectData } from '../types'
import screenshot1 from '../../../assets/projects/valkyrie-connect-appstore-1.jpg'
import screenshot2 from '../../../assets/projects/valkyrie-connect-appstore-2.jpg'
import screenshot3 from '../../../assets/projects/valkyrie-connect-appstore-3.jpg'
import screenshot4 from '../../../assets/projects/valkyrie-connect-appstore-4.jpg'

export const valkyrieConnect: ProjectData = {
  title: {
    ko: '발키리 커넥트',
    en: 'VALKYRIE CONNECT',
    ja: 'ヴァルキリーコネクト'
  },
  badge: 'Game Development',
  info: {
    ko: 'Ateam Entertainment에서 발키리 커넥트 개발에 참여하고 있습니다.',
    en: 'Working on VALKYRIE CONNECT at Ateam Entertainment.',
    ja: 'Ateam Entertainmentでヴァルキリーコネクトの開発に携わっています。'
  },
  // Ateam Entertainment의 일본 App Store 등록 이미지
  pictures: [screenshot1, screenshot2, screenshot3, screenshot4],
  features: [],
  status: 'IN_PROGRESS',
  year: '2025~2026'
}
