import styled from 'styled-components'
import appConfig from '../../../config.json'
import DarkModeSwitch from '../darkMode'
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
          {/* <div className='colorSwitch'>
            <DarkModeSwitch />
          </div> */}
        </ul>
        <div className='sidebar'>
          <SideBar />
        </div>
      </StyledNav>
    </header>
  )
}

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.neutrals['nivel10']};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0;
  color: ${({ theme }) => theme.neutrals['text']};


  h2 {
    font-size: 32px;
  }

  h2 span {
    color: ${appConfig.colors.primary['300']}
  }
  
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
    color: ${appConfig.colors.primary['400']};
  }

  .colorSwitch {
    position: absolute;
    right: 50px;
  }

  .sidebar {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    li a {
      font-size: 22px;
    }
}

@media (max-width: 767px) {

  justify-content: space-around;
  padding: 17.5px 50px;
  position: fixed;

  h2 {
    width: 100%;
    font-size: 28px;
  }

  .colorSwitch {
    display: none;
  }

  .list {
    display: none;
  }

  .sidebar {
    display: block;
  }
}

`

export default Header