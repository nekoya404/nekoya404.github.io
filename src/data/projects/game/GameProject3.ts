import type { ProjectData } from '../types'

export const GameProject3: ProjectData = {
  title: {
    ko: 'UniFP',
    en: 'UniFP',
    ja: 'UniFP'
  },
  genre: 'Functional Programming For Unity',
  platform: 'UPM',
  badge: 'Frontend',
  info: {
    ko: 'Unity에서 GC 할당 없이 Result/Option 기반 함수형 파이프라인을 제공하는 C# 라이브러리입니다. 명시적 에러 처리와 railway-oriented 방식으로 게임 로직의 분기/예외 처리를 단순화합니다.\n\nGitHub: https://github.com/nekoya404/UniFP-Functional-Programming-for-Unity',
    en: 'A zero-allocation functional programming framework for Unity (C#). Provides Result/Option pipelines for explicit error handling and readable railway-oriented flows.\n\nGitHub: https://github.com/nekoya404/UniFP-Functional-Programming-for-Unity',
    ja: 'Unity向けのGCゼロアロケーションなC#関数型プログラミングフレームワークです。Result/Optionパイプラインにより、明示的なエラー処理とrailway-orientedなフローで分岐・例外処理を整理します。\n\nGitHub: https://github.com/nekoya404/UniFP-Functional-Programming-for-Unity'
  },
  features: [
    {
      ko: '`Result<T>` / `Option<T>` 기반의 성공/실패·널 안정성을 struct로 제공(Zero-GC 지향)',
      en: 'Struct-based `Result<T>` / `Option<T>` for explicit success/failure and null safety (zero-GC oriented)',
      ja: 'structベースの`Result<T>` / `Option<T>`で成功/失敗とNull安全性を明示(Zero-GC志向)'
    },
    {
      ko: 'Then/Map/Filter/Recover/Match 등 railway 스타일의 fluent 파이프라인 API',
      en: 'Railway-style fluent pipeline APIs (Then/Map/Filter/Recover/Match, etc.)',
      ja: 'Then/Map/Filter/Recover/Match などのrailwayスタイル fluent API'
    },
    {
      ko: 'UniTask 및 Unity Awaitable 기반 비동기 파이프라인 지원(ThenAsync/MapAsync/FilterAsync, TryAsync)',
      en: 'Async pipeline support for UniTask and Unity Awaitable (ThenAsync/MapAsync/FilterAsync, TryAsync)',
      ja: 'UniTask と Unity Awaitable による非同期パイプライン(ThenAsync/MapAsync/FilterAsync, TryAsync)'
    },
    {
      ko: 'Editor/디버그 환경에서 파이프라인 추적 및 진단(Trace/Breakpoint, 호출 위치 기록 등)',
      en: 'Debugging & observability in Editor/debug (Trace/Breakpoint, call-site recording, etc.)',
      ja: 'Editor/デバッグ環境でのトレースと診断(Trace/Breakpoint、呼び出し位置の記録など)'
    },
    {
      ko: 'Delegate cache/pooling/Span 확장 등 성능 유틸리티와 샘플 씬·테스트·문서 제공',
      en: 'Performance utilities (delegate cache, pooling, Span extensions) with sample scenes, tests, and docs',
      ja: 'delegate cache/pooling/Span拡張などの性能ユーティリティとサンプルシーン・テスト・ドキュメント'
    }
  ],
  skills: 'Unity, C#, UPM, UniTask',
  status: 'ONGOING',
  year: '2025~'
}
