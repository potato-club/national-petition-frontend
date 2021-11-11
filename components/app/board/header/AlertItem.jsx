import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common/index';

export const AlertItem = ({ title }) => {
  return (
    <DropDownItem>
      <TitleWrapper>
        <TypoGraphy type="body1" color={customColor.black}>
          {title}
        </TypoGraphy>
      </TitleWrapper>
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

    border-radius: 10px;
  }
  width: 100%;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Line = styled.div`
  width: 90%;
  height: 1px;
  border: 1px solid ${customColor.grayBg};
`;
