import React from 'react';
import TextLoop from 'react-text-loop';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Top5List = [
  { title: '학교 폭파해주세요', sub: '123,334' },
  { title: '우리집 강아지는 멋진 강아지', sub: '345,123' },
  { title: '이세상을 살려라 할렐루야', sub: '789,345' },
  { title: '너 내 동료가 되라', sub: '111,111' },
  { title: '피..피카츄..!', sub: '222,222' },
];
export const Top5TextLoop = () => {
  return (
    <Top5Section>
      <Top5Title>
        <TypoGraphy
          type="h4"
          color={customColor.white}
          textAlign="left"
          fontWeight="bold">
          Top5
        </TypoGraphy>
      </Top5Title>
      <Top5ItemBox>
        <TextLoop mask={true} interval={5000}>
          <ItemWrapper>
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
                {Top5List[0].title}
              </TypoGraphy>
            </ItemTitle>
            <ItemSubNumber>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                {Top5List[0].sub}
              </TypoGraphy>
            </ItemSubNumber>
          </ItemWrapper>
          <ItemWrapper>
            <ItemRanking>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                2
              </TypoGraphy>
            </ItemRanking>
            <ItemTitle>
              <TypoGraphy
                type="body1"
                color={customColor.black}
                textAlign="left">
                {Top5List[1].title}
              </TypoGraphy>
            </ItemTitle>
            <ItemSubNumber>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                {Top5List[1].sub}
              </TypoGraphy>
            </ItemSubNumber>
          </ItemWrapper>
          <ItemWrapper>
            <ItemRanking>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                3
              </TypoGraphy>
            </ItemRanking>
            <ItemTitle>
              <TypoGraphy
                type="body1"
                color={customColor.black}
                textAlign="left">
                {Top5List[2].title}
              </TypoGraphy>
            </ItemTitle>
            <ItemSubNumber>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                {Top5List[2].sub}
              </TypoGraphy>
            </ItemSubNumber>
          </ItemWrapper>
          <ItemWrapper>
            <ItemRanking>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                4
              </TypoGraphy>
            </ItemRanking>
            <ItemTitle>
              <TypoGraphy
                type="body1"
                color={customColor.black}
                textAlign="left">
                {Top5List[3].title}
              </TypoGraphy>
            </ItemTitle>
            <ItemSubNumber>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                {Top5List[3].sub}
              </TypoGraphy>
            </ItemSubNumber>
          </ItemWrapper>
          <ItemWrapper>
            <ItemRanking>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                5
              </TypoGraphy>
            </ItemRanking>
            <ItemTitle>
              <TypoGraphy
                type="body1"
                color={customColor.black}
                textAlign="left">
                {Top5List[4].title}
              </TypoGraphy>
            </ItemTitle>
            <ItemSubNumber>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center"
                fontWeight="bold">
                {Top5List[4].sub}
              </TypoGraphy>
            </ItemSubNumber>
          </ItemWrapper>
        </TextLoop>
        <RiArrowDropDownLine style={DropDownStyle} />
      </Top5ItemBox>
    </Top5Section>
  );
};

const Top5Section = styled.div``;
const Top5Title = styled.div`
  margin-left: 20px;
  margin-bottom: 5px;
`;
const Top5ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 45px;
  padding: 0px 10px;

  background-color: ${customColor.white};
  border-radius: 20px;
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  height: 45px;
`;
const ItemRanking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
`;
const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  width: 77%;
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
};
