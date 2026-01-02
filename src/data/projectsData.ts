// 새로운 모듈화된 프로젝트 데이터 구조에서 re-export
// 이제 각 프로젝트는 개별 파일로 관리됩니다.
// 
// 구조:
// src/data/projects/
// ├── types.ts          - 타입 정의
// ├── index.ts          - 메인 export
// ├── game/
// │   ├── index.ts      - 게임 카테고리 통합
// │   ├── TRIBENINE.ts
// │   ├── GameProject2.ts
// │   └── GameProject3.ts
// ├── web/
// │   ├── index.ts
// │   ├── WebProject1.ts
// │   ├── WebProject2.ts
// ├── app/
// │   ├── index.ts
// │   ├── AppProject1.ts
// │   ├── AppProject2.ts
// │   └── AppProject3.ts
// └── other/
//     ├── index.ts
//     ├── OtherProject1.ts
//     ├── OtherProject2.ts
//     └── OtherProject3.ts

export {
  gameProjects,
  webProjects,
  appProjects,
  otherProjects,
  projectCategories,
  type ProjectData,
  type ProjectCategory
} from './projects'

