import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const [Nav, SetNav] = useState(false);
  console.log({Nav})
  return (
    <Container>
      <Wrap>
        <Logo src = "./images/logo.svg">
        </Logo>
        <HamNav>
          <Hamburger onClick={() =>SetNav(true)} src ="./images/icon-menu.svg" alt="icon" />
        </HamNav>
      </Wrap>
      <NavWrap>
      <NavMenu show = {Nav}>
            <Li className='close'>
              <CloseWrap><CustomClose onClick={() =>SetNav(false)} src = "./images/icon-menu-close.svg" /></CloseWrap></Li>
            <Li>Model S</Li>
            <Li>Model X</Li>
            <Li>Model 3</Li>
            <Li>Model Y</Li>
            <Li>Custom Order</Li>
            <Li>Existing Inventory</Li>
          </NavMenu>
          </NavWrap>
    </Container>
  )
}

export default Header

const Container = styled.div`
position: fixed;
width: 100%;
padding: 10px;
`
const Wrap = styled.div`
display: flex;

justify-content: space-between;

`
const Logo = styled.img`

`

const Hamburger = styled.img`

margin-right: 20px;
cursor: pointer;
width: 25px;
height: 18px;
  :hover{
    opacity: 0.7;
  }
`
const HamNav = styled.div`

`
const CustomClose = styled.img`
height: 20px;
`
const NavMenu = styled.ul`
position: relative;
width: 60%;
height: 700px;
top: 0;
position: fixed;
right: 0;
transform: ${props => props.show? "translateX(0)" : "translateX(100%)"};


`
const Li = styled.li`
list-style: none;
background-color: white;
padding: 10px;
border-bottom: 1px solid rgba(0,0,0,0.2);
:hover{
  // opacity: 0.9;
  cursor: pointer;
  transform: scale(1.02);
}

`
const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
:hover{
  transform: scale(1);
}
`
const NavWrap = styled.div`
background-color: white;
`