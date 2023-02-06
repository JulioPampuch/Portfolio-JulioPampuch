import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: '',
  setMode: () => { console.log('') }
})

const ColorModeProvider = (props) => {
  const [mode, setMode] = useState(props.initialMode)
  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }} F>
      {props.children}
    </ColorModeContext.Provider >
  )
}

export default ColorModeProvider