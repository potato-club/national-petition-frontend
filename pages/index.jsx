import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer, TypoGraphy, Header } from 'components/common/index';
import { customColor } from 'constants/index';
import { Top5TextLoop, UrlInput } from 'components/common';
const Home = () => {
  return (
    <LayoutContainer>
      <Header />
      <Container>
        <Title>
          <TypoGraphy type="Head" color={customColor.white} textAlign="center">
            국 민
            <br />청 원
          </TypoGraphy>
        </Title>
        <SubTitle>
          <TypoGraphy type="h1" color={customColor.white} textAlign="center">
            지금바로 국민청원에 대한 <br />
            자신의 의견을 공유해보세요
          </TypoGraphy>
        </SubTitle>
        <UrlInput />
        <Top5TextLoop />
      </Container>
    </LayoutContainer>
  );
};
export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  background-color: ${customColor.deepBlue};
`;

const Title = styled.div`
  margin: 20px;
  margin-top: 90px;
`;
const SubTitle = styled.div`
  margin: 20px;
`;
