import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter id="fale-comigo">
      <p>Julio Pampuch © 2023</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.neutrals['nivel9']};
  color: ${({theme}) => theme.neutrals['text']};
  height: 7.5vh;

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
