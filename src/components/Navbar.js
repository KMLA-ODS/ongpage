// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 84px;
  height: 100px;
  width: 100%;
  max-width: 1920px;
  min-width: 1280px;

  box-sizing: border-box;
  background-color: ${(props) => (props.isHome ? "transparent" : "white")};

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  height: 67px;
  margin-right: 10px;
`;

const CompanyName = styled.span`
  color: ${(props) => (props.isHome ? "white" : "black")};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Menu = styled.div`
  display: flex;
  gap: 58px;
`;

const MenuItem = styled(Link)`
  color: ${(props) => (props.isHome ? "white" : "black")};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #00c3ff;
  }
`;

const SupportButton = styled(Link)`
  padding: 10px 20px;
  background-color: #5ca45e;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c3ff;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <Nav isHome={isHome}>
      <LogoSection>
        <LogoLink to="/">
          <Logo src="/images/logo.png" alt="Company Logo" />
        </LogoLink>
        <CompanyName isHome={isHome}>ONGDALSAM</CompanyName>
      </LogoSection>
      <Menu>
        <MenuItem isHome={isHome} to="/about">
          소개
        </MenuItem>
        <MenuItem isHome={isHome} to="/activities">
          활동
        </MenuItem>
        <MenuItem isHome={isHome} to="/story">
          스토리
        </MenuItem>
        <MenuItem isHome={isHome} to="/technology">
          기술
        </MenuItem>
        <MenuItem isHome={isHome} to="/member">
          구성원
        </MenuItem>
      </Menu>
      <SupportButton to="/support">후원하기</SupportButton>
    </Nav>
  );
};

export default Navbar;
