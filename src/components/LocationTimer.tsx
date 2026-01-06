import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'
import './LocationTimer.css'

interface LocationTimerProps {
  location: string
  timezone: string
  gmtOffset: string
}

function LocationTimer({ 
  location, 
  timezone, 
  gmtOffset 
}: LocationTimerProps) {
  const { l } = useLanguage()
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div className="location-card">
      <div className="location-info">
        <h3>{location}</h3>
        <p>{currentTime} {gmtOffset} <span className="local-time-label">{l({ 
          ko: '현지 시간', 
          en: 'LOCAL_TIME', 
          ja: '現地時間' 
        })}</span></p>
      </div>
      <div className="map-dot"></div>
    </div>
  )
}

export default LocationTimer
