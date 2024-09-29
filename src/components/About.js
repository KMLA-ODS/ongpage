// src/components/About.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  font-family: Pretendard;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  padding: 0 84px;
  position: relative;
  text-align: left;
  height: 315px;
  background-image: url("/images/AboutBanner.JPEG");
  background-size: cover;
  background-position: 50% 45%;
`;

const Title = styled.h2`
  color: #fff;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SmallNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 30%;
  bottom: -25px;
  width: 582px;
  height: 50px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const MenuItem = styled(Link)`
  color: #5f6368;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
    font-weight: 700;
  }
`;

const About = () => {
  return (
    <Container>
      <Banner>
        <Title>옹달샘은</Title>
        <SmallNav>
          <MenuItem>기관소개</MenuItem>
          <MenuItem>핵심가치</MenuItem>
          <MenuItem>인사말</MenuItem>
        </SmallNav>
      </Banner>
    </Container>
  );
};

export default About;
