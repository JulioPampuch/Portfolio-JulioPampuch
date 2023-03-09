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

  p {
    font-size: 14px;
  }
`

export default Footer
