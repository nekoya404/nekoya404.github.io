// 날짜 관련 유틸리티 함수

/**
 * 시작일로부터 현재까지의 경력 연수 계산
 */
export function calculateYearsOfExperience(startDate: Date): number {
  const now = new Date()
  const diffTime = now.getTime() - startDate.getTime()
  return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25))
}
