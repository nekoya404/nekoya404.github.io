import './ProfileCard.css'
import './SkillsBox.css'
import { useLanguage } from '../i18n'
import profileImage from '../assets/projects/nekoyaicon.jpeg'
import { profileData } from '../data/home'

export const PROFILE_IMAGE_URL = profileImage

function ProfileCard() {
  const { language } = useLanguage()

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
          <p className="description">{profileData.description[language]}</p>

          <div className="skills-strengths" aria-label={profileData.strengthsTitle[language]}>
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
