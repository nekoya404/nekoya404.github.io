// 타입 export
export type { 
  LocalizedString, 
  SkillKey, 
  SkillDescription,
  ProfileStrength,
  ProfileData,
  TechBadge,
  TechStackData,
  SocialLink,
  ContactData
} from './types'

export { getLocalizedString } from './types'

// 스킬 데이터 export
export { skills, languageSkills, skillDescriptions } from './skills'

// 프로필 데이터 export
export { profileData } from './profile'

// 테크 스택 데이터 export
export { gameStack, webStack, appStack, otherStack, defaultStack } from './techStack'

// 소셜 링크 데이터 export
export { socialLinks } from './socialLinks'

// 연락처 데이터 export
export { contactData } from './contact'
