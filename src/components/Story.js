// src/components/Story.js
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
  background-image: url("/images/StoryBanner.jpeg");
  background-size: cover;
  background-position: center 45%;
`;

const Title = styled.h2`
  color: #fff;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FirstSection = styled.div`
  position: relative;
  padding: 0 84px;
  height: 707px;
  text-align: center;
  background-color: beige;
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

const Story = () => {
  return (
    <Container>
      <Banner>
        <Title>스토리</Title>
      </Banner>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <LastSection></LastSection>
    </Container>
  );
};

export default Story;
