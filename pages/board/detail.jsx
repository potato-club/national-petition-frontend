import React from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

const detail = () => {
  return (
    <LayoutContainer>
      <IntroHeader />
      <Container>
        <TypoGraphy type="Head" color={customColor.skyBlue}>
          WOW
        </TypoGraphy>
      </Container>
    </LayoutContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1178px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

const IntroHeader = styled.div`
  background-color: ${customColor.deepBlue};
  width: 100vw;
  height: 480px;
`;

export default detail;
