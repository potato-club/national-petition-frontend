import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from './TypoGraphy';
import Link from 'next/link';
import { memberApi } from 'apis/index';

type User = {
  name: string;
  email: string;
  picture: string;
  nickName: string;
};

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: userInfo },
        } = await memberApi.getInfo();

        setUser(userInfo);
      } catch (e) {}
    })();
  }, []);

  return (
    <Wrapper>
      <Side>
        <Link href="/board/list">
          <a>
            <TypoGraphy type="h1" color={customColor.white}>
              국민청원 소통방
            </TypoGraphy>
          </a>
        </Link>
      </Side>
      <Side>
        <Link href="/board/list">
          <a>
            <TypoGraphy type="h1" color={customColor.white}>
              홈
            </TypoGraphy>
          </a>
        </Link>
        <Gap />
        {user ? (
          <Link href="/user/profile">
            <a>
              <TypoGraphy type="h1" color={customColor.white}>
                {user.nickName}
              </TypoGraphy>
            </a>
          </Link>
        ) : (
          <Link href="/user/login">
            <a>
              <TypoGraphy type="h1" color={customColor.white}>
                로그인
              </TypoGraphy>
            </a>
          </Link>
        )}
      </Side>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${customColor.deepBlue};
  opacity: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 1000;
`;

const Side = styled.div`
  display: flex;
`;

const Gap = styled.div`
  margin-left: 32px;
`;
