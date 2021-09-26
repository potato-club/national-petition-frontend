import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  TitleHeader,
} from 'components/common/index';
import { customColor } from 'constants/index';
import { Search, ListItem } from 'components/app/board/list';
import { RiArrowDropDownLine } from 'react-icons/ri';
import dummy from '../../dummy/list.json';
import { Pagination } from '@mui/material';

const list = () => {
  const [handleDrop, setHandleDrop] = useState(false);
  const [sortPosition, setSortPosition] = useState('최신순');

  const postPerPage = 10;
  const [allPage] = useState(Math.ceil(dummy.length / postPerPage));
  const [currentPost, setCurrentPost] = useState(dummy.slice(0, postPerPage));

  const handleChange = (e, value) => {
    setCurrentPost(
      dummy.slice(value * postPerPage - postPerPage, value * postPerPage),
    );
  };

  const handleSort = (e) => {
    setSortPosition(e.target.innerText);
  };
  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="국민청원 소통방" />
      <Container>
        <ListUpperWrapper>
          <Search />
          <SortWrapper
            onClick={() => setHandleDrop((handleDrop) => !handleDrop)}>
            <TypoGraphy
              type="body1"
              color={customColor.white}
              textAlign="center">
              {sortPosition}
            </TypoGraphy>
            <RiArrowDropDownLine
              style={{
                display: 'flex',
                fontSize: '30px',
                justifyContent: 'center',
                cursor: 'pointer',
                color: customColor.white,
                transform: handleDrop ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ',
              }}
            />
            {handleDrop && (
              <SortList>
                <SortButton onClick={handleSort}>
                  <TypoGraphy
                    type="body1"
                    color={customColor.black}
                    textAlign="center">
                    최신순
                  </TypoGraphy>
                </SortButton>
                <SortButton onClick={handleSort}>
                  <TypoGraphy
                    type="body1"
                    color={customColor.black}
                    textAlign="center">
                    조회순
                  </TypoGraphy>
                </SortButton>
                <SortButton onClick={handleSort}>
                  <TypoGraphy
                    type="body1"
                    color={customColor.black}
                    textAlign="center">
                    추천순
                  </TypoGraphy>
                </SortButton>
              </SortList>
            )}
          </SortWrapper>
        </ListUpperWrapper>

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

        <ListLowerWrapper>
          <Search />
        </ListLowerWrapper>
        <PaginationWrapper>
          <Pagination
            count={allPage}
            onChange={handleChange}
            shape="rounded"
            color="primary"
          />
        </PaginationWrapper>
      </Container>
    </LayoutContainer>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 1178px;
  margin-left: auto;
  margin-right: auto;
`;

const ListUpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;
const SortWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 30px;
  padding-left: 15px;
  background-color: ${customColor.blue};
  cursor: pointer;
`;

const SortList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${customColor.blue};
  top: 30px;
  left: 0;
  width: 100px;
  height: 90px;
  background-color: ${customColor.white};
`;

const SortButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 30px;
  :hover {
    background-color: ${customColor.grayBg};
  }
`;

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

const ListLowerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 100px;
`;
export default list;
