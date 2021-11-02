import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy, ListItem } from 'components/common/index';
import { customColor } from 'constants/index';
import { Pagination } from '@mui/material';

/* 
boardCommentCounts: 0
boardId: 11676
boardLikeCounts: 0
boardUnLikeCounts: 0
category: null
content: "목 데이터 내용 96826"
createdDate: "2021-10-10 09:46:00"
memberId: 1
petitionContent: "\n\t\t\t\t\t\t\t\t\t\t5 살3 살 손자가 있습니다 3 살짜리는  좀활발해서  요즘뉴스가너무  끔찍해서 이제껏 않보내다 이제 보내는데 아이가 가기 싫어해서 불안 합니다\n  이때   어린이 인격 형성에 많은영향을 끼치는데 \n 제발 안심하게 보낼수 있게 도와 주세요  제가 회사 다닐때 노동부에서 돈 받는다고 쓸데없는교육도 정기적으로 받았는데 그런돈 이런데 좀쓰세요\t\t\t\t\t\t\t\t\t"
petitionTitle: "도와주세요"
petitionUrl: "https://www1.president.go.kr/petitions/560722"
petitionsCount: "1"
title: "목데이터 제목 404258"
viewCounts: 0 
*/

export const BoardList = ({
  listData,
  handlePageChange,
  currentPost,
  listCount,
}) => {
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
          {listData.length === 0 ? (
            <NoListWrapper>
              <TypoGraphy
                type="h1"
                color={customColor.black}
                textAlign="center">
                검색결과가 없습니다
              </TypoGraphy>
            </NoListWrapper>
          ) : (
            listData.map(
              ({
                boardId,
                category,
                petitionTitle, // subTitle
                viewCounts,
                title,
                createdDate,
                boardLikeCounts,
                boardUnLikeCounts,
                boardCommentCounts,
              }) => (
                <ListItem
                  key={boardId}
                  boardId={boardId}
                  category={category}
                  petitionTitle={petitionTitle}
                  subTitle={title}
                  viewCounts={viewCounts}
                  createdDate={createdDate}
                  boardLikeCounts={boardLikeCounts}
                  boardUnLikeCounts={boardUnLikeCounts}
                  boardCommentCounts={boardCommentCounts}
                />
              ),
            )
          )}
        </List>
      </ListWrapper>
      <PaginationWrapper>
        <Pagination
          count={listCount}
          onChange={(e, value) => {
            handlePageChange(value);
          }}
          page={currentPost}
          shape="rounded"
          color="primary"
          siblingCount={3}
        />
      </PaginationWrapper>
    </Container>
  );
};
const Container = styled.div``;
const ListWrapper = styled.div`
  margin-bottom: 20px;
  border-top: 6px solid ${customColor.blue};
  border-bottom: 6px solid ${customColor.blue};

  min-height: 960px;
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

const NoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
