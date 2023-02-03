import styled from "styled-components"
import appConfig from '../../../config.json'

const Main = () => {
  return (
    <StyledMain>
      <div>
        <h1 >Julio<span className="animate-charcter"> Pampuch</span></h1>
        <h3>Desenvolvedor Front-end</h3>
      </div>
      <img src="/images/home-img.png" alt="home image" />
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

  .animate-charcter
{
   /* text-transform: uppercase; */
  background-image: linear-gradient(
    -225deg,
    #C5FCE7 0%,
    #2AF4A6 29%,
    #089B63 67%,
    #64F7BF 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 3s linear infinite;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

  h1 {
    font-size: 56px;
  }

  h1 span {
    color: ${appConfig.theme.colors.primary['300']};
  }

  h3 {
    font-size: 26px;
  }

  img {
    width: 35%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0;

    h1 {
      font-size: 50px;
    }
}

@media (max-width: 767px) {
  
  padding: 0;
  flex-wrap: wrap;
  text-align: center;

  div {
    width: 100%;
  }

  h1 {
    width: 80%;
    font-size: 54px;
    border-bottom: 3px solid ${appConfig.theme.colors.primary['800']};

    padding-bottom: 10px;
    margin: 0 auto;
  }

     h3 {
      margin-top: 15px;
      width: 100%;
      font-size: 25px;
    }

    img {
      display: none;
    }
  }
`

export default Main