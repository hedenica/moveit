import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';
import clsx from 'clsx'

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)
  const { theme } = useContext(ThemeContext)

  function handleCallbackSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={clsx(
      styles.challengeBoxContainer,
      theme === 'light-mode'
      ? styles.lightMode
      : styles.darkMode
    )}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong className={clsx(
              theme === 'dark-mode' && styles.darkMode
            )}>
              Novo desafio
            </strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleCallbackSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber um desafio
          </strong>
          <div>
            <img src="icons/level-up.svg" alt="Level up"/>
            <p> Avance de level completando desafios</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChallengeBox