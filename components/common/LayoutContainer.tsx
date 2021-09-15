import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

export const LayoutContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: ${customColor.bg};
  display: flex;
  flex-direction: column;
`;
