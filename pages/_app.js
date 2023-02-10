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

    // Cores antigas
    // "neutrals": {
    //   "text": "#ffffff",
    //   "nivel1": "#F6F5F4",
    //   "nivel2": "#EDEBE9",
    //   "nivel3": "#877c6e",
    //   "nivel4": "#70675c",
    //   "nivel5": "#5a5249",
    //   "nivel6": "#433d37",
    //   "nivel7": "#38332e",
    //   "nivel8": "#2d2925",
    //   "nivel9": "#161412",
    //   "nivel10": "#050505",
    //   "nivel11": "#020202"
    // }
    
  },
  light: {
    "primary": {
      "main": "#16F39E"
    },
    "neutrals": {
      "text": "#000000",
      "nivel10": "#ffffff",
      "nivel9": "#e8e1d8",
      "nivel8": "#bfb6aa",
      "nivel7": "#cfc6bc",
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

