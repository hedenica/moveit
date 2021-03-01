import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ThemeContext } from '../contexts/ThemeContext';
import clsx from 'clsx'

import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  const { theme } = useContext(ThemeContext)
  
  const percentToNextLevel = Math.round(currentExperience * 100 ) / experienceToNextLevel
  
  return (
    <header className={clsx(
      styles.experienceBar,
      theme === 'dark-mode' && 
      styles.darkMode
    )}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }} >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar