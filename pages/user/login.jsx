import React from 'react';
import { LayoutContainer, TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { GoogleLoginButton } from 'react-social-login-buttons';

const login = () => {
  return (
    <LayoutContainer>
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
            <GoogleLoginButton />
          </ButtonWrapper>
        </LoginWrapper>
      </Wrapper>
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
