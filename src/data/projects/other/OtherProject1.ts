import type { ProjectData } from '../types'

export const OtherProject1: ProjectData = {
  title: {
    ko: 'SideNoteAI',
    en: 'SideNoteAI',
    ja: 'SideNoteAI'
  },
  badge: 'VS Code Extension',
  info: {
    ko: 'VS Code 사이드바에서 노트를 작성하고, AI로 텍스트를 요약해 To-do 리스트로 정리할 수 있는 확장 프로그램입니다. Markdown 작성/실시간 프리뷰와 체크박스 동기화를 지원합니다.\n\n다운로드: https://marketplace.visualstudio.com/items?itemName=nekoya.sidenoteai',
    en: 'A VS Code sidebar extension for taking notes and using AI to summarize text into a to-do list. Supports Markdown editing with live preview and real-time checkbox sync.\n\nDownload: https://marketplace.visualstudio.com/items?itemName=nekoya.sidenoteai',
    ja: 'VS Codeのサイドバーでノートを作成し、AIでテキストを要約してTo-doリストに整理できる拡張機能です。Markdownの編集/ライブプレビューとチェックボックスのリアルタイム同期に対応しています。\n\nダウンロード: https://marketplace.visualstudio.com/items?itemName=nekoya.sidenoteai'
  },
  features: [
    'TypeScript + VS Code Extension',
    {
      ko: 'Markdown 작성 및 실시간 프리뷰',
      en: 'Markdown editing with live preview',
      ja: 'Markdown編集とライブプレビュー'
    },
    {
      ko: '체크박스 상태 실시간 동기화',
      en: 'Real-time checkbox state sync',
      ja: 'チェックボックス状態のリアルタイム同期'
    },
    {
      ko: 'Gemini AI 요약으로 텍스트를 To-do 리스트로 정리',
      en: 'Gemini AI summarization into a to-do list',
      ja: 'Gemini AI要約でTo-doリスト化'
    },

  ],
  architecture: {
    client: { name: 'VS CODE', tech: 'TypeScript + VS Code Extension API + Webview' },
    server: { name: 'AI', tech: 'Gemini API' }
  },
  skills: 'TypeScript, VS Code Extension API, Webview, Gemini API',
  status: 'IN_PROGRESS',
  year: '2025~'
}
