import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { BsFillBellFill } from 'react-icons/bs';
import { AlertItem } from './index';

const dummy = [
  {
    id: 1,
    data: '냥이가 게시물에 댓글을 달았습니다.',
    time: '1분전',
    state: 1,
  },
  {
    id: 2,
    data: '멍이가 게시물에 댓글을 달았습니다.',
    time: '4분전',
    state: 1,
  },
  {
    id: 3,
    data: '장이가 댓글에 답글을 달았습니다.',
    time: '1시간전',
    state: 1,
  },
  {
    id: 4,
    data: '콩이가 게시물에 댓글을 달았습니다.',
    time: '3시간전',
    state: 1,
  },
  {
    id: 5,
    data: '맹이가 게시물에 댓글을 달았습니다.',
    time: '1일전',
    state: 0,
  },
  { id: 6, data: '짱이가 댓글에 답글을 달았습니다.', time: '3주전', state: 0 },
];
export const HeaderAlert = () => {
  const [onTap, setOnTap] = useState(false);
  return (
    <Wrapper onClick={() => setOnTap((onTap) => !onTap)}>
      <AlertWrapper>
        <BadgeIcon badgeContent={4} color="error" max={999}>
          <BellIcon isActive={onTap} />
        </BadgeIcon>
      </AlertWrapper>
      {onTap && (
        <DropDownBox>
          <DropDownItemWrapper>
            <Line />
            {dummy.map(({ data, id, time, state }) => (
              <AlertItem key={id} title={data} time={time} state={state} />
            ))}
          </DropDownItemWrapper>
        </DropDownBox>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;
const AlertWrapper = styled.div`
  cursor: pointer;
`;

const BadgeIcon = styled(Badge)`
  .MuiBadge-badge {
    top: 3px;
    border: 2px solid ${customColor.deepBlue};
    /* padding: 0 5px; */
  }
`;
const BellIcon = styled(BsFillBellFill)`
  font-size: 25px;
  color: ${({ isActive }) =>
    isActive ? customColor.skyBlue : customColor.white};
`;
const DropDownBox = styled.div`
  position: absolute;
  right: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 10px;
  background-color: ${customColor.white};
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

const DropDownItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  border: 1px solid ${customColor.grayBg};
`;
