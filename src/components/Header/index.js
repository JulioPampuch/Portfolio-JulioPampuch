import styled from 'styled-components'
import appConfig from '../../../config.json'

const Header = () => {


  return (
    <header>
      <StyledNav>
        <h2>{'< '}Portfó<span>lio</span>{' />'}</h2>
        <h3></h3>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#sobre'>Sobre</a></li>
          <li><a href='#projetos'>Projetos</a></li>
          <li><a href='#fale-comigo'>Fale comigo</a></li>
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
    transition: 0.3s;
  }

  li:hover {
    color: ${appConfig.theme.colors.primary['400']};
  }
`

export default Header