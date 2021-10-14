import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CommentItem } from './CommentItem';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';
import { commentApi } from 'apis';

const PAGE_LIMIT = 15;

export const CommentList = ({ boardId }) => {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    (async () => {
      await addPage();
    })();
  }, []);

  useEffect(() => {
    console.log(commentList);
  }, [commentList]);

  const addPage = async () => {
    const {
      data: { data: list },
    } = await commentApi.list(boardId, { page, size: PAGE_LIMIT, boardId });

    setCommentList((cur) => cur.concat(...list.contents));
    setPage((cur) => cur + 1);
  };

  return (
    <Wrapper>
      {commentList.map(
        (
          { commentId, memberId, content, depth, childrenCounts, createdAt },
          index,
        ) => (
          <CommentItem
            key={commentId}
            commentId={commentId}
            memberId={memberId}
            depth={depth}
            childrenCounts={childrenCounts}
            createdAt={createdAt}
            content={content}
          />
        ),
      )}
      <MoreCommentButton onClick={addPage}>
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
