import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy, ListItem } from 'components/common/index';
import { customColor } from 'constants/index';
import { Pagination } from '@mui/material';

export const BoardList = ({ listData }) => {
  const postPerPage = 10;
  const [allPage] = useState(Math.ceil(listData.length / postPerPage));
  const [currentPost, setCurrentPost] = useState(
    listData.slice(0, postPerPage),
  );

  const handleChange = (e, value) => {
    setCurrentPost(
      listData.slice(value * postPerPage - postPerPage, value * postPerPage),
    );
  };
  return (
    <Container>
      <ListWrapper>
        <ListNav>
          <NavCategory>
            <TypoGraphy
              type="body1"
              color={customColor.black}
              textAlign="center"
              fontWeight="bold">
              카테고리
            </TypoGraphy>
          </NavCategory>
          <NavTitle>
            <TypoGraphy
              type="body1"
              color={customColor.black}
              textAlign="center"
              fontWeight="bold">
              제목
            </TypoGraphy>
          </NavTitle>
          <NavSubNumber>
            <TypoGraphy
              type="body1"
              color={customColor.black}
              textAlign="center"
              fontWeight="bold">
              조회수
            </TypoGraphy>
          </NavSubNumber>
          <NavDay>
            <TypoGraphy
              type="body1"
              color={customColor.black}
              textAlign="center"
              fontWeight="bold">
              등록일
            </TypoGraphy>
          </NavDay>
          <NavGraph>
            <TypoGraphy
              type="body1"
              color={customColor.black}
              textAlign="center"
              fontWeight="bold">
              찬성률
            </TypoGraphy>
          </NavGraph>
        </ListNav>
        <List>
          {currentPost.map(
            ({
              id,
              category,
              title,
              subTitle,
              subNumber,
              day,
              agreePer,
              disagreePer,
              comment,
            }) => (
              <ListItem
                key={id}
                category={category}
                title={title}
                subTitle={subTitle}
                subNumber={subNumber}
                day={day}
                agreePer={agreePer}
                disagreePer={disagreePer}
                comment={comment}
              />
            ),
          )}
        </List>
      </ListWrapper>
      <PaginationWrapper>
        <Pagination
          count={allPage}
          onChange={handleChange}
          shape="rounded"
          color="primary"
        />
      </PaginationWrapper>
    </Container>
  );
};
const Container = styled.div``;
const ListWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border-top: 6px solid ${customColor.blue};
  border-bottom: 6px solid ${customColor.blue};
`;
const ListNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${customColor.black};
  height: 50px;
`;

const NavCategory = styled.div`
  width: 13%;
`;
const NavTitle = styled.div`
  width: 61%;
`;
const NavSubNumber = styled.div`
  width: 8%;
`;
const NavDay = styled.div`
  width: 8%;
`;
const NavGraph = styled.div`
  width: 10%;
`;

const List = styled.div``;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 100px;
`;
