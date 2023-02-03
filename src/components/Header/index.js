import styled from 'styled-components'
import appConfig from '../../../config.json'
import SideBar from '../SidebarMobile'

const Header = () => {


  return (
    <header>
      <StyledNav>
        <h2>{'< '}Portfó<span>lio</span>{' />'}</h2>
        <ul className='list'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#sobre'>Sobre</a></li>
          <li><a href='#projetos'>Projetos</a></li>
          <li><a href='#fale-comigo'>Fale comigo</a></li>
        </ul>
        <div className='sidebar'>
          <SideBar />
        </div>
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

  .list {
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

  .sidebar {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    li a {
      font-size: 22px;
    }
}

@media (max-width: 767px) {

  justify-content: space-around;
  padding: 20px 50px;

  h2 {
    width: 100%;
    font-size: 32px;
  }

  .list {
    display: none;
  }
}

`

export default Header