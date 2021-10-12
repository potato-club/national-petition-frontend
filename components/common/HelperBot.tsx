import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from './TypoGraphy';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';

export const HelperBot = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <ItemWrapper>
        <Item onClick={() => router.push('/board/list')}>
          <AiOutlineHome
            size={32}
            color={customColor.white}
            style={{ marginBottom: 4 }}
          />
          <TypoGraphy color={customColor.white}>HOME</TypoGraphy>
        </Item>
        <Item onClick={() => router.push('/user/profile')}>
          <AiOutlineUser
            size={32}
            color={customColor.white}
            style={{ marginBottom: 4 }}
          />
          <TypoGraphy color={customColor.white}>USER</TypoGraphy>
        </Item>
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 240px;
`;
const ItemWrapper = styled.div`
  background-color: ${customColor.deepBlue};
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  border-radius: 100px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;
