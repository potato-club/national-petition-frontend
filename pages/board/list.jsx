import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  TitleHeader,
  BoardList,
} from 'components/common/index';
import { customColor } from 'constants/index';
import { Search } from 'components/app/board/list';
import { RiArrowDropDownLine } from 'react-icons/ri';
// import dummy from '../../dummy/list.json';
import { boardApi } from 'apis';

//sort=viewCounts & sort=rootCommentsCount
const list = () => {
  const [handleDrop, setHandleDrop] = useState(false);
  const [sortPosition, setSortPosition] = useState('최신순');
  const [boardList, setBoardList] = useState([]);
  const [listCount, setListCount] = useState(0);
  const [sortBoardApi, setSortBoardApi] = useState(undefined);
  const [currentPost, setCurrentPost] = useState(1);
  const [SearchData, setSearchData] = useState('');

  const handleSort = (e) => {
    if (e.target.innerText === '최신순') setSortBoardApi(undefined);
    else if (e.target.innerText === '조회순') setSortBoardApi('viewCounts');
    else if (e.target.innerText === '추천순')
      setSortBoardApi('rootCommentsCount');
    setSortPosition(e.target.innerText);
  };
  //예외처리
  //1. 리스트 불러오지 못했을경우
  //2. 검색결과가 없을경우
  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            data: { boardList: list, boardCounts: count },
          },
        } = await boardApi.list({
          search: SearchData,
          page: currentPost,
          size: 10,
          sort: sortBoardApi,
        });
        console.log('Search::', SearchData);
        console.log('count::', count);
        console.log('LIST :: ', list);
        setListCount(Math.ceil(count / 10));
        setBoardList(list);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [currentPost, SearchData]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            data: { boardList: list, boardCounts: count },
          },
        } = await boardApi.list({
          search: SearchData,
          page: 1,
          size: 10,
          sort: sortBoardApi,
        });

        setCurrentPost(1);

        console.log('Search::', SearchData);
        console.log('count:::', count);
        console.log('LIST ::: ', list);

        setListCount(Math.ceil(count / 10));
        setBoardList(list);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [sortBoardApi]);

  const handlePageChange = (value) => {
    setCurrentPost(value);
  };

  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="국민청원 소통방" />
      <Container>
        <ListUpperWrapper>
          <Search setSearchData={setSearchData} />
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

        <BoardList
          listData={boardList}
          handlePageChange={handlePageChange}
          currentPost={currentPost}
          listCount={listCount}
        />
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

export default list;
