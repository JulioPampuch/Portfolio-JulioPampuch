import styled from "styled-components"
import appConfig from '../../../config.json'
import { AiOutlineDownload } from 'react-icons/ai';

const AboutMe = () => {
  return (
    <StyledAbout id="sobre">
      <img src="/images/julio.png" />
      <div>
        <h2>Sobre mim</h2>
        <p>Sou um Desenvolvedor Front-end, e desejo construir uma carreira na área da programação, tenho experiências em: HTML5, CSS3, Javascript, React, Nextjs, Tailwind CSS, Styled-components, Git e Github.</p>
        <a href="/resume/Resume-Julio-Pampuch.pdf" download="Resume-Julio-Pampuch.pdf">Currículo <AiOutlineDownload /></a>
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
    font-size: 58px;
  }

  div p {
    font-size: 22px;
    line-height: 35px;
    margin: 20px 0 40px 0;
  }

  a {
    width: 150px;
    height: 55px;

    background-color: ${appConfig.theme.colors.primary['600']};
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 10px;

    border-radius: 30px;
    border: 2px solid ${appConfig.theme.colors.primary['600']};

    cursor: pointer;
    transition: 0.5s;
  }

  a:hover {
    background-color: ${appConfig.theme.colors.neutrals['900']};
  }
`

export default AboutMe