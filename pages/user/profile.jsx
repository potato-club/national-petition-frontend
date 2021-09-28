import React, { useState } from 'react';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  TitleHeader,
} from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import dummy from '../../dummy/list.json';
import { ListItem } from 'components/app/board/list';

const profile = () => {
  const [userName, setUserName] = useState('박상훈');
  const [userNickName, setUserNickName] = useState('스폰지밥');
  const [userEmail, setUserEmail] = useState('bigyou00@gmail.com');

  // 모달 띄울 것
  const qqqqqqmodal = () => {
    alert('');
  };

  const [myPost, setMyPost] = useState(dummy.slice(0, 5));

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
          <Button logout onClick={qqqqqqmodal}>
            로그아웃
          </Button>
          <Button resign onClick={qqqqqqmodal}>
            탈퇴하기
          </Button>
        </ButtonBox>
      </BoxBody>
      <BoxBody>
        <TypoGraphy type="h1" color={customColor.black} fontWeight="bold">
          내가 쓴 글
        </TypoGraphy>
        <Line />
        <List>
          {myPost.map(
            ({
              id,
              category,
              title,
              subTitle,
              subNumber,
              day,
              agreePer,
              disagreePer,
            }) => (
              <ListItem
                key={id}
                category={category}
                title={title}
                subTitle={subTitle}
                subNumber={subNumber}
                day={day}
                agreePer={agreePer}
                disagreePer={disagreePer}
              />
            ),
          )}
        </List>
      </BoxBody>
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
const List = styled.div``;

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
