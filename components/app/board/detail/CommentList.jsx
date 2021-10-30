import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CommentItem } from './CommentItem';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';
import { commentApi, memberApi } from 'apis';
import { useRecoilState } from 'recoil';
import { boardCommentList } from 'recoil/atom';

const PAGE_LIMIT = 15;
const NONE_USER = -1;

export const CommentList = ({ boardId, commentReset }) => {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useRecoilState(boardCommentList);
  const [userId, setUserId] = useState(NONE_USER);

  useEffect(() => {
    init();
  }, [commentReset]);

  const addPage = async () => {
    const {
      data: { data: list },
    } = await commentApi.list(boardId, { page, size: PAGE_LIMIT, boardId });

    setCommentList((cur) => cur.concat(...list.contents));
    setPage((cur) => cur + 1);
  };

  const init = async () => {
    const {
      data: { data: list },
    } = await commentApi.list(boardId, { page: 1, size: PAGE_LIMIT, boardId });

    setPage(2);
    setCommentList(list.contents);

    try {
      const {
        data: { data: userInfo },
      } = await memberApi.getInfo();

      setUserId(userInfo.memberId);
    } catch (e) {}
  };

  return (
    <Wrapper>
      {commentList.map(
        (
          {
            commentId,
            memberId,
            content,
            depth,
            childrenCounts,
            createdAt,
            nickName,
          },
          index,
        ) => (
          <CommentItem
            key={commentId}
            nickName={nickName}
            userId={userId}
            commentId={commentId}
            memberId={memberId}
            depth={depth}
            childrenCounts={childrenCounts}
            createdAt={createdAt}
            content={content}
            setCommentList={setCommentList}
            boardId={boardId}
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
