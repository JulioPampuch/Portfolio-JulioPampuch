import { useContext, useEffect } from "react"
import styled from "styled-components"
import { ColorModeContext } from "./colorModeContext"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import appConfig from '../../../config.json'

const ColorModeButton = () => {

  function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    }
  }

  const context = useContext(ColorModeContext)

  const changeColorMode = () => {
    if (context.mode === "light") {
      setLocalStorage('initialTheme', 'dark')
      context.setMode("dark")
    } else if (context.mode === "dark") {
      setLocalStorage('initialTheme', 'light')
      context.setMode("light")
    }
  }

  return (
    <>
      <StyledBtn>
        <input type="checkbox" className="checkbox" id="checkbox" onChange={changeColorMode} />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon"><BsFillMoonFill /></i>
          <i className='fas fa-sun'><BsFillSunFill /></i>
          <div className='ball' />
        </label>
      </StyledBtn>
    </>
  )
}

const StyledBtn = styled.div`

.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 47.5px;
  height: 23.5px;
  background-color: ${({ theme }) => theme.neutrals['nivel5']};
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 20px;
  height: 20px;
  background-color:  ${appConfig.colors.primary['100']};
  position: absolute;
  /* top: 2px; */
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball{
  transform: translateX(24px);
}

.fa-moon {
  font-size: 12.5px;
  color: pink;
  margin-left: 2px;
}

.fa-sun {
  font-size: 12.5px;
  color: yellow;
}`

export default ColorModeButton