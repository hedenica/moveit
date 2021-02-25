import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{String(challengesCompleted).padStart(2, '0')}</span>
    </div>
  )
}

export default CompletedChallenges