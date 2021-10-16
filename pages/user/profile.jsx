import React, { useState, useEffect } from 'react';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  TitleHeader,
  BoardList,
  MessageModal,
} from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import dummy from '../../dummy/list.json';
import { memberApi } from 'apis/index';
import router from 'next/router';

const profile = () => {
  const [userName, setUserName] = useState('사용자이름');
  const [userNickName, setUserNickName] = useState('별명');
  const [userEmail, setUserEmail] = useState('bigyou00@gmail.com');

  const [myPostList, setMyPostList] = useState([]);

  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const myPage = 0;
  const pageSize = 1;

  const fetchProfile = async () => {
    try {
      const {
        data: { data: myInfo },
      } = await memberApi.getInfo();
      const { name, email, nickName } = myInfo;
      setUserName(name);
      setUserNickName(nickName);
      setUserEmail(email);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMyPost = async () => {
    try {
      const {
        data: { data: myList },
      } = await memberApi.boardList({ myPage, pageSize });
      // 일단 무슨 값인지 확인하기
      console.log(myList);
      setMyPostList(myList);
    } catch (error) {
      console.log(error);
    }
  };
  // 정말로 삭제하실 건가요? 했을 때 yes 하면 실행하기
  const deleteMe = async () => {
    try {
      // 동철이가 커스텀해주면 그때 넘길 것임
      await memberApi.delete();
      setDeleteModal(false);
      router.push('/user/login');
    } catch (error) {
      console.log(error);
    }
  };
  // 로그아웃 API
  const nowLogout = async () => {
    try {
      const { data: all } = await memberApi.logout();
      console.log('로그아웃 API');
      console.log(all);
      setLogoutModal(false);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    // fetchMyPost();
  }, []);
  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="내 정보 보기" top5Visible={false} />
      <BoxHeader>
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
      </BoxHeader>
      <BoxBody>
        <AttributeBox>
          <Attribute>
            <TypoGraphy type="h1" color={customColor.black} fontWeight="bold">
              이 름 &nbsp;&nbsp;:{' '}
            </TypoGraphy>
          </Attribute>
          <Value>
            <TypoGraphy type="h1" color={customColor.black}>
              {userName}
            </TypoGraphy>
          </Value>
        </AttributeBox>

        <Line />
        <AttributeBox>
          <Attribute>
            <TypoGraphy type="h1" color={customColor.black} fontWeight="bold">
              닉네임 :{' '}
            </TypoGraphy>
          </Attribute>
          <Value>
            <TypoGraphy type="h1" color={customColor.black}>
              {userNickName}
            </TypoGraphy>
          </Value>
        </AttributeBox>
        <Line />
        <AttributeBox>
          <Attribute>
            <TypoGraphy type="h1" color={customColor.black} fontWeight="bold">
              이메일 :{' '}
            </TypoGraphy>
          </Attribute>

          <Value>
            <TypoGraphy type="h1" color={customColor.black}>
              {userEmail}
            </TypoGraphy>
          </Value>
        </AttributeBox>
        <Line />
        <ButtonBox>
          <Button logout onClick={() => setLogoutModal(true)}>
            로그아웃
          </Button>
          <Button resign onClick={() => setDeleteModal(true)}>
            탈퇴하기
          </Button>
        </ButtonBox>
      </BoxBody>
      <BoxBody>
        <TypoGraphy type="h1" color={customColor.black} fontWeight="bold">
          내가 쓴 글
        </TypoGraphy>

        {/* <BoardList listData={dummy} /> */}
      </BoxBody>
      <MessageModal
        visible={deleteModal}
        onConfirm={deleteMe}
        content={'정말로 탈퇴하실 건가요?'}
      />
      <MessageModal
        visible={logoutModal}
        onConfirm={nowLogout}
        content={'로그아웃 하실건가요?'}
      />
    </LayoutContainer>
  );
};

export default profile;

const ProfileBox = styled.div`
  width: 1178px;
  height: auto;
  border: 1px solid ${customColor.gray};
  margin: 80px auto;
  border-radius: 4px;
  user-select: none;
  box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  background-color: ${customColor.grayBg};
`;
const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
`;
const SayHi = styled.div`
  display: flex;
  align-items: baseline;
`;

const BoxBody = styled.div`
  width: 1000px;
  padding: 20px;
  margin: 32px auto;
  border-radius: 4px;
  background-color: ${customColor.white};
  border: 1px solid ${customColor.gray};
  box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  background-color: ${customColor.grayBg};
`;

const Line = styled.hr`
  margin: 20px auto;
`;

const ButtonBox = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin: 12px auto;
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

const AttributeBox = styled.div`
  display: flex;
  align-items: baseline;
`;
const Value = styled.div`
  margin-left: 16px;
`;
const Attribute = styled.div`
  width: 90px;
`;
