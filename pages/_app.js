import { Router, useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import ColorModeProvider, { ColorModeContext } from '../src/components/darkMode/colorModeContext'
import '../styles/globals.css'

const theme = {
  dark: {
    "primary": {
      "main": "#089B63"
    },
    "neutrals": {
      "text": "#ffffff",
      "nivel1": "#F6F5F4",
      "nivel2": "#EDEBE9",
      "nivel3": "#877c6e",
      "nivel4": "#70675c",
      "nivel5": "#5a5249",
      "nivel6": "#433d37",
      "nivel7": "#38332e",
      "nivel8": "#6c757d",
      "nivel9": "#333638",
      "nivel10": "#1f1f1f",
    }
  },
  light: {
    "primary": {
      "main": "#16F39E"
    },
    "neutrals": {
      "text": "#000000",
      "nivel10": "#ededed",
      "nivel9": "#e8e1d8",
      "nivel8": "#faf1e6",
      "nivel7": "#e3ded8",
      "nivel6": "#bfb6aa",
      "nivel5": "#b0a699",
      "nivel4": "#94897b",
      "nivel3": "#877c6e",
      "nivel2": "#2d2925",
      "nivel1": "#0d0d0d"
    }
  }
}

function ProviderWrapper(props) {
  return (
    <ColorModeProvider>
      {props.children}
    </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }) {
  const context = useContext(ColorModeContext)
  return (
    <ThemeProvider theme={theme[context.mode]}>
      < Component {...pageProps} />
    </ThemeProvider>
  )
}

export default function App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}
