import styled from "styled-components"
import appConfig from '../../../config.json'
import { AiOutlineDownload } from 'react-icons/ai';

import { DiReact, DiCss3, DiGitBranch, DiMongodb, DiSass } from 'react-icons/di'
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb'
import { SiStyledcomponents } from 'react-icons/si'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { RxDoubleArrowRight} from 'react-icons/rx'
import Title from "../Title";




const skills = [
  {
    "name": 'HTML5',
    "img": <AiFillHtml5 size={70} />
  },
  {
    "name": 'CSS3',
    "img": <DiCss3 size={60} />
  },

  {
    "name": 'Javascript',
    "img": <TbBrandJavascript size={60} />
  },
  {
    "name": 'Reactjs',
    "img": <DiReact size={60} />
  },
  {
    "name": 'Nextjs',
    "img": <TbBrandNextjs size={60} />
  },
  {
    "name": `Styled
            components`,
    "img": <SiStyledcomponents size={60} />
  },
  {
    "name": 'Mongodb',
    "img": <DiMongodb size={60} />
  },
  {
    "name": 'Sass',
    "img": <DiSass size={60} />
  },
  {
    "name": 'Git',
    "img": <DiGitBranch size={60} />
  },
  {
    "name": 'Github',
    "img": <AiFillGithub size={60} />
  }
]

const AboutMe = () => {
  return (
    <StyledAbout id="sobre">
      <Title title="Sobre mim"/>

      <div className="image">
        <img src="/images/julio.png" alt="profile picture" />
      </div>
      <div className="card">
        <div className="tools">
          <div className="circle">
            <span className="red box"></span>
          </div>
          <div className="circle">
            <span className="yellow box"></span>
          </div>
          <div className="circle">
            <span className="green box"></span>
          </div>
        </div>
        <div className="card__content">
        <p><span className="arrow"><RxDoubleArrowRight /></span>Sou um Desenvolvedor Front-end, cursando "Análise e Desenvolvimento de Sistemas" e desejo construir uma carreira na área da programação. Estudo desde 2021 em cursos, eventos, projetos pessoais e tenho muita vontade de aprender para me tornar um profissional reconhecido na área.</p>
        </div>
      </div>
      <div className="skills">
      <Title title="tecnologias"/>
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="skill">
              <span>{skill.img}</span>
              <p className="skill-name">{skill.name}</p>
            </div>
          )
        })}
      </div>
      <a className="resume" href="/resume/Resume-Julio-Pampuch.pdf" download="Resume-Julio-Pampuch.pdf">Currículo <AiOutlineDownload size={22} /></a>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.neutrals['nivel10']};
  color: ${({ theme }) => theme.neutrals['text']};
  padding: 60px 90px;

  .image {
    width: 21.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 90%;
    border-radius: 100%;
    border: 2px solid ${appConfig.colors.primary['300']};
  }

  .card {
    width: 40%;
    height: 270px;
    background-color: ${({ theme }) => theme.neutrals['nivel7']};
    border-radius: 8px;
    z-index: 0;
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 9px;
  }

  .circle {
    padding: 0 4px;
  }

  .box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
  }

  .card__content {
    padding: 18px;
  }

  .card__content p {
    font-size: 17.5px;
    letter-spacing: 1.25px;
    line-height: 21.5px;
  }

  .arrow {
    color: ${({ theme }) => theme.primary['main']};
    margin-right: 5px;
  }

  .red {
  background-color: #ff605c;
  }

  .yellow {
  background-color: #ffbd44;
  }

  .green {
  background-color: #00ca4e;
  }
  
  .skills {
    width: 80%;
    /* height: 10px; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 7.5px;
    color: ${({ theme }) => theme.neutrals['nivel2']};
    margin: 40px 0;
  }

  .skills h2 {
    font-size: 16px;
    margin: 0 4.8%;
    width: 95%;
    background-color: ${appConfig.colors.primary['600']};
    padding: 7px 0;
  }

  .skill {
    width: 8.5%;
    height: 110px;
    background-color: ${({ theme }) => theme.neutrals['nivel7']};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 6.5px;
    border: 2px solid ${({ theme }) => theme.neutrals['nivel9']};
      
    transition: 1.5s;
  }

  .skill-name {
      font-size: 16px;
      text-align: center;
      padding-top: 2px;
    }

  .skill:hover {
    border-color: ${({ theme }) => theme.primary['main']};
  }

  .resume {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-size: 18px;
    position: relative;
    background: ${appConfig.colors.primary['600']};
    color: #ffffff;
    
    transition: all 0.2s ease-in;
    letter-spacing: 1px;
    overflow: hidden;
    z-index: 0;
    border: 1px solid ${appConfig.colors.primary['500']};
    border-radius: 0.5em;
    
    padding: 0.7em 1.7em;
    margin: 5px 20% 0 20%;
  }

  .resume:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5,
              inset -4px -4px 12px #ffffff;
  }

  .resume:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .resume:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${appConfig.colors.primary['700']};
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .resume:hover {
    color: #ffffff;
    border: 1px solid ${appConfig.colors.primary['700']};
  }

  .resume:hover:before {
    top: -35%;
    background-color: ${appConfig.colors.primary['700']};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .resume:hover:after {
    top: -45%;
    background-color: ${appConfig.colors.primary['700']};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  @media (min-width: 1023px) and (max-width: 1239px) {
    .card {
      height: 325px;
    }

    .card__content p {
      font-size: 16.5px;
    }

    .skill {
      width: 17%;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {

    padding: 60px 30px;
    justify-content: center;
    gap: 20px;

    h2 {
      font-size: 22.5px;
    }

    .image {
      width: 30%;
    }

    .card {
    width: 60%;

  }

  .skills {
    width: 100%;
    margin: 0 auto;
    gap: 5px;
  }

  .skill {
    width: 17%;
  }

      .skill-name {
        font-size: 18px;
      }

    .resume {
      font-size: 19px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
    padding: 60px 35px;
    
    .image {
        width: 90%;
      }

    .card {
      width: 100%;
      height: 320px;
    }

    .card__content p {
    font-size: 17px;
    letter-spacing: 0.5px;
    line-height: 20px;
  }

    .skills {
      width: 90%;
    }

    .skills h2 {
      width: 100%;
      margin-bottom: 15px;
    }

    .skill {
      width: 48%;
      height: 130px;
      }

      .skill-name {
        text-align: center;
        font-size: 17.5px;
      }

    .resume {
      font-size: 18px;
    }
  }
`

export default AboutMe
