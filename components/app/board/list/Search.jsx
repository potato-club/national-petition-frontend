import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';

export const Search = () => {
  return (
    <SearchWrapper>
      <InputText placeholder="제목을 입력해주세요" />
      <SearchButton>
        <TypoGraphy type="body1" color={customColor.white} textAlign="center">
          검색
        </TypoGraphy>
      </SearchButton>
    </SearchWrapper>
  );
};

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
  width: 240px;
  padding: 0;
  margin: 0;
  :focus {
    outline: none;
  }
  padding-left: 5px;
`;
const SearchButton = styled.button`
  border: none;
  height: 100%;
  width: 60px;
  background-color: ${customColor.blue};
  cursor: pointer;

  padding: 0;
  margin: 0;
`;
