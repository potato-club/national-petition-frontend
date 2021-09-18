import React from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

const add = () => {
  return (
    <LayoutContainer>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 1178px;
  height: 40px;
  background-color: #f6f6f6;
  border: 1px solid gray;
  margin-bottom: 16px;
`;
const InputContentBox = styled.div`
  margin-top: 40px;
`;
const OpinionInput = styled.textarea`
  width: 1178px;
  height: 500px;
  font-size: 18px;
  background-color: #f6f6f6;
  resize: none;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 20px;
  width: 360px;
  justify-content: space-between;
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
    color:white;
    &:hover {
    /* transform: scale(1.1); */
    opacity: 0.9;
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

export default add;
