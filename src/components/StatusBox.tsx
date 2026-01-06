import { useLanguage } from '../i18n'
import './StatusBox.css'

function StatusBox() {
  const { l } = useLanguage()

  return (
    <div className="status-card">
      <div className="status-content">
        <div className="status-lines" aria-label="Opportunities">
          <div className="status-line">
            {l({
              ko: '정규직 이직 제안을 환영합니다.',
              en: 'Open to full-time opportunities.',
              ja: '正社員転職の提案を歓迎します。'
            })}
          </div>
          <div className="status-line">
            {l({
              ko: '단기 개발 안건을 환영합니다.',
              en: 'Open to short-term development engagements.',
              ja: '短期開発案件の提案を歓迎します。'
            })}
          </div>
        </div>

        <p className="status-goal">
          {l({
            ko: '게임, 웹, 앱 등 다양한 분야에서 개성 있고 창의적인 프로덕트를 만드는 데 기여하고싶습니다.',
            en: 'I want to contribute to building distinctive, creative products across games, web, and apps.',
            ja: 'ゲーム・Web・アプリなど幅広い分野で、個性があり創造的なプロダクトづくりに貢献したいです。'
          })}
        </p>

        <div className="status-lines" aria-label="Business">
          <div className="status-line">
            {l({
              ko: '비즈니스 제안을 환영합니다.',
              en: 'Open to business proposals.',
              ja: 'ビジネス提案を歓迎します。'
            })}
          </div>
        </div>

        <p className="status-goal">
          {l({
            ko: '비즈니스 제안이라면 단기적으로는 수익이 크지않아도 도전적이고 열정있는 아이디어라면 적극적으로 개발하고 싶습니다.',
            en: "For business proposals, even if the short-term profit isn't large, I'd love to actively develop anything with a challenging, passionate idea.",
            ja: 'ビジネス提案であれば、短期的な収益が大きくなくても、挑戦的で情熱のあるアイデアなら積極的に開発したいです。'
          })}
        </p>
      </div>
    </div>
  )
}

export default StatusBox
