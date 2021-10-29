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

const login = () => {
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    (() => {
      if (!isObjectEmpty(getQueryString())) {
        const { register, idToken, refreshToken } = getQueryString();

        setToken(idToken, refreshToken);

        if (register === 'false') {
          setRegisterModalVisible(true);
        } else {
          router.push('/board/list');
        }
      }
    })();
  }, []);

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
        router.push('/board/list');
      } else if (result === 'duplicate') {
        setMessageContent('중복된 닉네임입니다');
        setMessageModalVisible(true);
      } else {
        setMessageContent('알 수 없는 오류로 실패하였습니다');
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
              소셜 로그인
            </TypoGraphy>
          </Title>
          <Content>
            <TypoGraphy
              type="body1"
              color={customColor.gray}
              textAlign="center">
              로그인을 통해 국민청원의 의견을 회원들과 소통해보세요!
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
