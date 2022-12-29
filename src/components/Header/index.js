import styled from 'styled-components'
import appConfig from '../../../config.json'

const Header = () => {
  return (
    <header>
      <StyledNav>
        <h2>Portfo<span>lio</span></h2>
        <ul>
          <li><a>Home</a></li>
          <li><a>Sobre</a></li>
          <li><a>Projetos</a></li>
          <li><a>Fale comigo</a></li>
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
    gap: 60px;
  }

  li {
    font-size: 18px;
    
    list-style: none;
    cursor: pointer;
  }

  li:hover {
    color: ${appConfig.theme.colors.primary['400']};
    transition: 0.3s;
  }
`

export default Header