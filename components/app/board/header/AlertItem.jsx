import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common/index';

export const AlertItem = ({ title, time, state }) => {
  return (
    <DropDownItem>
      <TextWrapper>
        <TitleWrapper>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 90%;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
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
