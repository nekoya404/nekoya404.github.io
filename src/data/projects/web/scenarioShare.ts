import type { ProjectData } from '../types'

export const scenarioShare: ProjectData = {
  title: {
    ko: 'SCENARIO SHARE',
    en: 'SCENARIO SHARE',
    ja: 'SCENARIO SHARE'
  },
  badge: 'Fullstack',
  info: {
    ko: '시나리오와 문서를 함께 작성하기 위한 비공개 협업 위키입니다. 팀원이 같은 문서를 동시에 편집하고 변경 내용을 확인할 수 있도록 만들었습니다. 비공개 프로젝트이기 때문에 실제 문서 내용은 공개하지 않습니다.',
    en: 'A private collaborative wiki for writing scenarios and documents together. Team members can edit the same document in real time and review changes. The actual documents are not public.',
    ja: 'シナリオや文書を共同で作成するための非公開Wikiです。チームメンバーが同じ文書をリアルタイムで編集し、変更内容を確認できるようにしました。実際の文書内容は公開していません。'
  },
  features: [
    {
      ko: 'Tiptap·Yjs 기반 동시 편집과 커서 동기화',
      en: 'Collaborative editing and cursor sync with Tiptap and Yjs',
      ja: 'Tiptap・Yjsによる共同編集とカーソル同期'
    },
    {
      ko: '문서 트리와 검색·바꾸기',
      en: 'Document tree and find-and-replace',
      ja: '文書ツリーと検索・置換'
    },
    {
      ko: '버전 저장·비교, 댓글과 첨부 파일',
      en: 'Version history and comparison, comments, and attachments',
      ja: 'バージョン保存・比較、コメント、添付ファイル'
    }
  ],
  skills: 'Next.js, React, TypeScript, Supabase Realtime, Tiptap, Yjs',
  status: 'IN_PROGRESS',
  year: '2026~'
}
