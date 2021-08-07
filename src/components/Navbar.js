import React from "react";
import styled from "styled-components";
import NavbarLinksData from "./NavbarLinksData";
import "./style.css";

const Navbar = () => {
  return (
    <Nav>
      <Logo className="logo">neuroprism</Logo>
      <OptionsDiv>
        {NavbarLinksData.map((navlink) => (
          <NavbarLink className="navbar-link">{navlink.title}</NavbarLink>
        ))}
      </OptionsDiv>
    </Nav>
  );
};

const Nav = styled.div`
  height: 140px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  position: absolute;
`;

const Logo = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: default;
  user-select: none;
`;

const OptionsDiv = styled.div`
  height: 50px;
  margin-right: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NavbarLink = styled.h3`
  margin: 0 15px;
  font-weight: 300;
  font-size: 30px;
  cursor: pointer;
`;
export default Navbar;
