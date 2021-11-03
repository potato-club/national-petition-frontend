import React, { useState, useEffect } from 'react';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  TitleHeader,
  BoardList,
  MessageModal,
} from 'components/common';
import { getErrorMessage } from 'util/index';
import { useToasts } from 'react-toast-notifications';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { memberApi } from 'apis/index';
import router from 'next/router';
import { tokenHelper } from 'util/index';
import { myInfo } from 'recoil/atom';
import { useRecoilState } from 'recoil';

const profile = () => {
  const [userInfo, setUserInfo] = useRecoilState(myInfo);

  const [myPostList, setMyPostList] = useState([]);
  const [listCount, setListCount] = useState(0);
  const [currentPost, setCurrentPost] = useState(1);
  const pageSize = 10;
  const handlePageChange = (value) => {
    setCurrentPost(value);
  };

  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { addToast } = useToasts();

  const fetchMyPost = async () => {
    try {
      const {
        data: {
          data: { myBoardList: myList, boardCounts: totalSize },
        },
      } = await memberApi.boardList({
        page: currentPost,
        size: pageSize,
      });

      setMyPostList(myList);
      setListCount(Math.ceil(totalSize / pageSize));
    } catch (error) {
      addToast(getErrorMessage(error), '에러 발생', {
        appearance: 'error',
      });
    }
  };

  const deleteMe = async () => {
    try {
      await memberApi.delete();
      setDeleteModal(false);
      router.push('/user/login');
    } catch (error) {
      // addToast(getErrorMessage(error), '에러 발생', {
      //   appearance: 'error',
      // });
      console.log(error);
    }
  };

  const nowLogout = async () => {
    try {
      await memberApi.logout();
      tokenHelper.setIdToken('');
      setLogoutModal(false);
      router.push('/');
    } catch (error) {
      addToast(getErrorMessage(error), '에러 발생', {
        appearance: 'error',
      });
    }
  };

  useEffect(() => {
    fetchMyPost();
  }, [currentPost]);

  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="내 정보 보기" top5Visible={false} />
      <BoxHeader>
        <SayHi>
          <TypoGraphy type="Head" color={customColor.black}>
            {userInfo.name}
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
              {userInfo.name}
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
              {userInfo.nickName}
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
              {userInfo.email}
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

        <BoardList
          listData={myPostList}
          handlePageChange={handlePageChange}
          currentPost={currentPost}
          listCount={listCount}
        />
      </BoxBody>
      <MessageModal
        visible={deleteModal}
        onConfirm={deleteMe}
        onClose={() => setDeleteModal(false)}
        content={'정말로 탈퇴하실 건가요?'}
      />
      <MessageModal
        visible={logoutModal}
        onConfirm={nowLogout}
        onClose={() => setLogoutModal(false)}
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
