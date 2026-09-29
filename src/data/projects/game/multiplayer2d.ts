import type { ProjectData } from '../types'

export const multiplayer2d: ProjectData = {
  title: {
    ko: '2D MULTIPLAYER GAME',
    en: '2D MULTIPLAYER GAME',
    ja: '2D MULTIPLAYER GAME'
  },
  genre: 'Real-time Multiplayer Prototype',
  platform: 'Unity + .NET Server',
  badge: 'Fullstack',
  info: {
    ko: 'Unity 클라이언트와 .NET 서버로 만든 2인용 실시간 2D 멀티플레이어 프로토타입입니다. 이동 입력은 서버에서 처리하고, 클라이언트에는 예측과 위치 보정을 넣어 조작감을 유지하도록 구성했습니다.',
    en: 'A two-player real-time 2D multiplayer prototype with a Unity client and .NET server. The server processes movement input, while client-side prediction and reconciliation keep controls responsive.',
    ja: 'Unityクライアントと.NETサーバーで作った2人用のリアルタイム2Dマルチプレイヤープロトタイプです。移動入力はサーバーで処理し、クライアント側の予測と位置補正で操作感を保つ構成にしました。'
  },
  features: [
    {
      ko: '20Hz 서버 권위형 게임 루프',
      en: '20 Hz server-authoritative game loop',
      ja: '20Hzのサーバー権威型ゲームループ'
    },
    {
      ko: '클라이언트 예측·서버 보정·상대 플레이어 보간',
      en: 'Client prediction, server reconciliation, and remote-player interpolation',
      ja: 'クライアント予測・サーバー補正・他プレイヤーの補間'
    },
    {
      ko: 'TCP와 Protocol Buffers를 사용한 패킷 통신',
      en: 'Packet messaging over TCP with Protocol Buffers',
      ja: 'TCPとProtocol Buffersによるパケット通信'
    }
  ],
  skills: 'Unity 6, C#, .NET 10, TCP, Protocol Buffers',
  year: '2026'
}
