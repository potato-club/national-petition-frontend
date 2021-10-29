import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { ApplyItem } from './ApplyItem';
import { Pagination } from '@mui/material';
import { commentApi } from 'apis';

const PAGE_SIZE = 10;

export const ApplyPagination = ({ commentId }) => {
  const [applyList, setApplyList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getList(page);
  }, [page]);

  const getList = async (page) => {
    const { data } = await commentApi.applyList(commentId, {
      page: page,
      size: PAGE_SIZE,
      parentId: commentId,
    });

    console.log(data);
  };

  return (
    <Wrapper>
      <ApplyItem />
      <ApplyItem />
      <ApplyItem />
      <ApplyItem />
      <PaginationWrapper>
        <Pagination
          count={10}
          onChange={(e, value) => {}}
          page={page}
          shape="rounded"
          color="primary"
          siblingCount={3}
        />
      </PaginationWrapper>
    </Wrapper>
  );
};

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
