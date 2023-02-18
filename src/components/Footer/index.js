import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter id="fale-comigo">
      <div>
        <a href="https://www.linkedin.com/in/julio-pampuch/" target="_blank"><img src="/images/linkedin.png" alt="linkedin" /></a>
        <a href="https://github.com/JulioPampuch" target="_blank"><img src="/images/github.png" alt="github" /></a>
        <a href="https://wa.me/41991478134" target="_blank"><img src="/images/whats.png" alt="whatsapp" /></a>
      </div>
      <p>Copyright © Julio Pampuch</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.neutrals['nivel10']};
  color: ${({theme}) => theme.neutrals['text']};
  height: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;


  p {
    font-size: 14px;
  }

  img {
    width: 30px;
    margin: 0 7.5px;

    border-radius: 50%;
    cursor: pointer;

    transition: 0.5s;
  }

  img:hover {
    scale: 1.1;
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    
    height: 35vh;

    h6 {
      font-size: 28px;
    }

    p {
      font-size: 18px;
    }

    img {
      width: 40px;
    }
  }
`

export default Footer
