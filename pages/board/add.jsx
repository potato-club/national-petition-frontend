import React from 'react';
import { LayoutContainer, TypoGraphy, Header } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

const add = () => {
  return (
    <LayoutContainer>
      <IntroHeader />
      <Header />
      <FormBox>
        <FormHeader>
          <TypoGraphy type="Head" color={customColor.black}>
            게시글 등록
          </TypoGraphy>
        </FormHeader>
        <InputContentBox>
          <Title>
            <TypoGraphy type="h1" fontWeight="bold" color={customColor.gray}>
              제목
            </TypoGraphy>
          </Title>
          <Input placeholder="제목을 입력하세요" />
          <Title>
            <TypoGraphy type="h1" fontWeight="bold" color={customColor.gray}>
              청원 링크
            </TypoGraphy>
          </Title>
          <Input placeholder="https://" />
          <Title>
            <TypoGraphy type="h1" fontWeight="bold" color={customColor.gray}>
              나의 의견
            </TypoGraphy>
          </Title>
          <OpinionInput placeholder="자유롭게 의견을 작성하세요" />
        </InputContentBox>
        <ButtonBox>
          <Button add>작성 완료</Button>
          <Button cancel>작성 취소</Button>
        </ButtonBox>
      </FormBox>
    </LayoutContainer>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -406px;
  margin-left: -589px;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  background-color: white;
`;

const FormHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

const Title = styled.div`
  margin-left: 8px;
`;

const Input = styled.input`
  width: 1178px;
  height: 40px;
  background-color: #f6f6f6;
  border: none;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  font-size: 18px;
  margin-top: 8px;
  outline: none;
`;
const InputContentBox = styled.div``;
const OpinionInput = styled.textarea`
  width: 1178px;
  height: 320px;
  font-size: 20px;
  border: none;
  padding: 8px;
  background-color: #f6f6f6;
  border-radius: 4px;
  margin-top: 16px;
  resize: none;
  outline: none;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
  margin: auto;
  margin-top: 14px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  border-radius: 4px;
  border: none;
  ${(props) =>
    props.add &&
    `
    background:${customColor.deepBlue};
    opacity: 0.9;
    color:white;
    &:hover {
    opacity: 1;
    }
  `}
  ${(props) =>
    props.cancel &&
    `
    background-color: ${customColor.grayBg};
    &:hover {
    background-color: ${customColor.grayBg};
    opacity: 0.5;
    }
    `}
`;
const IntroHeader = styled.div`
  background-color: ${customColor.deepBlue};
  width: 100vw;
  height: 480px;
  position: relative;
`;

export default add;
