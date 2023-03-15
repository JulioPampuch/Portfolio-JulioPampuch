import styled from "styled-components"
import appConfig from '../../../config.json'
import ColorModeButton from "../darkMode"
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';


const Main = () => {
  return (
    <StyledMain>
      <div className="titleDiv">
        <p className="myName">Olá, eu sou<span className="animate-charcter"> Julio</span></p>
        <h1>Desenvolvedor Front-end</h1>
        <p className="description">Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.</p>
        <div className="socialmedia">
          <div className="modeSwitcher">
            <ColorModeButton />
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/julio-pampuch/" target="_blank">
              <AiFillLinkedin size={30} />
            </a>
            <a href="https://github.com/JulioPampuch" target="_blank">
              <AiFillGithub size={30} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=41991478134&text&type=phone_number&app_absent=0" target="_blank">
              <AiOutlineWhatsApp size={30} />
            </a>
          </div>
        </div>
      </div>
      <img src="/images/home-img.png" alt="home image" />
    </StyledMain>
  )
}

const StyledMain = styled.section`
  background-color: ${({ theme }) => theme.neutrals['nivel9']};
  width: 100vw;
  height: calc(100vh - 87px);
  color: ${({ theme }) => theme.neutrals['text']};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 60px;

  .titleDiv {
    width: 45%;
    display: flex;
    flex-direction: column;
  }

  .myName {
    font-size: 38px;
    font-weight: 200;
    font-family: 'Barlow', sans-serif;
  }

  .description {
    width: 70%;
    font-size: 17px;
    margin: 10px 0;
  }


  .modeSwitcher {
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 10px;
    margin-left: 10px;
    margin-right: 30px;
  } 

  .socialmedia {
    display: flex;
    align-items: center;
    justify-content: baseline;
  }

  .icons {
    margin-top: 15px;
  }

  a {
    margin: 0 2.5px;
  }

  a:hover {
    color: ${({theme}) => theme.primary['main']};
    
  }

  .animate-charcter
{
   /* text-transform: uppercase; */
  background-image: linear-gradient(
    -225deg,
    #1ed991 0%,
    #16c783 29%,
    #07945e 67%,
    #2ae89f 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 3s linear infinite;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

  h1 {
    font-size: 48px;
  }

  h1 span {
    color: ${appConfig.colors.primary['300']};
  }

  h3 {
    font-size: 26px;
  }

  img {
    width: 35%;
  }


  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0;

    h1 {
      font-size: 50px;
    }
}

@media (max-width: 767px) {
  
  padding: 0;
  flex-wrap: wrap;
  text-align: center;

  h1 {
    width: 70%;
    font-size: 29px;
    border-bottom: 3px solid ${appConfig.colors.primary['200']};

    padding-bottom: 10px;
    margin: 0 auto;
    letter-spacing: 4px;
  }

  .titleDiv {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .modeSwitcher {
    justify-content: center;
    margin: 12.5px auto;
    padding-top: 12.5px
  }

  .myName {
    font-size: 24px;
  }

  .description {
    font-size: 14px;
    text-align: center;
  }

  .socialmedia {
    display: flex;
    gap: 40px;
  }

  a {
    margin: 0 4px;
  }

    img {
      display: none;
    }
  }
`

export default Main