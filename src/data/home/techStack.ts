import type { TechStackData } from './types'

export const gameStack: TechStackData = {
  clientStack: [
    { name: 'Unity', badgeUrl: 'https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white' },
    { name: 'C#', badgeUrl: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white' },
    { name: 'R3', badgeUrl: 'https://img.shields.io/badge/R3-FF4154?style=for-the-badge&logo=reactivex&logoColor=white' },
    { name: 'MagicOnion', badgeUrl: 'https://img.shields.io/badge/MagicOnion-4DB6AC?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'MemoryPack', badgeUrl: 'https://img.shields.io/badge/MemoryPack-26A69A?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'UniTask', badgeUrl: 'https://img.shields.io/badge/UniTask-7E57C2?style=for-the-badge&logo=unity&logoColor=white' },
  ],
  serverStack: [
    { name: 'C#', badgeUrl: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white' },
    { name: '.NET', badgeUrl: 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'Protocol Buffers', badgeUrl: 'https://img.shields.io/badge/Protocol%20Buffers-4285F4?style=for-the-badge&logo=google&logoColor=white' },
    { name: 'MagicOnion', badgeUrl: 'https://img.shields.io/badge/MagicOnion-4DB6AC?style=for-the-badge&logo=dotnet&logoColor=white' },
    { name: 'Redis', badgeUrl: 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white' },
    { name: 'Supabase', badgeUrl: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
    { name: 'Firebase', badgeUrl: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
  ],
  dbStack: [
    { name: 'MySQL', badgeUrl: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'Redis', badgeUrl: 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white' },
  ]
}

export const webStack: TechStackData = {
  clientStack: [
    { name: 'React', badgeUrl: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
    { name: 'Next.js', badgeUrl: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' },
    { name: 'TypeScript', badgeUrl: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' },
    { name: 'JavaScript', badgeUrl: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { name: 'HTML', badgeUrl: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS', badgeUrl: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
  ],
  serverStack: [
    { name: 'Supabase', badgeUrl: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
    { name: 'Firebase', badgeUrl: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
  ],
  dbStack: [
    { name: 'Supabase', badgeUrl: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
    { name: 'Firebase', badgeUrl: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
  ]
}

export const appStack: TechStackData = {
  clientStack: [
    { name: 'Flutter', badgeUrl: 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white' },
    { name: 'Dart', badgeUrl: 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white' },
    { name: 'Riverpod', badgeUrl: 'https://img.shields.io/badge/Riverpod-00D8FF?style=for-the-badge&logo=flutter&logoColor=white' },
  ],
  serverStack: [
    { name: 'Supabase', badgeUrl: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
    { name: 'Firebase', badgeUrl: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
  ],
  dbStack: [
    { name: 'Supabase', badgeUrl: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
    { name: 'Firebase', badgeUrl: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
  ]
}

export const otherStack: TechStackData = {
  clientStack: [],
  serverStack: [],
  dbStack: []
}

// 기본 스택 (게임 스택을 기본값으로 사용)
export const defaultStack = gameStack
