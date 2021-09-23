import React from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

const add = () => {
  return (
    <LayoutContainer>
      <IntroHeader />
      <FormBox>
        <InputContentBox>
          <TypoGraphy type="h1" fontWeight="bold">
            제목
          </TypoGraphy>
          <Input placeholder="제목을 입력하세요" />
          <TypoGraphy type="h1" fontWeight="bold">
            청원 링크
          </TypoGraphy>
          <Input placeholder="https://" />
          <TypoGraphy type="h1" fontWeight="bold">
            나의 의견
          </TypoGraphy>
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
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -406px;
  margin-left: -589px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  background-color: white;
`;
const Input = styled.input`
  width: 1178px;
  height: 40px;
  background-color: #f6f6f6;
  border: 1px solid gray;
  margin-bottom: 16px;
  border-radius: 4px;
  font-size: 18px;
`;
const InputContentBox = styled.div``;
const OpinionInput = styled.textarea`
  width: 1178px;
  height: 500px;
  font-size: 20px;
  background-color: #f6f6f6;
  border-radius: 4px;
  resize: none;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
  margin: auto;
  margin-top: 20px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid gray;
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
    background-color: white;
    &:hover {
    background-color: ${customColor.deepBlue};
    color:white;
    opacity: 0.9;
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
