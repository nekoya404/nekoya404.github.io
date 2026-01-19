import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages(Project Pages)는 기본 경로가 /<repo>/ 입니다.
  // Actions 환경에서는 GITHUB_REPOSITORY가 "owner/repo"로 제공되므로 repo명을 추출해 base를 자동 설정합니다.
  // 로컬(dev)에서는 기본 '/'로 동작합니다.
  base: (() => {
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
    // User/Org Pages(<user>.github.io)는 루트(/)에 배포됩니다.
    if (repo && repo.endsWith('.github.io')) return '/'
    // Project Pages는 /<repo>/ 아래에 배포됩니다.
    return repo ? `/${repo}/` : '/'
  })(),
  plugins: [react()],
  server: {
    port: 4000,
    host: true,
    watch: {
      usePolling: true,
    },
  },
})
