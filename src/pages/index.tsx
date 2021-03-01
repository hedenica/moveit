import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useContext } from 'react'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { ThemeContext } from '../contexts/ThemeContext'
import clsx from 'clsx'

import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  theme: 'light-mode' | 'dark-mode';
  checked: boolean;
}

export default function Home(props: HomeProps) {
  const { theme } = useContext(ThemeContext)

  return (
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={clsx(
          theme === 'light-mode'
            ? styles.lightMode
            : styles.darkMode
        )}>
          <div className={styles.container}>
            <Head>
              <title>Inicio | Move it!</title>
            </Head>
            <ExperienceBar />

            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </div>
      </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 
    level,
    currentExperience,
    challengesCompleted,
    theme,
    checked,
  } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      theme: String(theme),
      checked: checked === 'true',
    }
  }
}