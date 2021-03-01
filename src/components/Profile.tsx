import Switch from 'react-switch';
import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import clsx from 'clsx';
import { ThemeContext } from '../contexts/ThemeContext'

import styles from '../styles/components/Profile.module.css'

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  const { toggleTheme, theme, checked } = useContext(ThemeContext)

  return (
    <>
      <div className={styles.themeSwitcher}>
        <Switch 
          onChange={toggleTheme}
          checked={checked}
          checkedIcon={false}
          uncheckedIcon={false}
          width={80}
          offColor="#2E3236"
          onColor="#5965DF"
        />
      </div>
    <div className={clsx(
      styles.profileContainer,
      theme === 'dark-mode'
      && styles.darkMode
    )}>
      <img src="https://github.com/hedenica.png" alt="Hedênica Morais"/>
      <div>
        <strong>Hedênica Morais</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Nível {level}
        </p>
      </div>
    </div>
    </>
  )
}

export default Profile