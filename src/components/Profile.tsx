import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/hedenica.png" alt="Hedênica Morais"/>
      <div>
        <strong>Hedênica Morais</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Nível {level}
        </p>
      </div>
    </div>
  )
}

export default Profile