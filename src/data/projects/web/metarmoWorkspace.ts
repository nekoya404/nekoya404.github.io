import type { ProjectData } from '../types'
import calendar from '../../../assets/projects/metarmo-workspace-calendar.jpg'
import tasks from '../../../assets/projects/metarmo-workspace-tasks.jpg'

export const metarmoWorkspace: ProjectData = {
  title: {
    ko: 'METARMO WORKSPACE',
    en: 'METARMO WORKSPACE',
    ja: 'METARMO WORKSPACE'
  },
  badge: 'Fullstack',
  info: {
    ko: '여러 팀이 일정과 작업, 대화를 한곳에서 관리할 수 있는 워크스페이스 웹앱입니다. Google 계정으로 로그인해 워크스페이스를 만들거나 초대를 받아 참여할 수 있고, 각 팀의 데이터를 분리해 관리합니다.',
    en: 'A workspace web app where multiple teams can manage schedules, tasks, and conversations in one place. Users sign in with Google, create or join a workspace through an invitation, and keep each team’s data separate.',
    ja: '複数のチームが予定・タスク・会話を一か所で管理できるワークスペースWebアプリです。Googleアカウントでログインし、ワークスペースの作成や招待からの参加ができ、チームごとにデータを分けて管理します。'
  },
  pictures: [calendar, tasks],
  features: [
    {
      ko: '주·월간 공유 캘린더와 반복 일정, 드래그 편집',
      en: 'Shared weekly/monthly calendar with recurring events and drag editing',
      ja: '週・月表示の共有カレンダー、繰り返し予定、ドラッグ編集'
    },
    {
      ko: '검색·필터·드래그 이동을 지원하는 작업 보드',
      en: 'Task board with search, filters, and drag-and-drop',
      ja: '検索・フィルター・ドラッグ移動に対応したタスクボード'
    },
    {
      ko: '채널·DM·스레드를 지원하는 팀 채팅',
      en: 'Team chat with channels, DMs, and threads',
      ja: 'チャンネル・DM・スレッドに対応したチームチャット'
    },
    {
      ko: '협업 문서와 Supabase Realtime 동기화',
      en: 'Collaborative documents and Supabase Realtime synchronization',
      ja: '共同編集ドキュメントとSupabase Realtimeによる同期'
    }
  ],
  skills: 'Next.js, React, TypeScript, Supabase, Tiptap, Yjs',
  status: 'IN_PROGRESS',
  year: '2026~'
}
