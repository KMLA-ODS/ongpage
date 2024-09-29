// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  font-family: Pretendard;

  h3 {
    color: #828282;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Banner = styled.div`
  position: relative;
  text-align: center;
  height: 719px;
  background-image: url("/images/Home_bg.jpg");
  background-size: cover;
`;

const BannerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 84px;
  bottom: 20%;
  text-align: left;
`;

const Year = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 29px;
`;

const Title = styled.h1`
  color: #fff;
  font-family: Pretendard;
  font-size: 65px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 22px;
`;

const SubTitle = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 29px;
`;

const OngSection = styled.div`
  padding: 67px 84px 0 84px;
  height: 610px;
`;

const StyledText = styled.span`
  font-size: 40px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: ${(props) => props.color};
`;

const DescriptionText = styled.h3`
  margin-top: 16px;
`;

const StoryContainer = styled.div`
  margin-top: 43px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledStory = styled.img`
  width: 290px;
  border-bottom-right-radius: 20px;
`;

const AboutSection = styled.div`
  position: relative;
  padding: 0 84px;
  height: 675px;
  text-align: center;
`;

const BigCircle = styled.div`
  z-index: 3;
  position: absolute;
  background-image: url("/images/BigCircle.JPG");
  background-size: cover;
  background-position: center;
  border: 12px solid #3b3b3b;
  border-radius: 202px;
  top: 17%;
  left: 14%;
  width: 405px;
  height: 405px;
`;

const SmallCircle = styled.div`
  z-index: 4;
  position: absolute;
  background-image: url("/images/SmallCircle.webp");
  background-size: cover;
  background-position: center;
  border: 8px solid #3b3b3b;
  border-radius: 128px;
  top: 57%;
  left: 5.8%;
  width: 256px;
  height: 256px;
`;

const GreenCircle = styled.img`
  z-index: 10;
  position: absolute;
  top: 52%;
  left: 28%;
  width: 400px;
  height: auto;
  object-fit: cover;
`;

const BlueCircle = styled.img`
  z-index: 1;
  position: absolute;
  top: 29%;
  left: 0;
  width: 400px;
  height: auto;
  object-fit: cover;
`;

const AwardSection = styled.div`
  padding: 0 84px;
  height: 180px;
  background-color: #f9dd93;
`;

const ActivitySection = styled.div`
  padding: 0 84px;
  height: 1262px;
  background-color: oldlace;
`;

const SupportSection = styled.div``;

const Button = styled(Link)`
  display: inline-block;
  width: 196px;
  height: 50px;
  background-color: #00c3ff;
  color: white;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  border-radius: 5px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
`;

const Home = () => {
  return (
    <Container>
      <Banner>
        <BannerContainer>
          <Year>2024</Year>
          <Title>
            민족사관고등학교<br></br> 옹달샘
          </Title>
          <SubTitle>국내 유일 적정기술 해외봉사 동아리</SubTitle>
          <Button to="/about">더 알아보기</Button>
        </BannerContainer>
      </Banner>
      <OngSection>
        <StyledText color="#000">옹달샘의 특별한 </StyledText>
        <StyledText color="#00c3ff">봉사 이야기</StyledText>
        <DescriptionText>
          작은 노력이 모여 비로소 변화가 시작될 것이라 믿습니다.
        </DescriptionText>
        <StoryContainer>
          {" "}
          <a href="https://www.instagram.com/p/C99F5w3BJ20/?img_index=1">
            <StyledStory src="/images/Story1.jpg"></StyledStory>
          </a>
          <a href="https://www.instagram.com/p/C99D2Vuhmc2/">
            <StyledStory src="/images/Story2.jpg"></StyledStory>
          </a>
          <a href="https://www.instagram.com/p/C9we_zOBqW8/">
            <StyledStory src="/images/Story3.jpg"></StyledStory>
          </a>
          <a href="https://www.instagram.com/p/Ck2-X5yBVom/?img_index=1">
            <StyledStory src="/images/Story4.jpg"></StyledStory>
          </a>
        </StoryContainer>
      </OngSection>
      <AboutSection>
        <StyledText color="#000">옹달샘은?</StyledText>
        <DescriptionText>
          민족사관고등학교 학생들이 운영하는 적정기술 해외봉사 동아리입니다.
        </DescriptionText>
        <BigCircle></BigCircle>
        <SmallCircle></SmallCircle>
        <BlueCircle src="/images/BlueCircle.png"></BlueCircle>
        <GreenCircle src="/images/GreenCircle.png"></GreenCircle>
      </AboutSection>
      <AwardSection></AwardSection>
      <ActivitySection></ActivitySection>
      <SupportSection></SupportSection>
    </Container>
  );
};

export default Home;
