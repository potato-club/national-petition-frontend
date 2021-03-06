import React, { useEffect, useState } from 'react';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  MessageModal,
} from 'components/common';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { customColor, settings } from 'constants/index';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { getQueryString, tokenHelper, isObjectEmpty } from 'util/index';
import { RegisterModal } from 'components/app/user/login';
import { memberApi } from 'apis/index';
import { useToasts } from 'react-toast-notifications';
import { getErrorMessage } from 'util/index';
import { myInformation } from 'recoil/atom';
import { useSetRecoilState } from 'recoil';

const login = () => {
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const router = useRouter();
  const { addToast } = useToasts();
  const setUserInfo = useSetRecoilState(myInformation);

  useEffect(() => {
    (() => {
      if (!isObjectEmpty(getQueryString())) {
        const { register, idToken, refreshToken } = getQueryString();

        setToken(idToken, refreshToken);

        if (register === 'false') {
          setRegisterModalVisible(true);
        } else {
          setMyInfo();
          router.push('/board/list');
        }
      }
    })();
  }, []);

  const setMyInfo = async () => {
    try {
      const {
        data: { data: myInfo },
      } = await memberApi.getInfo();

      const { name, email, nickName, memberId } = myInfo;

      setUserInfo({ name, email, nickName, memberId });
    } catch (error) {
      addToast(getErrorMessage(error), {
        appearance: 'error',
      });
    }
  };

  const signIn = () => {
    location.href = `${settings.apiUrl}/oauth2/authorization/google`;
  };

  const setToken = (idToken, refreshToken) => {
    tokenHelper.setIdToken(idToken);
    tokenHelper.setRefreshToken(refreshToken);
  };

  const RegisterNickName = async (nickName) => {
    try {
      const {
        data: { data: result },
      } = await memberApi.addNickName({ nickName });

      if (result === 'success') {
        // ????????? ????????????
        setMyInfo();
        router.push('/board/list');
      } else if (result === 'duplicate') {
        setMessageContent('????????? ??????????????????');
        setMessageModalVisible(true);
      } else {
        setMessageContent('??? ??? ?????? ????????? ?????????????????????');
        setMessageModalVisible(true);
      }
    } catch (e) {}
  };

  return (
    <LayoutContainer>
      <Header />
      <Wrapper>
        <LoginWrapper>
          <Title>
            <TypoGraphy type="h1" color={customColor.black}>
              ?????? ?????????
            </TypoGraphy>
          </Title>
          <Content>
            <TypoGraphy
              type="body1"
              color={customColor.gray}
              textAlign="center">
              ???????????? ?????? ??????????????? ????????? ???????????? ??????????????????!
            </TypoGraphy>
          </Content>
          <ButtonWrapper>
            <GoogleLoginButton onClick={signIn} />
          </ButtonWrapper>
        </LoginWrapper>
      </Wrapper>
      <RegisterModal
        visible={registerModalVisible}
        onClose={() => setRegisterModalVisible(true)}
        onConfirm={RegisterNickName}
      />
      <MessageModal
        content={messageContent}
        visible={messageModalVisible}
        onClose={() => setMessageModalVisible(false)}
      />
    </LayoutContainer>
  );
};

const Wrapper = styled.div`
  background-color: ${customColor.deepBlue};
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 16px;
`;

const Content = styled.div``;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${customColor.grayBg};
  border: 1px solid ${customColor.grayBg};
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  width: 480px;
`;

const ButtonWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export default login;
