import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer, TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';
import { RiArrowDropDownLine } from 'react-icons/ri';
const home = () => {
  return (
    <LayoutContainer>
      {/* Header 자리*/}
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
        <EnrollmentWrapper>
          <UrlTitle>
            <TypoGraphy type="h1" color={customColor.black} textAlign="center">
              URL
            </TypoGraphy>
          </UrlTitle>
          <InputUrl>
            <TypoGraphy type="body1" color={customColor.gray} textAlign="left">
              청원 글의 URL을 넣어주세요.
            </TypoGraphy>
          </InputUrl>
          <EnrollmentButton>
            <TypoGraphy type="h3" color={customColor.white} textAlign="center">
              등록
            </TypoGraphy>
          </EnrollmentButton>
        </EnrollmentWrapper>
        <Top5Section>
          <Top5Title>
            <TypoGraphy
              type="h4"
              color={customColor.white}
              textAlign="left"
              fontWeight="bold">
              TOP 5
            </TypoGraphy>
          </Top5Title>
          <Top5ItemWrapper>
            <ItemRanking>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                1
              </TypoGraphy>
            </ItemRanking>
            <ItemTitle>
              <TypoGraphy
                type="body1"
                color={customColor.black}
                textAlign="left">
                학교 폭파 해주세요. 빼애애애애애애액. 으아앙
              </TypoGraphy>
            </ItemTitle>
            <ItemSubNumber>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                8,888,888
              </TypoGraphy>
            </ItemSubNumber>
            <RiArrowDropDownLine style={DropDownStyle} />
          </Top5ItemWrapper>
        </Top5Section>
      </Container>
    </LayoutContainer>
  );
};
export default home;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  background-color: ${customColor.blue};
`;

const Title = styled.div`
  margin: 20px;
  margin-top: 90px;
`;
const SubTitle = styled.div`
  margin: 20px;
`;

const EnrollmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 70px;
  padding: 10px 15px;
  background-color: ${customColor.white};
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const UrlTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11%;
  height: 100%;
  border-right: 2px solid ${customColor.gray};
`;
const InputUrl = styled.div`
  width: 70%;
`;
const EnrollmentButton = styled.button`
  border: none;
  padding: 15px 25px;
  background-color: ${customColor.skyBlue};
  cursor: pointer;
  width: 13%;
  border-radius: 20px;
`;

const Top5Section = styled.div``;
const Top5Title = styled.div`
  margin-left: 20px;
  margin-bottom: 5px;
`;
const Top5ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 45px;
  padding: 0px 10px;

  background-color: ${customColor.white};
  border-radius: 20px;
`;
const ItemRanking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
`;
const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`;
const ItemSubNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;
const DropDownStyle = {
  display: 'flex',
  fontSize: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  width: '5%',
};
