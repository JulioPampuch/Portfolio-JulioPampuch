import appConfig from '../../../config.json'
import { HiOutlineViewList } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineFundProjectionScreen, AiOutlineContacts, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { useState } from 'react';

const SideBar = () => {

  const [openSideBar, setOpenSideBar] = useState(false)

  const handleOpenState = () => {
    setOpenSideBar(!openSideBar)
  }

  return (
    <StyledSideBar>
      {!openSideBar
        ? 
        <button onClick={handleOpenState}><HiOutlineViewList size={33} /></button>
        :
        <>
          <button onClick={handleOpenState}><AiOutlineClose size={33} /></button>
          <div className='sidebar'>
            <ul onClick={handleOpenState}>
              <li><AiOutlineHome /><a href='#home'>Home</a></li>
              <li><AiOutlineQuestionCircle /><a href='#sobre'>Sobre</a></li>
              <li><AiOutlineFundProjectionScreen /><a href='#projetos'>Projetos</a></li>
              <li><AiOutlineContacts /><a href='#networking'>Contato</a></li>
            </ul>
          </div>
        </>
      }
    </StyledSideBar>
  )
}

const StyledSideBar = styled.div`

color: ${({ theme }) => theme.neutrals['text']};

button {
  color: ${({ theme }) => theme.neutrals['text']};
  background: none;
  border: none;
}

li {

  font-size: 22px;
  margin: 70px 40px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${appConfig.colors.primary['300']}
}

a {
  margin: 0 10px;
}

.sidebar {
    background-color: ${({ theme }) => theme.neutrals['nivel8']};
    height: calc(100vh - 72px);
    width: 255px;
    position: fixed;
    right: 0px;
    top: 72px;
    z-index: 1;

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
