import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { ApplyItem } from './ApplyItem';
import { Pagination } from '@mui/material';

import { commentApi } from 'apis';
import { useToasts } from 'react-toast-notifications';
import { getErrorMessage } from 'util/index';

const PAGE_SIZE = 5;
const NONE_USER = -1;

export const ApplyPagination = React.memo(({
  commentId,
  page,
  setPage,
  applyAddUpdate,
  userId,
}) => {
  const [applyList, setApplyList] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPageUpdate, setCurrentPageUpdate] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    getList(page);
  }, [page, currentPageUpdate]);

  useEffect(() => {
    getEndList();
  }, [applyAddUpdate]);

  const getList = async (page) => {
    const {
      data: { data: applyItem },
    } = await commentApi.applyList(commentId, {
      page: page,
      size: PAGE_SIZE,
      parentId: commentId,
    });

    setApplyList(applyItem.contents);
    setTotalPage(applyItem.totalPages);
  };

  const getEndList = async () => {
    const {
      data: {
        data: { totalPages },
      },
    } = await commentApi.applyList(commentId, {
      page: 1,
      size: PAGE_SIZE,
      parentId: commentId,
    });

    const {
      data: { data: applyItem },
    } = await commentApi.applyList(commentId, {
      page: totalPages,
      size: PAGE_SIZE,
      parentId: commentId,
    });

    setPage(applyItem.totalPages);
    setTotalPage(applyItem.totalPages);
    setApplyList(applyItem.contents);
  };

  const deleteApplyItem = async (commentId) => {
    try {
      await commentApi.delete(commentId);

      setCurrentPageUpdate((cur) => !cur);
      addToast('답글이 삭제되었습니다', { appearance: 'success' });
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };

  const editApplyItem = async (commentId, content) => {
    try {
      await commentApi.edit({ commentId, content: content });

      setCurrentPageUpdate((cur) => !cur);
      addToast('답글이 수정되었습니다', { appearance: 'success' });
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };

  return (
    <Wrapper>
      {applyList.map(
        ({ commentId, content, createdAt, nickName, memberId }) => (
          <ApplyItem
            key={commentId}
            userId={userId}
            commentId={commentId}
            content={content}
            createdAt={createdAt}
            nickName={nickName}
            memberId={memberId}
            deleteApplyItem={deleteApplyItem}
            editApplyItem={editApplyItem}
          />
        ),
      )}
      <PaginationWrapper>
        <Pagination
          count={totalPage}
          onChange={(e, value) => setPage(value)}
          page={page}
          shape="rounded"
          color="primary"
          siblingCount={3}
        />
      </PaginationWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  background-color: ${customColor.grayBg};
  padding: 16px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
