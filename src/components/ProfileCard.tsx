import { useMemo } from 'react'
import './ProfileCard.css'
import './SkillsBox.css'
import { useLanguage } from '../i18n'
import profileImage from '../assets/projects/nekoyaicon.jpeg'
import { profileData } from '../data/home'
import { calculateYearsOfExperience } from '../utils/date'

export const PROFILE_IMAGE_URL = profileImage

function ProfileCard() {
  const { language } = useLanguage()

  // 경력 연수 계산
  const yearsOfExperience = useMemo(() => {
    return calculateYearsOfExperience(profileData.workStartDate)
  }, [])

  // 설명 텍스트에서 {years} 치환
  const getDescription = () => {
    const desc = profileData.description[language]
    return desc.replace('{years}', String(yearsOfExperience))
  }

  return (
    <div className="profile-card">
        <div className="profile-image-container">
          <div className="profile-image">
            <img 
              src={PROFILE_IMAGE_URL}
              alt="Profile" 
            />
          </div>
          <span className="username">{profileData.username}</span>
        </div>
        
        <div className="profile-content">
          <h2 className="name"><span className="highlight">{profileData.name}</span></h2>
          <p 
            className="description"
            dangerouslySetInnerHTML={{ __html: getDescription() }}
          />

          <div className="skills-strengths" aria-label="Things I Like">
            <div className="skills-strengths-title">
              {profileData.strengthsTitle[language]}
            </div>
            <ul className="skills-strengths-body">
              {profileData.strengths.map((strength, index) => (
                <li key={index}>
                  {strength[language]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default ProfileCard
