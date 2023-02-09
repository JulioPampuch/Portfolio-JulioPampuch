import styled from "styled-components"
import appConfig from '../../../config.json'
import ColorModeButton from "../darkMode"

const Main = () => {
  return (
    <StyledMain>
      <div className="titleDiv">
        <h1>Julio<span className="animate-charcter"> Pampuch</span></h1>
        <h3>Desenvolvedor Front-end</h3>
          <div className="modeSwitcher">
            <ColorModeButton />
          </div>
      </div>
      <img src="/images/home-img.png" alt="home image" />
    </StyledMain>
  )
}

const StyledMain = styled.section`
background-color: ${({ theme }) => theme.neutrals['nivel9']};
  width: 100vw;
  height: calc(100vh - 87px);
  color: ${({ theme }) => theme.neutrals['text']};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 60px;

  .titleDiv {
    width: 45%;
    display: flex;
    flex-direction: column;
  }

  .modeSwitcher {
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 20px;
    margin-left: 10px;
  }

  .animate-charcter
{
   /* text-transform: uppercase; */
  background-image: linear-gradient(
    -225deg,
    #1ed991 0%,
    #16c783 29%,
    #07945e 67%,
    #2ae89f 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
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
    color: ${appConfig.colors.primary['300']};
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

  .titleDiv {
    width: 100%;
  }

  .modeSwitcher {
    justify-content: center;
    margin: 12.5px auto;
    padding-top: 12.5px
  }

  h1 {
    width: 80%;
    font-size: 54px;
    border-bottom: 3px solid ${appConfig.colors.primary['200']};

    padding-bottom: 10px;
    margin: 0 auto;
    letter-spacing: 7px;
  }

  span {
    letter-spacing: 1px;
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