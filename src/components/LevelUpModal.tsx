import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ThemeContext } from '../contexts/ThemeContext';
import clsx from 'clsx'

import styles from '../styles/components/LevelUpModal.module.css'

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  const { theme } = useContext(ThemeContext)

  return (
    <div className={clsx(
      styles.overlay,
      theme === 'dark-mode'
      && styles.darkOverlay,
    )}>
      <div className={clsx(
        styles.container,
        theme === 'dark-mode'
        && styles.darkMode,
      )}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal