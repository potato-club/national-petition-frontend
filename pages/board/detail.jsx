import React from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants';

const detail = () => {
  return (
    <LayoutContainer>
      <IntroHeader />
      <Container>
        <TypoGraphy>WOW</TypoGraphy>
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
  background-color: #082e59;
  width: 100vw;
  height: 480px;
`;

export default detail;
