import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';

export const UrlInput = () => {
  return (
    <EnrollmentWrapper>
      <UrlTitle>
        <TypoGraphy type="h1" color={customColor.black} textAlign="center">
          URL
        </TypoGraphy>
      </UrlTitle>
      <InputUrl placeholder="청원 글의 URL을 넣어주세요."></InputUrl>
      <EnrollmentButton>
        <TypoGraphy type="h3" color={customColor.white} textAlign="center">
          등록
        </TypoGraphy>
      </EnrollmentButton>
    </EnrollmentWrapper>
  );
};

const EnrollmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 70px;
  padding: 10px 15px;
  background-color: ${customColor.white};
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const UrlTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  border-right: 2px solid ${customColor.grayBg};
`;
const InputUrl = styled.input`
  width: 75%;
  height: 100%;
  font-size: 20px;
  border: none;
  :focus {
    outline: none;
  }
`;
const EnrollmentButton = styled.button`
  border: none;
  padding: 15px 25px;
  background-color: ${customColor.skyBlue};
  cursor: pointer;
  width: 13%;
  border-radius: 20px;
`;
