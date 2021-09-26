import React, { useState } from 'react';
import { LayoutContainer, TypoGraphy, Header } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

const profile = () => {
  const [userName, setUserName] = useState('박상훈');
  const [userNickName, setUserNickName] = useState('스폰지밥');
  const [userEmail, setUserEmail] = useState('bigyou00@gmail.com');

  // 모달 띄울 것
  const qqqqqqmodal = () => {
    alert('');
  };
  return (
    <LayoutContainer>
      <ProfileBox>
        {/* <Header /> */}
        <TypoGraphy type="Head" color={customColor.black}>
          내 정보 보기
        </TypoGraphy>
        <ProfileForm>
          <FormHeader>
            <SayHi>
              <TypoGraphy type="Head" color={customColor.black}>
                {userName}
              </TypoGraphy>
              <TypoGraphy type="h1" color={customColor.black} fontWeight="bold">
                님, 안녕하세요!
              </TypoGraphy>
            </SayHi>
            <TypoGraphy type="body1" color={customColor.gray}>
              당신의 안녕을 기원합니다.
            </TypoGraphy>
          </FormHeader>
          <TextDiv>
            <TypoGraphy type="h1" color={customColor.black}>
              이름 : {userName}
            </TypoGraphy>
            <Line />
            <TypoGraphy type="h1" color={customColor.black}>
              닉네임 :{userNickName}
            </TypoGraphy>
            <Line />
            <TypoGraphy type="h1" color={customColor.black}>
              이메일 : {userEmail}
            </TypoGraphy>
            <Line />
            <TypoGraphy type="h1" color={customColor.black}>
              내가 쓴 글
            </TypoGraphy>
            <Line />
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>
            <p>링크 : 화이자 백신, 부작용에 대하여</p>

            <p>링크 : 화이자 백신, 부작용에 대하여</p>

            <p>링크 : 화이자 백신, 부작용에 대하여</p>

            <p>링크 : 화이자 백신, 부작용에 대하여</p>

            <p>링크 : 화이자 백신, 부작용에 대하여</p>
          </TextDiv>
          <ButtonBox>
            <Button logout onClick={qqqqqqmodal}>
              로그아웃
            </Button>
            <Button resign onClick={qqqqqqmodal}>
              탈퇴하기
            </Button>
          </ButtonBox>
        </ProfileForm>
      </ProfileBox>
    </LayoutContainer>
  );
};

export default profile;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99vw;
  user-select: none;
`;
const ProfileForm = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 1178px;
  height: auto;
  border: 1px solid black;
  margin-bottom: 80px;
  border-radius: 4px;
  box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
`;
const FormHeader = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SayHi = styled.div`
  display: flex;
  align-items: baseline;
`;

const TextDiv = styled.div`
  width: 1000px;
`;

const Line = styled.hr`
  margin-bottom: 32px;
`;

const ButtonBox = styled.div`
  width: 360px;
  /* height: auto; */
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  border-radius: 4px;
  border: none;

  ${(props) =>
    props.logout &&
    `
    background:${customColor.deepBlue};
    opacity: 0.9;
    color:white;
    &:hover {
    opacity: 1;
    }
    `}
  ${(props) =>
    props.resign &&
    `
    opacity: 1;

    &:hover {
      opacity: 0.7;
    }
    `}
`;
