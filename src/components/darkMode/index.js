import { useContext } from "react"
import styled from "styled-components"
import { ColorModeContext } from "./colorModeContext"

const DarkModeSwitch = () => {

  const context = useContext(ColorModeContext)

  return (
    <StyledSwitch>
      <input id="darkmode" type="checkbox" onChange={() => {
        if (context.mode === 'light') {
          context.setMode('dark')
        } else if (context.mode === 'dark')  {
          context.setMode('light')
        }
      }} />
      <label
        htmlFor="darkmode"
        className="darkmode-switch"
      >
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  )
}

const StyledSwitch = styled.div`
  background-color: #333333;
  position: relative;
  padding: 5px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10000px;
  
  label {
    width: 50px;
  }
  span {
    display: inline-flex;
    width: 20px;
    height: 20px; 
    align-items: center; 
    justify-content: center; 
    }
  
  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: .3s;
    cursor: pointer;
  }
  input[type="checkbox"] { display: none; }
  input[type="checkbox"]:checked + label:before { transform: translateX(100%); }
`

export default DarkModeSwitch