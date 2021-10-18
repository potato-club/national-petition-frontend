import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';
import { useRouter } from 'next/router';

export const UrlInput = () => {
  // 해당 url을 가지고 있는 state기억하기
  const [url, setUrl] = useState('');
  const router = useRouter();
  const moveToAdd = () => {
    // router에 쿼리로 url 넣어서 넘기고 그 페이지로 넘어가면 됨
    router.push({ pathname: '/board/add', query: { url: url } });
  };
  return (
    <EnrollmentWrapper>
      <UrlTitle>
        <TypoGraphy type="h1" color={customColor.black} textAlign="center">
          URL
        </TypoGraphy>
      </UrlTitle>
      <InputUrl
        placeholder="청원 글의 URL을 넣어주세요."
        value={url}
        onChange={(e) => setUrl(e.target.value)}></InputUrl>
      <EnrollmentButton onClick={moveToAdd}>
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
