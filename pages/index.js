import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import styled from 'styled-components'
import AboutMe from '../src/components/AboutMe'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'
import Networking from '../src/components/Networking'
import { Html } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

if (typeof window !== "undefined") {

  localStorage.setItem('theme', 'dark')

}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home(props) {


  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400&family=Roboto:wght@500&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&display=swap" rel="stylesheet" />
        

        <title>Julio Pampuch</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain id='home'>
        <Header />
        <Main />
      </StyledMain>
      <AboutMe />
      <Projects />
      <Networking />
      <Footer />
    </>
  )
}

const StyledMain = styled.div`
        height: 100vh;
        background-color: ${({ theme }) => theme.neutrals['nivel9']};
        `