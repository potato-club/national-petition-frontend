import React from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';

const detail = () => {
  return (
    <LayoutContainer>
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

export default detail;
