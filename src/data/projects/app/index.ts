import type { ProjectCategory } from '../types'
import { uniquiz } from './uniquiz'

// 앱 프로젝트들을 여기에 추가하세요
const projects = {
  uniquiz,
}

export const appProjects: ProjectCategory = {
  categoryTitle: {
    ko: '앱 프로젝트',
    en: 'APP PROJECTS',
    ja: 'アプリプロジェクト'
  },
  menuItems: Object.keys(projects),
  projects
}
