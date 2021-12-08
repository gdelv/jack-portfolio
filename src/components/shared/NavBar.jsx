import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../images/jslogotransparent.png';
import Hamburger from './Hamburger';
import { Primary, Secondary } from '../../colors';
import { ProjectConsumer } from '../../context';

const StyledNav = styled.nav`
    max-width: 100%;
    height: 10vh;
    // background: ${Primary};
    background: rgb(0,206,209);
    background: linear-gradient(0deg, rgba(0,206,209,1) 12%, rgba(255,193,204,1) 78%);
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
`;
const LogoImg = styled.img`
    width: 80px;
    position: relative;
    top: 2vh;
    height: 6vh;
    border-radius: 5px;
`;

const StyledModal = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  // background: ${Secondary};
  background: rgb(0,206,209);
background: linear-gradient(180deg, rgba(0,206,209,1) 42%, rgba(255,193,204,1) 58%);
  opacity: .93;
  color: white;
  z-index: 9999;
  overflow: hidden;
  // border-top: .1px solid darkgray;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
`;
const NavBar = () => {
  const [buttonClassName, setButtonClassName] = useState('circle icon');
  const [modal, setModal] = useState(false);
  const changeClassName = () => (buttonClassName === 'circle icon' ? setButtonClassName('circle icon close') : setButtonClassName('circle icon'));
  const handleModal = () => {
    changeClassName();
    setModal(!modal);
  };

  // const renderMainLinks = (value) => (
  //   <StyledNav>
  //     <a href="/">
  //       <LogoImg src={logo} />
  //     </a>
  //     <button onClick={() => value.toggleDarkMode()}>Toggle Mode</button>
  //     <Hamburger
  //       buttonClassName={buttonClassName}
  //       handleModal={handleModal}
  //     />
  //   </StyledNav>
  // );
  // eslint-disable-next-line consistent-return
 
const LogoImg = styled.img`
    width: 80px;
    position: relative;
    top: 2vh;
    height: 6vh;
    border-radius: 5px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
`;

  return (
    <ProjectConsumer>
      {value => {
          const renderModal = () => {
            if (modal) {
              return (
                <StyledModal>
                  <StyledLink href="/writering" onClick={handleModal}>Writering</StyledLink>
                  <StyledLink href="/directoring" onClick={handleModal}>Directoring</StyledLink>
                  <StyledLink href="/contact" onClick={handleModal}>Bio/Contact</StyledLink>
                </StyledModal>
              );
            }
          };
        let lightColor = value.lightColor();
        let darkColor = value.darkColor();
    const StyledNav = styled.nav`
    max-width: 100%;
    height: 10vh;
    background: rgb(0,206,209);
    background: linear-gradient(0deg, ${lightColor} 12%, ${darkColor} 78%);
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
`;
const StyledModal = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(180deg, ${darkColor} 42%, ${lightColor} 58%);
  opacity: .93;
  color: white;
  z-index: 9999;
  overflow: hidden;
`;
    return (
      <>
      <StyledNav>
      <a href="/">
        <LogoImg src={logo} />
      </a>
      <button onClick={() => value.toggleDarkMode()}>Toggle Mode</button>
      <Hamburger
        buttonClassName={buttonClassName}
        handleModal={handleModal}
        />
    </StyledNav>
        {renderModal()}
        </>
    )
          }}
      {/* { renderMainLinks() } */}
    </ProjectConsumer>
  );
};

export default NavBar;
