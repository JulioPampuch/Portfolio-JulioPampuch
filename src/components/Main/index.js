import styled from "styled-components"
import appConfig from '../../../config.json'

const Main = () => {
  return (
    <StyledMain>
      <div>
        <h1>Julio<span> Pampuch</span></h1>
        <h3>Desenvolvedor Front-end</h3>
      </div>
      <img src="/images/home-img.png" />
    </StyledMain>
  )
}

const StyledMain = styled.section`
  width: 100vw;
  height: calc(100vh - 87px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 60px;

  div {
    width: 45%;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 56px;
  }

  h1 span {
    color: ${appConfig.theme.colors.primary['300']};
  }

  h3 {
    font-size: 24px;
  }

  img {
    width: 35%;
  }
`

export default Main