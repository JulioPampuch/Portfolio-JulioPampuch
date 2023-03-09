import styled from 'styled-components'
import appConfig from '../../../config.json'
import Title from '../Title'

const Projects = () => {
  return (
    <StyledProjects id='projetos'>
      <Title title="Projetos" />
      {appConfig.projects.map((project) => {
        return (
          <div href={project.linkSite} target='_blank' className='card' key={project.name}>
            <img src={project.image} alt="project picture" />
            <p className='projectName'>{project.name}</p>
            <div className='buttons'>
              <a target="_blank" href={project.linkGithub} className='visitButton github'>Github</a>
              <a target="_blank" href={project.linkSite} className='visitButton site'>Site</a>
            </div>
          </div>
        )
      })}
      <a target="_blank" href="https://github.com/JulioPampuch" className="goToGithub">Visitar Github</a>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`

  background-color: ${({ theme }) => theme.neutrals['nivel9']};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 20px;
  color: ${({ theme }) => theme.neutrals['text']};

  margin: 0 auto;
  padding: 60px 90px;

  .card {
    position: relative;
    background-color: ${({ theme }) => theme.neutrals['nivel10']};
    width: 23.5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 35px;

    border: 1px solid ${appConfig.colors.primary['700']};
  }

  .card:hover {

    img {
      opacity: 30%;
    }

    .buttons {
      position: absolute;
      opacity: 100%;
    }

    .projectName {
      opacity: 100%;
    }
  }

  .projectName {
    position: absolute;
    opacity: 0;
    top: 30%;
    transition: 0.5s;
  }

  .buttons {
    position: absolute;
    top: 50%;
    opacity: 0;

    display: flex;
    align-items: center;
    gap: 10px;

    transition: 0.5s;
  }

  .visitButton {
    width: 90px;
    color: #000000;
    
    text-align: center;
    font-size: 12px;
    padding: 7.5px 0;
    border-radius: 5px;

    cursor: pointer;
    transition: 0.5s;
  }

  .github {
    background-color: #8d0794;
  }

  .site {
    background-color: ${appConfig.colors.primary['400']};
  }

  h5 {
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  img {
    width: 100%;
  }

  p {
    height: 190px;
    font-size: 17.5px;
    text-align: center;
    color: ${({ theme }) => theme.neutrals['text']};

    margin: 0 20px;
  }

  .goToGithub {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    letter-spacing: 1px;
    z-index: 0;
    color: ${({ theme }) => theme.neutrals['text']};
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    border: 1px solid ${appConfig.colors.primary['500']};

    cursor: pointer;
    transition: 0.5s;
  }

  .goToGithub:hover {
    background: ${appConfig.colors.primary['600']};
  }

  
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    padding: 60px 0px;

    .card {
      width: 80%;
      height: 100%;

      margin: 10px;

      h5 {
        font-size: 22px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 60px 0;

    .card {
      width: 85%;
      margin: 7.5px 0;
      border: 1px solid ${appConfig.colors.primary['700']};
    }

    h5 {
      font-size: 20px;
    }

    .goToGithub {
      margin-top: 40px;
    }

    p {
      font-size: 18px;
    }
  }
`

export default Projects
