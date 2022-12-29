import styled from "styled-components"
import appConfig from '../../../config.json'

const AboutMe = () => {
  return (
    <StyledAbout>
      <img src="/images/julio.png" />
      <div>
        <h2>Sobre mim</h2>
        <p>Sou um Desenvolvedor Front-end, e desejo construir uma carreira na área da programação, tenho experiências em: HTML5, CSS3, Javascript, React, Nextjs, Tailwind CSS, Styled-components, Git e Github.</p>
        <button>Entre em contato</button>
      </div>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  
  padding: 60px 0;

  img {
    width: 20%;
    border-radius: 100%;
    border: 2px solid ${appConfig.theme.colors.primary['800']};
  }


  div {
    width: 50%;
  }

  div h2 {
    font-size: 52px;
  }

  div p {
    font-size: 22px;
    line-height: 35px;
    margin: 20px 0;
  }

  button {
    background-color: ${appConfig.theme.colors.primary['600']};
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;

    padding: 15px;

    border-radius: 40px;
    border: 2px solid ${appConfig.theme.colors.primary['600']};
  }

  button:hover {
    background-color: ${appConfig.theme.colors.neutrals['900']};
    transition: 0.5s;
  }
`

export default AboutMe