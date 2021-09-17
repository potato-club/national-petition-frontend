import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from './TypoGraphy';

export const Header = () => {
  return (
    <Wrapper>
      <Side>
        <TypoGraphy type="h1" color={customColor.white}>
          국민청원 소통방
        </TypoGraphy>
      </Side>
      <Side>
        <TypoGraphy type="h1" color={customColor.white}>
          홈
        </TypoGraphy>
        <Gap />
        <TypoGraphy type="h1" color={customColor.white}>
          로그인
        </TypoGraphy>
      </Side>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${customColor.deepBlue};
  opacity: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  padding-left: 32px;
  padding-right: 32px;
`;

const Side = styled.div`
  display: flex;
`;

const Gap = styled.div`
  margin-left: 32px;
`;
