import React, { useState } from 'react';
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

const list = () => {
  const [handleDrop, setHandleDrop] = useState(false);
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
              추천순
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
                찬반 그래프
              </TypoGraphy>
            </NavGraph>
          </ListNav>
          <List>
            {dummy.map(
              ({
                id,
                category,
                title,
                subTitle,
                subNumber,
                day,
                agreePer,
                disagreePer,
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
                />
              ),
            )}
          </List>
        </ListWrapper>

        <ListLowerWrapper>
          <Search />
        </ListLowerWrapper>
        {/* 페이지네이션 */}
      </Container>
    </LayoutContainer>
  );
};

const Container = styled.div`
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 30px;
  padding-left: 15px;
  background-color: ${customColor.blue};
  cursor: pointer;
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

export default list;
