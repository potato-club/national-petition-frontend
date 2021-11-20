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
import { Search, Category } from 'components/app/board/list';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { boardApi } from 'apis';

//sort=viewCounts & sort=likeCounts
const list = () => {
  const [handleDrop, setHandleDrop] = useState(false);
  const [sortPosition, setSortPosition] = useState('최신순');
  const [boardList, setBoardList] = useState([]);
  const [listCount, setListCount] = useState(0);
  const [sortBoardApi, setSortBoardApi] = useState(undefined);
  const [currentPost, setCurrentPost] = useState(1);
  const [SearchData, setSearchData] = useState('');
  const [category, setCategory] = useState('');
  const categoryTopList = [
    '전체',
    '정치개혁',
    '외교/통일/국방',
    '일자리',
    '미래',
    '성장동력',
    '농산어촌',
    '보건복지',
    '육아/교육',
    '안전/환경',
  ];
  const categoryBottomList = [
    '저출산/고령화대책',
    '행정',
    '반려동물',
    '교통/건축/국토',
    '경제민주화',
    '인권/성평등',
    '문화/예술/체육/언론',
    '기타',
  ];

  const handleSort = (e) => {
    if (e.target.innerText === '최신순') setSortBoardApi(undefined);
    else if (e.target.innerText === '조회순') setSortBoardApi('viewCounts');
    else if (e.target.innerText === '추천순') setSortBoardApi('likeCounts');
    setSortPosition(e.target.innerText);
  };

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
          category: category,
        });

        setListCount(Math.ceil(count / 10));
        setBoardList(list);
      } catch (e) {}
    })();
  }, [currentPost]);

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
          category: category,
        });

        setCurrentPost(1);

        setListCount(Math.ceil(count / 10));
        setBoardList(list);
      } catch (e) {}
    })();
  }, [sortBoardApi, SearchData, category]);

  const handlePageChange = (value) => {
    setCurrentPost(value);
  };
  const handleCategory = (value) => {
    switch (value) {
      case '전체':
        setCategory('');
        break;
      case '정치개혁':
        setCategory('POLITICS');
        break;
      case '외교/통일/국방':
        setCategory('DIPLOMACY');
        break;
      case '일자리':
        setCategory('JOB');
        break;
      case '미래':
        setCategory('FUTURE');
        break;
      case '성장동력':
        setCategory('GROWTH');
        break;
      case '농산어촌':
        setCategory('FARM');
        break;
      case '보건복지':
        setCategory('HEALTH');
        break;
      case '육아/교육':
        setCategory('BABY');
        break;
      case '안전/환경':
        setCategory('SAFE');
        break;
      case '저출산/고령화대책':
        setCategory('AGING');
        break;
      case '행정':
        setCategory('ADMINISTRATION');
        break;
      case '반려동물':
        setCategory('PET');
        break;
      case '교통/건축/국토':
        setCategory('TRAFFIC');
        break;
      case '경제민주화':
        setCategory('ECONOMY');
        break;
      case '인권/성평등':
        setCategory('HUMAN');
        break;
      case '문화/예술/체육/언론':
        setCategory('CULTURE');
        break;
      case '기타':
        setCategory('ETC');
        break;
    }
  };
  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="국민청원 소통방" />
      <Container>
        <SearchAndSortWrapper>
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
        </SearchAndSortWrapper>
        <CategorySection>
          <CategoryWrapper>
            {categoryTopList.map((text, i) => (
              <Category
                key={i}
                category={category}
                handleCategory={handleCategory}
                text={text}
              />
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            {categoryBottomList.map((text, i) => (
              <Category
                key={i}
                category={category}
                handleCategory={handleCategory}
                text={text}
              />
            ))}
          </CategoryWrapper>
        </CategorySection>
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

const SearchAndSortWrapper = styled.div`
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
const CategorySection = styled.div`
  border-top: 6px solid ${customColor.blue};
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default list;
