import type { ProjectCategory } from '../types'
import { OtherProject1 } from './OtherProject1'

// 기타 프로젝트들을 여기에 추가하세요
const projects = {
  OtherProject1,
}

export const otherProjects: ProjectCategory = {
  categoryTitle: {
    ko: '기타 프로젝트',
    en: 'OTHER PROJECTS',
    ja: 'その他のプロジェクト'
  },
  menuItems: Object.keys(projects),
  projects
}
