import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';

export const CommentAddForm = () => {
  return (
    <Wrapper>
      <InputComment placeholder="무분별한 악플은 자제해주세요" />
      <Divider />
      <AddButton>
        <TypoGraphy type="body1" color={customColor.white}>
          등록
        </TypoGraphy>
      </AddButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${customColor.white};
  border: 1px solid ${customColor.gray};
`;

const NickNameForm = styled.div`
  padding-left: 2px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

const InputComment = styled.textarea`
  width: 800px;
  height: 56px;
  margin-top: 16px;
  outline: none;
  border: none;
  resize: none;
  font-size: 14px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Divider = styled.div`
  background-color: ${customColor.grayBg};
  height: 1px;
  margin-top: 16px;
`;

const AddButton = styled.div`
  background-color: ${customColor.deepBlue};
  cursor: pointer;
  margin-left: auto;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
`;
