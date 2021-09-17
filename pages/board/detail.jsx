import React, { useEffect, useState } from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { scrapApi } from 'apis';
import { FaUserEdit } from 'react-icons/fa';
import {
  RecommandButton,
  CommentAddForm,
  CommentItem,
  ApplyItem,
} from 'components/app/board/detail';

const detail = ({ detailInfo }) => {
  return (
    <LayoutContainer>
      <IntroHeader />
      <Container>
        <AuthorTitle>
          <TypoGraphy type="Head" color={customColor.black} textAlign="center">
            글쓴이 제목
          </TypoGraphy>
        </AuthorTitle>
        <PetitionTitle>
          <TypoGraphy
            type="Head"
            color={customColor.deepBlue}
            textAlign="center">
            {detailInfo.title}
          </TypoGraphy>
        </PetitionTitle>
        <StatusWrapper>
          <PetitionDivider />
          <TypoGraphy type="h1" color={customColor.skyBlue} textAlign="center">
            {detailInfo.status}
          </TypoGraphy>
          <PetitionDivider />
        </StatusWrapper>
        <InformationForm>
          <Information>
            <TypoGraphy type="h3" color={customColor.black} fontWeight="bold">
              작성자
            </TypoGraphy>
            <Gap />
            <TypoGraphy type="h3" color={customColor.black}>
              네글자임
            </TypoGraphy>
          </Information>
          <Information>
            <TypoGraphy type="h3" color={customColor.black} fontWeight="bold">
              조회수
            </TypoGraphy>
            <Gap />
            <TypoGraphy type="h3" color={customColor.black}>
              100,000
            </TypoGraphy>
          </Information>
          <Information>
            <TypoGraphy type="h3" color={customColor.black} fontWeight="bold">
              게시글 등록
            </TypoGraphy>
            <Gap />
            <TypoGraphy type="h3" color={customColor.black}>
              2021-09-11
            </TypoGraphy>
          </Information>
          <Information>
            <TypoGraphy type="h3" color={customColor.black} fontWeight="bold">
              청원 등록
            </TypoGraphy>
            <Gap />
            <TypoGraphy type="h3" color={customColor.black}>
              2021-09-11
            </TypoGraphy>
          </Information>
        </InformationForm>
        <UserContent>
          <NickNameForm>
            <FaUserEdit
              size="24px"
              colo={customColor.black}
              style={{ marginRight: 8 }}
            />
            <TypoGraphy type="h4" color={customColor.black}>
              작성자 의견
            </TypoGraphy>
          </NickNameForm>
          <TypoGraphy type="body1" color={customColor.black} fontWeight="300">
            이건 단지 의견일 뿐이다
          </TypoGraphy>
        </UserContent>
        <PepitionContent>
          <TypoGraphy type="h4" color={customColor.black} fontHeight="1.5">
            {detailInfo.content.split('\n').map((line, index) => (
              <span key={index.toString()}>
                {line}
                <br />
              </span>
            ))}
          </TypoGraphy>
        </PepitionContent>
        <RecommandWrapper>
          <RecommandButton type="like" />
          <RecommandButton type="unlike" />
        </RecommandWrapper>
        <CommentInputForm>
          <CommentAddForm />
        </CommentInputForm>
        <CommentItem />
        <ApplyItem />
      </Container>
    </LayoutContainer>
  );
};

export async function getServerSideProps(context) {
  const { data: detailInfo } = await scrapApi.getDetail();

  return {
    props: { detailInfo },
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1178px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  border: 1px solid ${customColor.grayBg};
  border-radius: 4px;
  padding: 16px;
`;

const IntroHeader = styled.div`
  background-color: ${customColor.deepBlue};
  width: 100vw;
  height: 480px;
`;

const AuthorTitle = styled.div`
  margin-top: 32px;
  /* border: 1px solid; */
`;
const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  /* border: 1px solid; */
`;
const PetitionTitle = styled.div`
  margin-top: 32px;
  /* border: 1px solid; */
`;

const PetitionDivider = styled.div`
  width: 64px;
  height: 1px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: ${customColor.grayBg};
`;

const InformationForm = styled.div`
  background-color: ${customColor.grayBg};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  gap: 0px 80px;
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const Information = styled.div`
  display: flex;
`;

const UserContent = styled.div`
  background-color: ${customColor.grayBg};
  border-radius: 4px;
  min-height: 128px;
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 16px;
`;

const PepitionContent = styled.div`
  margin-top: 16px;
  padding: 16px;
  /* border: 1px solid; */
`;

const RecommandWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  height: 280px;
  /* border: 1px solid; */
`;

const CommentInputForm = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  /* border: 1px solid; */
`;

const NickNameForm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Gap = styled.div`
  margin-right: 8px;
`;

export default detail;
