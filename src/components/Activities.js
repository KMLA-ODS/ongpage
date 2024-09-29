// src/components/Activities.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  font-family: Pretendard;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  margin-top: 100px;
  padding: 0 84px;
  position: relative;
  text-align: left;
  height: 315px;
  background-image: url("/images/ActivityBanner.jpg");
  background-size: cover;
  background-position: center;
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

const FirstSection = styled.div`
  position: relative;
  padding: 0 84px;
  height: 707px;
  text-align: center;
`;
const SecondSection = styled.div`
  position: relative;
  padding: 0 84px;
  height: 351px;
  text-align: center;
  background-color: teal;
`;
const LastSection = styled.div`
  position: relative;
  padding: 0 84px;
  height: 672px;
  text-align: center;
  background-color: tomato;
`;

const Activities = () => {
  return (
    <Container>
      <Banner>
        <Title>해외봉사</Title>
        <SmallNav>
          <MenuItem>해외봉사</MenuItem>
          <MenuItem>기술개발</MenuItem>
          <MenuItem>모금사업</MenuItem>
        </SmallNav>
      </Banner>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <LastSection></LastSection>
    </Container>
  );
};

export default Activities;
