import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer, TypoGraphy, Header } from 'components/common/index';
import { customColor } from 'constants/index';
import { Top5TextLoop, UrlInput } from 'components/common';

const list = () => {
  return (
    <LayoutContainer>
      <Header />
      <TitleHeader>
        <Title>
          <TypoGraphy type="Head" color={customColor.white} textAlign="center">
            게시글
          </TypoGraphy>
        </Title>
        <UrlInput />
        <Top5TextLoop />
      </TitleHeader>
    </LayoutContainer>
  );
};

export default list;

const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  background-color: ${customColor.deepBlue};
`;

const Title = styled.div`
  margin: 20px;
  margin-top: 90px;
`;
