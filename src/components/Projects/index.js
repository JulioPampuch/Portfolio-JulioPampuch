import styled from 'styled-components'
import appConfig from '../../../config.json'

const Projects = () => {
  return (
    <StyledProjects id='projetos'>
      <h2>Projetos</h2>
      {appConfig.projects.map((project) => {
        return (
          <div href={project.linkSite} target='_blank' className='card' key={project.name}>
            <img src={project.image} alt="project picture" />
            <p className='projectName'>{project.name}</p>
            <a target="_blank" href={project.linkGithub} className='visitButton github'>Github</a>
            <a target="_blank" href={project.linkSite} className='visitButton site'>Site</a>
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
  gap: 20px;
  color: ${({ theme }) => theme.neutrals['text']};

  margin: 0 auto;
  padding: 60px 90px;

  h2 {
    width: 90%;
    font-size: 25px;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
  }

  .card {
    position: relative;
    background-color: ${({ theme }) => theme.neutrals['nivel10']};
    width: 23.5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    margin: 40px 0;

    border: 1px solid ${appConfig.colors.primary['700']}

  }

  .card:hover {

    img {
      opacity: 30%;
    }

    .visitButton {
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

  .visitButton {
    position: absolute;
    width: 80px;
    top: 50%;
    color: #000000;
    
    opacity: 0;
    text-align: center;
    font-size: 12px;
    padding: 7.5px 0;
    border-radius: 5px;

    cursor: pointer;
    transition: 0.5s;
  }

  .github {
    margin-left: 25%;
    background-color: #8d0794;
  }

  .site {
    margin-right: 25%;
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

    h2 {
      font-size: 20px;
    }

    .card {
      width: 85%;
      margin: 7.5px 0;
      border: 1px solid ${appConfig.colors.primary['700']};
    }
    
    h5 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }
  }
`

export default Projects
