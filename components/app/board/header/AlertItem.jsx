import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common/index';

export const AlertItem = ({ content, isRead }) => {
  return (
    <DropDownItem>
      <TextWrapper>
        <TitleWrapper isRead={isRead}>
          {isRead == false && (
            <CircleWrapper>
              <Circle />
            </CircleWrapper>
          )}
          <TypoGraphy
            type="body1"
            color={isRead == false ? customColor.black : customColor.grayBg}>
            {content}
          </TypoGraphy>
        </TitleWrapper>
        <TimeWrapper>
          <TypoGraphy
            type="body1"
            color={isRead == false ? customColor.gray : customColor.grayBg}>
            sss
          </TypoGraphy>
        </TimeWrapper>
      </TextWrapper>
      <Line />
    </DropDownItem>
  );
};

const DropDownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  :hover {
    background-color: ${customColor.grayBg};
  }
  width: 100%;
`;
const TextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 85%;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${({ isRead }) => (isRead === false ? '80%' : '75%')};
`;
const TimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`;
const Line = styled.div`
  width: 90%;
  height: 1px;
  border: 1px solid ${customColor.grayBg};
`;

const CircleWrapper = styled.div`
  position: absolute;
  left: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 100%;
`;
const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${customColor.skyBlue};
`;
