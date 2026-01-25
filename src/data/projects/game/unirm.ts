import type { ProjectData } from '../types'

export const unirm: ProjectData = {
  title: {
    ko: 'UniRM',
    en: 'UniRM',
    ja: 'UniRM'
  },
  genre: 'Template',
  platform: 'Unity + .NET Server',
  badge: 'Fullstack',
  info: {
    ko: 'Unity 클라이언트와 C# 서버를 분리한 실시간 멀티플레이어 프로젝트 템플릿입니다. MagicOnion(gRPC) 기반 통신, 클라이언트-서버 공유 패키지(Game.Shared), 더미 클라이언트를 통한 통합 테스트 흐름까지 포함해 바로 시작할 수 있는 구조를 목표로 구성했습니다. 지금은 MagicOnion을 사용했지만 차후 업데이트를 통해서는 MagicOnion을 쓰지 않는 방향으로 템플릿을 구성하려고 합니다. \n\nGitHub: https://github.com/nekoya404/Real-time-Multiplayer-Game-Template-Unity',
    en: 'A real-time multiplayer template that separates a Unity client and a C# server. It is structured to be ready-to-start with MagicOnion (gRPC) messaging, a shared client/server package (Game.Shared), and an integration-testing flow via a dummy .NET client.\n\nGitHub: https://github.com/nekoya404/Real-time-Multiplayer-Game-Template-Unity',
    ja: 'UnityクライアントとC#サーバーを分離したリアルタイムマルチプレイヤーのテンプレートです。MagicOnion(gRPC)による通信、クライアント/サーバー共有パッケージ(Game.Shared)、ダミークライアントによる統合テスト導線を含み、すぐに開発を始められる構成を目指しました。\n\nGitHub: https://github.com/nekoya404/Real-time-Multiplayer-Game-Template-Unity'
  },
  features: [
    {
      ko: 'Unity 클라이언트(`Game.Unity`) + ASP.NET Core gRPC 서버(`Game.Server`)로 역할을 분리한 기본 골격',
      en: 'Base structure with a Unity client (`Game.Unity`) and an ASP.NET Core gRPC server (`Game.Server`)',
      ja: 'Unityクライアント(`Game.Unity`)とASP.NET Core gRPCサーバー(`Game.Server`)に分離した基本構成'
    },
    {
      ko: '클라이언트-서버 공유 코드(`Game.Shared`)를 Unity Local Package로 연동해 메시지/DTO 중복을 최소화',
      en: 'Shared client/server code (`Game.Shared`) integrated as a Unity Local Package to minimize message/DTO duplication',
      ja: 'クライアント/サーバー共有コード(`Game.Shared`)をUnityのローカルパッケージとして連携し、メッセージ/DTOの重複を最小化'
    },
    {
      ko: 'MagicOnion 기반 RPC 설계로 실시간 통신 레이어를 단순화하고 확장 가능한 인터페이스 형태로 정리',
      en: 'MagicOnion-based RPC design for a clean and extensible real-time networking layer',
      ja: 'MagicOnionベースのRPC設計で、リアルタイム通信レイヤーをシンプルかつ拡張可能に整理'
    },
    {
      ko: '테스트용 `DummyClient`를 포함해 서버 단독 검증/부하 실험 등 자동화 가능한 테스트 경로 제공',
      en: 'Includes a `DummyClient` to enable server-only validation and automation-friendly load/testing flows',
      ja: 'テスト用`DummyClient`を含み、サーバー単体検証や負荷実験など自動化しやすいテスト導線を提供'
    },
    {
      ko: 'MemoryPack/UniTask 등 패키지 조합으로 직렬화 및 비동기 흐름을 실전 지향으로 구성',
      en: 'Practical setup with packages like MemoryPack and UniTask for serialization and async flows',
      ja: 'MemoryPack/UniTask などのパッケージ構成で、シリアライズと非同期フローを実戦向けに整備'
    },
    {
      ko: '`.editorconfig` 및 빌드 시 스타일 검사로 C# 코딩 컨벤션을 일관되게 유지',
      en: 'Consistent C# coding conventions enforced via `.editorconfig` and build-time style checks',
      ja: '`.editorconfig` とビルド時スタイルチェックでC#コーディング規約を一貫して維持'
    }
  ],
  architecture: {
    client: {
      name: 'Unity Client',
      tech: 'Unity, C#, MagicOnion Client, UniTask'
    },
    server: {
      name: 'C# Server',
      tech: 'ASP.NET Core, gRPC, MagicOnion, .NET'
    }
  },
  skills: 'Unity, C#, ASP.NET Core, gRPC, MagicOnion, MemoryPack, UniTask',
  status: 'ONGOING',
  year: '2025~'
}
