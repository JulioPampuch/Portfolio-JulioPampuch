import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import styled from 'styled-components'
import appConfig from '../config.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400&family=Roboto:wght@500&display=swap" rel="stylesheet" />

        <title>Julio Pampuch</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        <Header />
        <Main />
      </StyledMain>
    </>
  )

}

const StyledMain = styled.div`
    height: 100vh;
    background-color: ${appConfig.theme.colors.neutrals['900']};
  `