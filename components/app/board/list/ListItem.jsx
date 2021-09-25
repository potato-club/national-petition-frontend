import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
export const ListItem = ({
  category,
  title,
  subTitle,
  subNumber,
  day,
  agreePer,
  disagreePer,
}) => {
  return (
    <Wrapper>
      <Category>
        <TypoGraphy
          type="body1"
          color={customColor.skyBlue}
          textAlign="center"
          fontWeight="bold">
          {category}
        </TypoGraphy>
      </Category>
      <TitleWrapper>
        <Title>
          <TypoGraphy type="body1" color={customColor.black} textAlign="left">
            {title}
          </TypoGraphy>
        </Title>
        <SubTitle>
          <MdSubdirectoryArrowRight />
          <TypoGraphy type="body2" color={customColor.gray} textAlign="left">
            {subTitle}
          </TypoGraphy>
        </SubTitle>
      </TitleWrapper>
      <SubNumber>
        <TypoGraphy type="body1" color={customColor.skyBlue} textAlign="center">
          {subNumber}
        </TypoGraphy>
      </SubNumber>
      <Day>
        <TypoGraphy type="body1" color={customColor.black} textAlign="center">
          {day}
        </TypoGraphy>
      </Day>
      <GraphWrapper>
        <Bar>
          <AgreeBar per={(agreePer / (agreePer + disagreePer)) * 100} />
          <DisagreeBar per={(disagreePer / (agreePer + disagreePer)) * 100} />
        </Bar>
      </GraphWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid ${customColor.gray};
  :hover {
    cursor: pointer;
    background-color: ${customColor.grayBg};
  }
`;
const Category = styled.div`
  width: 13%;
`;
const TitleWrapper = styled.div`
  width: 61%;
  flex-direction: column;
  height: 100%;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
  height: 60%;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  display: flex;

  height: 40%;
`;

const SubNumber = styled.div`
  width: 8%;
`;
const Day = styled.div`
  width: 8%;
`;
const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;
const Bar = styled.div`
  display: flex;
  width: 80%;
  height: 15px;
  background-color: ${customColor.black};
`;
const AgreeBar = styled.div`
  width: ${({ per }) => per + '%'};
  height: 100%;
  background-color: ${customColor.blue};
`;
const DisagreeBar = styled.div`
  width: ${({ per }) => per + '%'};
  height: 100%;
  background-color: ${customColor.gray};
`;
