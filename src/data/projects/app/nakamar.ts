import type { ProjectData } from '../types'
import discover from '../../../assets/projects/nakamar-discover.png'
import chat from '../../../assets/projects/nakamar-chat.png'

export const nakamar: ProjectData = {
  title: {
    ko: 'Nakamar',
    en: 'Nakamar',
    ja: 'Nakamar'
  },
  platform: 'iOS, Android',
  badge: 'Cross-Platform',
  info: {
    ko: '창업을 함께할 동료를 찾는 매칭 앱입니다. 프로필과 아이디어를 보고 관심을 표시하고, 서로 연결되면 메시지로 대화할 수 있습니다.\n\nURL: https://nakamar.jp/\niOS 다운로드: https://apps.apple.com/app/id6747922811\nAndroid 다운로드: https://play.google.com/store/apps/details?id=rin.metarmo.com.nakamar',
    en: 'A matching app for finding people to start a business with. Users explore profiles and ideas, express interest, and chat after connecting.\n\nURL: https://nakamar.jp/\niOS download: https://apps.apple.com/app/id6747922811\nAndroid download: https://play.google.com/store/apps/details?id=rin.metarmo.com.nakamar',
    ja: '一緒に起業する仲間を探すマッチングアプリです。プロフィールやアイデアを見て興味を伝え、つながった相手とメッセージで話せます。\n\nURL: https://nakamar.jp/\niOSダウンロード: https://apps.apple.com/app/id6747922811\nAndroidダウンロード: https://play.google.com/store/apps/details?id=rin.metarmo.com.nakamar'
  },
  pictures: [discover, chat],
  features: [
    {
      ko: '아이디어와 목적을 담은 프로필 탐색 및 필터',
      en: 'Profile discovery and filters based on ideas and goals',
      ja: 'アイデアや目的を見ながら探せるプロフィールとフィルター'
    },
    {
      ko: '서로 관심을 표시하면 연결되는 매칭 기능',
      en: 'Mutual-interest matching',
      ja: 'お互いに興味を示した相手とのマッチング'
    },
    {
      ko: '매칭한 상대와의 메시지 및 푸시 알림',
      en: 'Messaging and push notifications for matches',
      ja: 'マッチングした相手とのメッセージとプッシュ通知'
    },
    {
      ko: '회원·매칭·신고 현황을 확인하는 운영 대시보드',
      en: 'Operations dashboard for members, matches, and reports',
      ja: '会員・マッチング・通報状況を確認する運用ダッシュボード'
    }
  ],
  skills: 'Flutter, Dart, Supabase, Firebase Messaging, RevenueCat',
  status: 'IN_PROGRESS',
  year: '2025~'
}
