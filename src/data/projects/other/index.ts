import type { ProjectCategory } from '../types'
import { sidenoteai } from './sidenoteai'

// 기타 프로젝트들을 여기에 추가하세요
const projects = {
  sidenoteai,
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
