import { createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext({
  mode: '',
  setMode: () => { console.log('') }
})


const ColorModeProvider = (props) => {

  const [mode, setMode] = useState('dark')

    useEffect(() => {
      if(localStorage['initialTheme']) {
        const initialTheme = JSON.parse(localStorage['initialTheme'])
        setMode(initialTheme)
      } else {
        setMode('dark')
      }
    }, [])

  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }} F>
      {props.children}
    </ColorModeContext.Provider >
  )

  
}

export default ColorModeProvider