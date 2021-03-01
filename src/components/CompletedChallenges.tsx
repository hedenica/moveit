import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ThemeContext } from '../contexts/ThemeContext';
import clsx from 'clsx'

import styles from '../styles/components/CompletedChallenges.module.css'

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)
  const { theme } = useContext(ThemeContext)

  return (
    <div className={clsx(
      styles.completedChallengesContainer,
      theme === 'dark-mode'
      && styles.darkMode
    )}>
      <span>Desafios completos</span>
      <span>{String(challengesCompleted).padStart(2, '0')}</span>
    </div>
  )
}

export default CompletedChallenges