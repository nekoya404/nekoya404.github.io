import type { ProjectCategory } from '../types'
import { tribenine } from './tribenine'
import { hachinai } from './hachinai'
import { unifp } from './unifp'
import { unirm } from './unirm'
import { multiplayer2d } from './multiplayer2d'
import { valkyrieConnect } from './valkyrieConnect'

// 게임 프로젝트들을 여기에 추가하세요
const projects = {
  valkyrieConnect,
  tribenine,
  hachinai,
  unifp,
  unirm,
  multiplayer2d,
}

export const gameProjects: ProjectCategory = {
  categoryTitle: {
    ko: '게임 프로젝트',
    en: 'GAME PROJECTS',
    ja: 'ゲームプロジェクト'
  },
  menuItems: Object.keys(projects),
  projects
}
