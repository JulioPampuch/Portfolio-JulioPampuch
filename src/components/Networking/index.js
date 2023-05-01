import appConfig from '../../../config.json'
import styled from "styled-components"
import Title from "../Title"
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsCheck2 } from 'react-icons/bs';

const Networking = () => {
  return (
    <>
      <NetworkingStyled id="networking">
        <Title title="Networking" />
        <p className='description'>Essas são minhas redes sociais, onde você pode conversar diretamente comigo.</p>
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/julio-pampuch/" target="_blank">
            <AiFillLinkedin size={30} className="icon" />
            <p>Linkedin</p>
            <BsCheck2 size={20}/>
          </a>
          <a href="https://github.com/JulioPampuch" target="_blank">
            <AiFillGithub size={30} className="icon" />
            <p>Github</p>
            <BsCheck2 size={20}/>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=41991478134&text&type=phone_number&app_absent=0" target="_blank">
            <AiOutlineWhatsApp size={30} className="icon" />
            <p>Whatsapp</p>
            <BsCheck2 size={20}/>
          </a>
        </div>
      </NetworkingStyled>
    </>
  )
}

const NetworkingStyled = styled.section`
  background-color: ${({ theme }) => theme.neutrals['nivel10']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 110px 0;
  color: ${({ theme }) => theme.neutrals['text']};

  h2 {
    text-transform: none;
    font-size: 36px;
    margin-bottom: 10px;
  }

  .description {
    text-align: center;
  }

  .socialMedia {
    display: flex;
    gap: 15px;
    margin-top: 50px;
  }

  .socialMedia a {
    width: 225px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12.5px;

    border: 2px solid ${({ theme }) => theme.neutrals['nivel9']};
    border-radius: 5px;

    transition: 0.25s;
  }

  .socialMedia a p {
    font-size: 18px;
  }

  .socialMedia a:hover {
    scale: 1.03;
    border-top: 2px solid ${appConfig.colors.primary['200']};
  }

  .icon {
    color: ${({ theme }) => theme.primary['main']};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .socialMedia a {
      width: 190px;
    }
  }

  @media (max-width: 767px) {

    h2 {
      font-size: 28px;
    }

    .description {
      width: 75%;
    }

    .socialMedia {
      flex-direction: column;
    }

    .socialMedia a {
      width: 250px;
    }
  }

`

export default Networking