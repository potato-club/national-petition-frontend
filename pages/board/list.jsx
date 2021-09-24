import React from 'react';
import styled from '@emotion/styled';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  TitleHeader,
} from 'components/common/index';
import { customColor } from 'constants/index';
import { Top5TextLoop, UrlInput } from 'components/common';

const list = () => {
  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="국민청원 소통방" />
      <Container>
        <TypoGraphy>HELLO</TypoGraphy>
      </Container>
    </LayoutContainer>
  );
};

const Container = styled.div`
  width: 1178px;
  margin-left: auto;
  margin-right: auto;
`;

export default list;
