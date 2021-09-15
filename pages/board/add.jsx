import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer } from 'components/common';

const add = () => {
  return (
    <LayoutContainer>
      <Box />
      푸쉬중..
    </LayoutContainer>
  );
};

export default add;

const Box = styled.div`
  width: 100px;
  height: 100px;
`;
