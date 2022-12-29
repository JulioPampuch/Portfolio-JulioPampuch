import styled from "styled-components"
import appConfig from '../../../config.json'

const Footer = () => {
  return (
    <StyledFooter id="fale-comigo">
      <h5>Julio Pampuch</h5>
      <p>
        Para mais informações: 
      </p>
      <div>
        <a href="https://www.linkedin.com/in/julio-pampuch/" target="_blank"><img src="/images/linkedin.png" /></a>
        <a href="https://github.com/JulioPampuch" target="_blank"><img src="/images/github.png" /></a>
        <a href="https://wa.me/41991478134" target="_blank"><img src="/images/whats.png" /></a>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${appConfig.theme.colors.neutrals['900']};
  height: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h5 {
    font-size: 28px;
    margin: 5px 0;
  }

  p {
    font-size: 18px;
    margin-bottom: 2.5px;
  }

  img {
    width: 30px;
    margin: 0 5px;

    border-radius: 50%;
    cursor: pointer;

    transition: 0.5s;
  }

  img:hover {
    scale: 1.25;
   
  }
`

export default Footer