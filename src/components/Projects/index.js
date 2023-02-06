import styled from 'styled-components'
import appConfig from '../../../config.json'

const Projects = () => {
  return (
    <StyledProjects id='projetos'>
      <h2>Principais projetos</h2>
      {appConfig.projects.map((project) => {
        return (
          <a className='card' href={project.link} target="_blank" key={project.name}>
            <img src={project.image} alt="project picture" />
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            {/* <a href={project.link} target="_blank">Ver projeto</a> */}
          </a>
        )
      })}
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
    font-size: 42px;
    text-align: center;
  }

  .card {
    background-color: ${({ theme }) => theme.neutrals['nivel10']};
    width: 23.5%;
    height: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    margin: 60px 0;

    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.neutrals['nivel6']};

    transition: 0.5s;
  }

  .card:hover {
    scale: 1.03;
  }

  h5 {
    font-size: 24px;
  }

  img {
    width: 100%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }

  p {
    height: 190px;
    font-size: 17.5px;
    text-align: center;
    color: ${({ theme }) => theme.neutrals['text']};

    margin: 0 20px;
  }

  a:hover {
    border-color: ${appConfig.colors.primary['100']};
  }

  
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    padding: 60px 0px;

    .card {
      width: 80%;
      height: 100%;

      margin: 10px;

      h5 {
        font-size: 28px;
      }

      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 60px 0;

    h2 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    .card {
      width: 85%;
      height: 465px;
      margin: 7.5px 0;
    }
    
    h5 {
      font-size: 28px;
    }

    p {
      font-size: 18px;
    }
  }
`


export default Projects