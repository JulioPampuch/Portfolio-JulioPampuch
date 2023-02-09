import styled from "styled-components"
import appConfig from '../../../config.json'
import { AiOutlineDownload } from 'react-icons/ai';

import { DiReact, DiCss3, DiGitBranch } from 'react-icons/di'
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb'
import { SiStyledcomponents } from 'react-icons/si'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'


const skills = [
  {
    "name": 'HTML5',
    "img": <AiFillHtml5 size={70} />
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
    "name": `Styled
            components`,
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
            <div key={skill.name} className="skill">
              <span>{skill.img}</span>
              <p className="skill-name">{skill.name}</p>
            </div>
          )
        })}
      </div>
      <a className="resume" href="/resume/Resume-Julio-Pampuch.pdf" download="Resume-Julio-Pampuch.pdf">Currículo <AiOutlineDownload /></a>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 60px;
background-color: ${({ theme }) => theme.neutrals['nivel10']};
color: ${({theme}) => theme.neutrals['text']};


  padding: 0 20px;
  padding: 60px 0;

  img {
    width: 20%;
    border-radius: 100%;
    border: 2px solid ${appConfig.colors.primary['300']};
  }

  .description {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 27.5px;
    width: 100%;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
  }

  .description p {
    font-size: 18.5px;
    text-align: center;
    line-height: 35px;
    margin: 10px 0 10px 0;
    width: 90%;
  }

  .skills {
    width: 45%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    color: ${({ theme }) => theme.neutrals['nivel2']};

    .skill {
      width: 20%;
      height: 140px;
      background-color: ${({ theme }) => theme.neutrals['nivel7']};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
      border: 2px solid ${({ theme }) => theme.neutrals['nivel9']};
      
      transition: 1.5s;
    }

    .skill-name {
        font-size: 17px;
        text-align: center;
        padding-top: 10px;
      }

    .skill:hover {
      border-color: ${({ theme }) => theme.primary['main']};
    }
  }

  .resume {
    width: 180px;
    height: 60px;

    background-color: ${({ theme }) => theme.primary['main']};
    color: ${({theme}) => theme.neutrals['text']};
    font-weight: 500;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 10px;

    border-radius: 20px;
    border: 2px solid ${appConfig.colors.primary['400']};

    cursor: pointer;
    transition: 0.5s;
  }

  .resume:hover {
    background-color: ${({ theme }) => theme.neutrals['nivel10']};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;

    img {
      margin-bottom: 30px;
      width: 35%;
    }

    h2 {
      font-size: 22.5px;
    }

    .description {
      width: 95%;
    }

    .description p {
      font-size: 20px;
    }

    .skills {
      width: 95%;

      .skill-name {
        font-size: 18px;
      }
    }

    .resume {
      font-size: 24px;
      width: 60%;

    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    img {
      width: 60%;
      margin-bottom: 30px;
    }

    h2 {
      font-size: 42px;
    }

    .description {
      width: 99%;
    }

    .description p {
      font-size: 16px;
    }

    .skills {
      width: 99%;

      .skill {
      width: 31%;
      }

      .skill-name {
        text-align: center;
        font-size: 18px;
      }
    }

    .resume {
      font-size: 19px;
      width: 60%;
      height: 60px;
    }
  }
`

export default AboutMe