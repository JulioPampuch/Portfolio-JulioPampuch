import appConfig from '../../../config.json'
import { HiOutlineViewList } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineFundProjectionScreen, AiOutlineContacts } from 'react-icons/ai';
import styled from 'styled-components';
import { useState } from 'react';


const SideBar = () => {

  const [openSideBar, setOpenSideBar] = useState(false)

  const handleOpenState = () => {
    setOpenSideBar(!openSideBar)
    console.log(openSideBar)
  }

  return (
    <StyledSideBar>
      <button onClick={handleOpenState}><HiOutlineViewList size={33} /></button>
      {openSideBar && (
        <div className='sidebar'>
          <ul onClick={handleOpenState}>
            <li><AiOutlineHome /><a href='#home'>Home</a></li>
            <li><AiOutlineQuestionCircle /><a href='#sobre'>Sobre</a></li>
            <li><AiOutlineFundProjectionScreen /><a href='#projetos'>Projetos</a></li>
            <li><AiOutlineContacts /><a href='#fale-comigo'>Contato</a></li>
          </ul>
        </div>
      )}
    </StyledSideBar>
  )
}

const StyledSideBar = styled.div`

button {
  background: none;
  border: none;
}

li {
  font-size: 22px;
  margin: 70px 40px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${appConfig.theme.colors.primary['300']};
}

a {
  margin: 0 10px;
}

.sidebar {
    background-color: ${appConfig.theme.colors.neutrals['500']};
    height: calc(100vh - 72px);
    width: 250px;
    position: absolute;
    right: 0px;
    top: 72px;

    animation: showSidebar .3s;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 250px;
    }
  }
`

export default SideBar