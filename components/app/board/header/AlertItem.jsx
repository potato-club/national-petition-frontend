import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common/index';
import Link from 'next/link';

export const AlertItem = ({
  id,
  content,
  isRead,
  handleAlert,
  boardId,
  createdDate,
}) => {
  const arrival = new Date(createdDate);
  const now = new Date();
  const [dateText, setDateText] = useState('');

  useEffect(() => {
    if (arrival.getFullYear() !== now.getFullYear()) {
      setDateText(now.getFullYear() - arrival.getFullYear() + '년전');
    } else if (arrival.getMonth() !== now.getMonth()) {
      setDateText(now.getMonth() - arrival.getMonth() + '개월전');
    } else if (arrival.getDate() !== now.getDate()) {
      setDateText(now.getDate() - arrival.getDate() + '일전');
    } else if (arrival.getHours() !== now.getHours()) {
      setDateText(now.getHours() - arrival.getHours() + '시간전');
    } else if (arrival.getMinutes() !== now.getMinutes()) {
      setDateText(now.getMinutes() - arrival.getMinutes() + '분전');
    } else {
      setDateText(now.getSeconds() - arrival.getSeconds() + '초전');
    }
  }, []);

  return (
    <Link href={`/board/detail/${boardId}`}>
      <DropDownItem onClick={() => handleAlert(id)}>
        <TextWrapper>
          {isRead == false && (
            <CircleWrapper>
              <Circle />
            </CircleWrapper>
          )}
          <TitleWrapper isRead={isRead}>
            <TypoGraphy
              type="body1"
              color={isRead == false ? customColor.skyBlue : customColor.gray}>
              {content}
            </TypoGraphy>
          </TitleWrapper>
          <DateWrapper>
            <TypoGraphy
              type="body1"
              color={isRead == false ? customColor.skyBlue : customColor.gray}>
              {dateText}
            </TypoGraphy>
          </DateWrapper>
        </TextWrapper>
        <Line />
      </DropDownItem>
    </Link>
  );
};

const DropDownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  :hover {
    background-color: ${customColor.grayBg};
  }
  width: 100%;
`;
const TextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 87%;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
const DateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`;
const Line = styled.div`
  width: 90%;
  height: 1px;
  border: 1px solid ${customColor.grayBg};
`;

const CircleWrapper = styled.div`
  position: absolute;
  left: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 100%;
`;
const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${customColor.skyBlue};
`;
