import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  TitleHeader,
} from 'components/common/index';
import { customColor } from 'constants/index';

import { RiArrowDropDownLine } from 'react-icons/ri';

//검색상자 나중에 컴포넌트로 뺄것
//글자 typoGraphy씌울것
const list = () => {
  const [handleDrop, setHandleDrop] = useState(false);
  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="국민청원 소통방" />
      <Container>
        <ListUpperWrapper>
          <SearchWrapper>
            <InputText />
            <SearchButton>검색</SearchButton>
          </SearchWrapper>
          <SortWrapper
            onClick={() => setHandleDrop((handleDrop) => !handleDrop)}>
            추천순
            <RiArrowDropDownLine
              style={{
                display: 'flex',
                fontSize: '30px',
                justifyContent: 'center',
                cursor: 'pointer',
                transform: handleDrop ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ',
              }}
            />
          </SortWrapper>
        </ListUpperWrapper>
        <List></List>
        <ListLowerWrapper></ListLowerWrapper>
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
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 30px;

  border: 1px solid ${customColor.blue};
`;
const InputText = styled.input`
  border: none;
  height: 100%;
  width: 80%;
`;
const SearchButton = styled.button`
  border: none;
  height: 100%;
  width: 20%;
  background-color: ${customColor.blue};
  color: ${customColor.white};
  cursor: pointer;
`;
const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 30px;
  padding-left: 15px;
  background-color: ${customColor.blue};
  color: ${customColor.white};
  cursor: pointer;
`;

const List = styled.div``;

const ListLowerWrapper = styled.div``;

export default list;
