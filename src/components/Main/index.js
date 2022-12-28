import styled from "styled-components"

const Main = () => {
  return (
    <StyledMain>
      <div>
        <h1>Julio Pampuch</h1>
        <h3>Desenvolvedor Front-end</h3>
      </div>
      <img src="/images/home-img.png" />
    </StyledMain>
  )
}

const StyledMain = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 45%;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 35%;
  }
`

export default Main