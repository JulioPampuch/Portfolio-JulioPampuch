import styled from 'styled-components'
import appConfig from '../../../config.json'

const Projects = () => {
  return (
    <StyledProjects id='projetos'>
      <h2>Principais projetos</h2>
      {appConfig.projects.map((project) => {
        return (
          <div className='card' key={project.name}>
            <img src={project.image} alt="project picture"/>
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            <a href={project.link} target="_blank">Ver projeto</a>
          </div>
        )
      })}
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
/* 
  :hover :not(:hover) {
    opacity: 0.8;
  } */

  background-color: ${appConfig.theme.colors.neutrals['800']};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  margin: 0 auto;
  padding: 60px 90px;

  h2 {
    width: 90%;
    font-size: 42px;
    text-align: center;
  }

  .card {
    background-color: ${appConfig.theme.colors.neutrals['900']};
    width: 23.5%;
    height: 525px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding: 35px;
    margin: 60px 0;

    border-radius: 15px;
    border: 2px solid ${appConfig.theme.colors.primary['900']};

    transition: 0.5s;
  }

  .card:hover {
    scale: 1.03;
  }

  h5 {
    font-size: 26px;
  }

  img {
    width: 90px;
    height: 90px;
    margin-top: 20px;
  }

  p {
    height: 190px;
    font-size: 18px;
    text-align: center;
    color: ${appConfig.theme.colors.neutrals['050']};
  }

  a {
    width: 60%;
    text-align: center;
    background-color: ${appConfig.theme.colors.primary['900']};

    border-radius: 15px;
    border: 1px solid ${appConfig.theme.colors.primary['800']};
    
    cursor: pointer;
    padding: 10px 0;

    transition: 0.5s;
  }

  a:hover {
    background-color: ${appConfig.theme.colors.neutrals['900']};
  }
`

export default Projects