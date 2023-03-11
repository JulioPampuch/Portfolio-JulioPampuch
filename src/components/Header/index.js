import styled from 'styled-components'
import appConfig from '../../../config.json'
import SideBar from '../SidebarMobile'

const Header = () => {

  return (
    <header >
      <StyledNav id='navHeader'>
        <h2>{'< '}Portfó<span>lio</span>{' />'}</h2>
        <ul className='list'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#sobre'>Sobre</a></li>
          <li><a href='#projetos'>Projetos</a></li>
          <li><a href='#networking'>Fale comigo</a></li>
        </ul>
        <div className='sidebar'>
          <SideBar/>
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
    color: ${({theme}) => theme.primary['main']};
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
    color: ${({theme}) => theme.primary['main']};
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
  padding: 17.5px 32.5px;
  position: fixed;
  z-index: 1;

  h2 {
    width: 100%;
    font-size: 28px;
  }

  .list {
    display: none;
  }

  .sidebar {
    display: block;
  }

  .navBarFixed {
    header {
      position: fixed;
    }
  }
}
`

export default Header