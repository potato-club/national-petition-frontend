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
import { myInformation } from 'recoil/atom';
import { useRecoilValue } from 'recoil';
import { TotalNotification } from 'components/app/user/profile';
import { BsFillTagFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaUserCircle, FaUserGraduate } from 'react-icons/fa';

const profile = () => {
  const userInfo = useRecoilValue(myInformation);
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
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };

  const deleteMe = async () => {
    try {
      await memberApi.delete();
      setDeleteModal(false);
      router.push('/user/login');
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };

  const nowLogout = async () => {
    try {
      await memberApi.logout();
      tokenHelper.setIdToken('');
      setLogoutModal(false);
      router.push('/');
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };

  useEffect(() => {
    fetchMyPost();
  }, [currentPost]);

  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title="??? ?????? ??????" top5Visible={false} />
      <BoxBody>
        <TotalNotification />
      </BoxBody>
      <BoxBody>
        <FlexBox>
          <ProfilePhotoBox>
            <FaUserGraduate size="128" color={customColor.gray} />
          </ProfilePhotoBox>
          <ContentBox>
            <AttributeBox>
              <FaUserCircle size="24" color={customColor.gray} />
              <Value>
                <TypoGraphy type="h1" color={customColor.black}>
                  {userInfo.name}
                </TypoGraphy>
              </Value>
            </AttributeBox>
            <AttributeBox>
              <BsFillTagFill size="24" color={customColor.gray} />
              <Value>
                <TypoGraphy type="h1" color={customColor.black}>
                  {userInfo.nickName}
                </TypoGraphy>
              </Value>
            </AttributeBox>
            <AttributeBox>
              <MdEmail size="24" color={customColor.gray} />
              <Value>
                <TypoGraphy type="h1" color={customColor.black}>
                  {userInfo.email}
                </TypoGraphy>
              </Value>
            </AttributeBox>
          </ContentBox>
        </FlexBox>
        <ButtonBox>
          <Button logout onClick={() => setLogoutModal(true)}>
            ????????????
          </Button>
          <Button resign onClick={() => setDeleteModal(true)}>
            ????????????
          </Button>
        </ButtonBox>
      </BoxBody>
      <BoxBody>
        <TypoGraphy type="h1" color={customColor.black} fontWeight="bold">
          ?????? ??? ???
        </TypoGraphy>
        <Gap />
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
        content={'????????? ???????????? ??????????'}
      />
      <MessageModal
        visible={logoutModal}
        onConfirm={nowLogout}
        onClose={() => setLogoutModal(false)}
        content={'???????????? ????????????????'}
      />
    </LayoutContainer>
  );
};

export default profile;

const BoxBody = styled.div`
  width: 1024px;
  padding: 24px;
  margin: 32px auto;
  border-radius: 4px;
  background-color: ${customColor.white};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
`;

const ButtonBox = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
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
  align-items: center;

  margin-bottom: 6px;
  margin-top: 6px;
  margin-right: auto;
`;
const Value = styled.div`
  margin-left: 8px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Gap = styled.div`
  margin-top: 24px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfilePhotoBox = styled.div`
  border-radius: 4px;
  padding: 8px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
