import type { ProfileData } from './types'

export const profileData: ProfileData = {
  name: 'Nekoya404',
  username: 'C:\\USER>',
  workStartDate: new Date(2020, 7, 1), // 2020년 8월 (월은 0부터 시작)
  description: {
    ko: '게임업계에서 {years}년이상의 실무 경험을 가진 풀스택 개발자입니다. \n게임외에도 앱, 웹에 걸친 다양한 분야에서 프로젝트를 수행한 경험이 있습니다.',
    en: "I'm a full-stack developer with over {years} years of hands-on experience in the game industry. \nI've also delivered projects across mobile apps and the web.",
    ja: 'ゲーム業界で{years}年以上の実務経験を持つフルスタック開発者です。 \nアプリやWebなど幅広い分野でプロジェクトを担当してきました。'
  },
  strengthsTitle: {
    ko: '좋아하는 것',
    en: 'Things I Like',
    ja: '好きなこと'
  },
  strengths: [
    {
      ko: '웹, 앱, 게임등 장르는 가리지 않아요',
      en: "I don't limit myself to any genre - web, app, game, you name it",
      ja: 'ウェブ、アプリ、ゲームなどジャンルは問いません'
    },
    {
      ko: '누군가에게 유용한 것을 만드는걸 좋아해요',
      en: 'I love creating things that are useful to others',
      ja: '誰かの役に立つものを作るのが好きです'
    },
    {
      ko: '창의적이고 도전적인 일을 좋아해요',
      en: 'I enjoy creative and challenging work',
      ja: '創造的で挑戦的な仕事が好きです'
    },
    {
      ko: '레트로한 디자인이나 키치한 디자인을 좋아해요',
      en: 'I love retro and kitsch design aesthetics',
      ja: 'レトロなデザインやキッチュなデザインが好きです'
    }
  ]
}
