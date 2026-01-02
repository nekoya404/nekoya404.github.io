import type { ProjectCategory } from '../types'
import { WebProject1 } from './WebProject1'
import { WebProject2 } from './WebProject2'

// 웹 프로젝트들을 여기에 추가하세요
const projects = {
  WebProject1,
  WebProject2,
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
