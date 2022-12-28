import styled from 'styled-components'
import appConfig from '../../../config.json'


const Header = () => {
  return (
    <header>
      <StyledNav>
        <h2>Portfo<span>lio</span></h2>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Fale comigo</li>
        </ul>
      </StyledNav>
    </header>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 32px;
  }

  h2 span {
    color: ${appConfig.theme.colors.primary['300']};
  }
  
  background-color: ${appConfig.theme.colors.neutrals['900']};
  
  padding: 25px 0;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`

export default Header