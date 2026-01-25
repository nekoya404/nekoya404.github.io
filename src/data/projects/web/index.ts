import type { ProjectCategory } from '../types'
import { portfolio } from './portfolio'
// import { macrogap } from './macrogap' // 임시 비공개
import { metarmo } from './metarmo'

// 웹 프로젝트들을 여기에 추가하세요
const projects = {
  portfolio,
  // macrogap, // 임시 비공개
  metarmo,
}

export const webProjects: ProjectCategory = {
  categoryTitle: {
    ko: '웹 프로젝트',
    en: 'WEB PROJECTS',
    ja: 'ウェブプロジェクト'
  },
  menuItems: Object.keys(projects),
  projects
}
