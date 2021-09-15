import React from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

const detail = () => {
  return (
    <LayoutContainer>
      <IntroHeader />
      <Container>
        <AuthorTitle>
          <TypoGraphy type="Head" color={customColor.black} textAlign="center">
            글쓴이 제목
          </TypoGraphy>
        </AuthorTitle>
        <StatusWrapper>
          <TypoGraphy type="h1" color={customColor.skyBlue} textAlign="center">
            청원 상태
          </TypoGraphy>
        </StatusWrapper>
        <PetitionTitle>
          <TypoGraphy
            type="Head"
            color={customColor.deepBlue}
            textAlign="center">
            청원 제목
          </TypoGraphy>
        </PetitionTitle>
        <UserContent>
          <TypoGraphy type="body1" color={customColor.black}>
            유저 의견
          </TypoGraphy>
        </UserContent>
        <PepitionContent>
          <TypoGraphy type="body1" color={customColor.black}>
            청원 내용
          </TypoGraphy>
        </PepitionContent>
        <RecommandWrapper>
          <TypoGraphy type="body1" color={customColor.black}>
            의견이 맘에 들어요
          </TypoGraphy>
          <TypoGraphy type="body1" color={customColor.black}>
            의견이 맘에 안들어요
          </TypoGraphy>
        </RecommandWrapper>
        <CommandForm>
          <TypoGraphy type="body1" color={customColor.black}>
            댓글
          </TypoGraphy>
        </CommandForm>
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
  margin-top: 32px;
`;

const IntroHeader = styled.div`
  background-color: ${customColor.deepBlue};
  width: 100vw;
  height: 480px;
`;

const AuthorTitle = styled.div`
  margin-top: 32px;
  border: 1px solid;
`;
const StatusWrapper = styled.div`
  margin-top: 32px;
  border: 1px solid;
`;
const PetitionTitle = styled.div`
  margin-top: 32px;
  border: 1px solid;
`;

const UserContent = styled.div`
  margin-top: 64px;
  padding: 16px;
  border: 1px solid;
`;

const PepitionContent = styled.div`
  margin-top: 32px;
  padding: 16px;
  border: 1px solid;
`;

const RecommandWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  height: 280px;
  border: 1px solid;
`;

const CommandForm = styled.div`
  margin-top: 32px;
  padding: 16px;
  border: 1px solid;
`;

export default detail;
