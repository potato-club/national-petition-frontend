import React from 'react';
import styled from '@emotion/styled';
import { CommentItem } from './CommentItem';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';

export const CommnetList = () => {
  return (
    <Wrapper>
      <CommentItem />
      <MoreCommentButton>
        <TypoGraphy color={customColor.white}>댓글 더보기</TypoGraphy>
      </MoreCommentButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MoreCommentButton = styled.div`
  background-color: ${customColor.deepBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 16px;
`;
