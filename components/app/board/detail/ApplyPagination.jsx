import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { ApplyItem } from './ApplyItem';
import { Pagination } from '@mui/material';

export const ApplyPagination = () => {
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
          page={1}
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
