import type { ProfileData } from './types'

export const profileData: ProfileData = {
  name: 'Nekoya404',
  username: 'C:\\USER>',
  workStartDate: new Date(2020, 7, 1), // 2020년 8월 (월은 0부터 시작)
  description: {
    ko: '게임 개발을 오랜기간 해왔으며 AINative와 AI개발환경에 대해 큰 관심을 가지고 있습니다.\n\n웹, 앱, 게임의 장르를 구분하지 않고 개발합니다.',
    en: "I've spent many years developing games and have a strong interest in AI Native and AI development environments.\n\nI develop for the web, apps, and games without drawing lines between them.",
    ja: '長年ゲーム開発に携わり、AI NativeとAI開発環境に強い関心を持っています。\n\nWeb、アプリ、ゲームといったジャンルを区別せずに開発しています。'
  },
  strengthsTitle: {
    ko: '나의 생각',
    en: 'My Thoughts',
    ja: '私の考え'
  },
  strengths: [
    {
      ko: 'AINative는 근본적으로 자체툴로부터 이루어질 수 있다고 생각합니다',
      en: 'I believe AI Native can fundamentally be built from tools we create ourselves.',
      ja: 'AI Nativeは、根本的には自分たちで作るツールから実現できると考えています。'
    },
    {
      ko: '프로그래밍의 실력은 지식이 아닌 철학이라고 생각합니다.',
      en: 'I believe programming skill is a matter of philosophy rather than knowledge.',
      ja: 'プログラミングの実力は、知識ではなく哲学だと考えています。'
    },
    {
      ko: '다양한 도전을 통해 성장하고 싶습니다.',
      en: 'I want to grow through a variety of challenges.',
      ja: 'さまざまな挑戦を通じて成長したいです。'
    }
  ]
}
