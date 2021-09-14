import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer } from 'components/common';
// 등록 페이지
const add = () => {
  return (
    <LayoutContainer>
      <Box>
        <PTag>제목</PTag>
        <InputBox placeholder="제목을 입력하세요" />
        <PTag>청원링크</PTag>
        <InputBox placeholder="https://" />
        <PTag>나의 의견</PTag>
        <InputBox placeholder="의견을 적으세요" />
        <ButtonBox>
          <Button>작성 완료</Button>
          <Button>작성 취소</Button>
        </ButtonBox>
      </Box>
    </LayoutContainer>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PTag = styled.p``;
const InputBox = styled.input`
  width: 1178px;
  height: 40px;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 20px;
  width: 240px;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
`;
export default add;
