import React, { useState, useEffect } from 'react';
import TextLoop from 'react-text-loop';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { rankApi } from 'apis';

/* 
agreement: "251,716"
category: "정치개혁"
created: "2021-09-23"
finished: "2021-10-23"
id: "601350"
title: "*** 아버지 장제원 국회의원직 박탈을 원합니다." 
*/

export const Top5TextLoop = () => {
  const [handleDrop, setHandleDrop] = useState(false);
  const [Top5List, setTop5List] = useState([
    { id: 1, title: '', agreement: '' },
    { id: 2, title: '', agreement: '' },
    { id: 3, title: '', agreement: '' },
    { id: 4, title: '', agreement: '' },
    { id: 5, title: '', agreement: '' },
  ]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            data: { item: list },
          },
        } = await rankApi.getTop5();
        setTop5List(list);
        setVisible(false);
      } catch (e) {}
    })();
  }, []);

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
      {visible ? (
        <Top5ItemBox handleDrop={false}>
          <LoadingWrapper>
            <TypoGraphy
              type="body1"
              color={customColor.gray}
              textAlign="center">
              정보를 받아오는 중 입니다
            </TypoGraphy>
          </LoadingWrapper>
        </Top5ItemBox>
      ) : (
        <Top5ItemBox handleDrop={handleDrop}>
          {handleDrop ? (
            <div>
              {Top5List.map(({ id, title, agreement }, index) => (
                <ItemWrapper key={id}>
                  <ItemRanking>
                    <TypoGraphy
                      type="body1"
                      color={customColor.skyBlue}
                      textAlign="center"
                      fontWeight="bold">
                      {index + 1}
                    </TypoGraphy>
                  </ItemRanking>
                  <ItemTitle>
                    <TypoGraphy
                      type="body1"
                      color={customColor.black}
                      textAlign="left">
                      {title}
                    </TypoGraphy>
                  </ItemTitle>
                  <ItemSubNumber>
                    <TypoGraphy
                      type="body1"
                      color={customColor.skyBlue}
                      textAlign="center"
                      fontWeight="bold">
                      {agreement}
                    </TypoGraphy>
                  </ItemSubNumber>
                </ItemWrapper>
              ))}
            </div>
          ) : (
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
                    {Top5List[0].agreement}
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
                    {Top5List[1].agreement}
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
                    {Top5List[2].agreement}
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
                    {Top5List[3].agreement}
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
                    {Top5List[4].agreement}
                  </TypoGraphy>
                </ItemSubNumber>
              </ItemWrapper>
            </TextLoop>
          )}
          <RiArrowDropDownLine
            style={{
              display: 'flex',
              fontSize: '40px',
              justifyContent: 'center',
              cursor: 'pointer',
              marginTop: '3px',
              transform: handleDrop ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s ',
            }}
            onClick={() => setHandleDrop((handleDrop) => !handleDrop)}
          />
        </Top5ItemBox>
      )}
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
  width: 600px;
  height: ${({ handleDrop }) => (handleDrop ? `225px` : `45px`)};
  padding: 0px 10px;
  background-color: ${customColor.white};
  border-radius: 20px;
`;
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  overflow: hidden;
`;
const ItemSubNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;
