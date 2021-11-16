import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common/index';

export const AlertItem = ({ title, time, state }) => {
  return (
    <DropDownItem>
      <TextWrapper>
        <TitleWrapper state={state}>
          {state == 1 && (
            <CircleWrapper>
              <Circle />
            </CircleWrapper>
          )}
          <TypoGraphy
            type="body1"
            color={state == 1 ? customColor.black : customColor.grayBg}>
            {title}
          </TypoGraphy>
        </TitleWrapper>
        <TimeWrapper>
          <TypoGraphy
            type="body1"
            color={state == 1 ? customColor.gray : customColor.grayBg}>
            {time}
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
  width: ${({ state }) => (state === 1 ? '80%' : '75%')};
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
