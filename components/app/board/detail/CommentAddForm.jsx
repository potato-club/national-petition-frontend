import React, { useState } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';

export const CommentAddForm = ({ onSubmit, type = 'add', content = '' }) => {
  const [comment, setComment] = useState(content);

  const submitComment = async () => {
    await onSubmit(comment);

    setComment('');
  };

  return (
    <Wrapper>
      <InputComment
        placeholder="무분별한 악플은 자제해주세요"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Divider />
      <AddButton onClick={submitComment}>
        <TypoGraphy type="body1" color={customColor.white}>
          {type === 'add' ? '등록' : '수정'}
        </TypoGraphy>
      </AddButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${customColor.white};
  border: 1px solid ${customColor.grayBg};
  border-radius: 2px;
  margin-bottom: 16px;
  margin-top: 16px;
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
