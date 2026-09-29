import './SkillsBox.css'
import { useLanguage } from '../i18n'
import { skillExperience } from '../data/home'

function SkillsBox() {
  const { language } = useLanguage()

  return (
    <div className="skills-card">
      <div className="skills-title">[ SKILLS ]</div>
      <ul className="skills-experience">
        {skillExperience.map((item) => (
          <li key={item.ko}>{item[language]}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsBox
