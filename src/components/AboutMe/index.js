import styled from "styled-components"
import appConfig from '../../../config.json'
import { AiOutlineDownload } from 'react-icons/ai';

import { DiReact, DiCss3, DiGitBranch } from 'react-icons/di'
import { ImHtmlFive2 } from 'react-icons/im'
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb'
import { SiStyledcomponents } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'

const skills = [
  {
    "name": 'HTML5',
    "img": <ImHtmlFive2 size={60} />
  },
  {
    "name": 'CSS3',
    "img": <DiCss3 size={70} />
  },

  {
    "name": 'Javascript',
    "img": <TbBrandJavascript size={70} />
  },
  {
    "name": 'Reactjs',
    "img": <DiReact size={70} />
  },
  {
    "name": 'Nextjs',
    "img": <TbBrandNextjs size={70} />
  },
  {
    "name": 'Styled-components',
    "img": <SiStyledcomponents size={70} />
  },
  {
    "name": 'Git',
    "img": <DiGitBranch size={70} />
  },
  {
    "name": 'Github',
    "img": <AiFillGithub size={70} />
  },
]

const AboutMe = () => {
  return (
    <StyledAbout id="sobre">
      <h2>Sobre mim</h2>
      <div className="description">
        <img src="/images/julio.png" alt="profile picture" />
        <p>Sou um Desenvolvedor Front-end, cursando "Análise e Desenvolvimento de Sistemas" e desejo construir uma carreira na área da programação. Estudo desde 2021 em cursos, eventos, projetos pessoais e tenho muita vontade de aprender para me tornar um profissional reconhecido na área.</p>
        <p>Tenho experiências em: HTML5, CSS3, Javascript, React, Nextjs, Tailwind CSS, Styled-components, Git e Github.</p>
      </div>
      <div className="skills">
       {skills.map((skill) => {
         return (
           <div className="skill">
            <span>{skill.img}</span>
            <p className="skill-name">{skill.name}</p>
          </div>
        )
      })}
      </div>
      <a href="/resume/Resume-Julio-Pampuch.pdf" download="Resume-Julio-Pampuch.pdf">Currículo <AiOutlineDownload /></a>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  
  padding: 60px 0;

  img {
    width: 20%;
    border-radius: 100%;
    border: 2px solid ${appConfig.theme.colors.primary['800']};
  }

  .description {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  h2 {
    font-size: 58px;
    width: 100%;
    text-align: center;
  }

  .description p {
    font-size: 18.5px;
    text-align: center;
    line-height: 35px;
    margin: 10px 0 10px 0;
    width: 90%;
  }

  a {
    width: 180px;
    height: 60px;

    background-color: ${appConfig.theme.colors.primary['600']};
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 10px;

    border-radius: 20px;
    border: 2px solid ${appConfig.theme.colors.primary['600']};

    cursor: pointer;
    transition: 0.5s;
  }

  a:hover {
    background-color: ${appConfig.theme.colors.neutrals['900']};
  }

  .skills {
    width: 45%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;


    .skill {
      width: 23.5%;
      height: 160px;
      background-color: ${appConfig.theme.colors.neutrals['800']};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
      border: 2px solid ${appConfig.theme.colors.neutrals['700']};
    }
  }
`

export default AboutMe