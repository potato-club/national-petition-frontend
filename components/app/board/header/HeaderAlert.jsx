import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { BsFillBellFill } from 'react-icons/bs';
import { AlertItem } from './index';

const dummy = [
  { id: 1, data: '냥이가 ㅇㅇ게시물에 댓글을 달았습니다.' },
  { id: 2, data: '냥이가 ㅇㅇ게시물에 댓글을 달았습니다.' },
  { id: 3, data: '냥이가 ㅇㅇ게시물에 댓글을 달았습니다.' },
  { id: 4, data: '냥이가 ㅇㅇ게시물에 댓글을 달았습니다.' },
  { id: 5, data: '냥이가 ㅇㅇ게시물에 댓글을 달았습니다.' },
  { id: 6, data: '냥이가 ㅇㅇ게시물에 댓글을 달았습니다.' },
];
export const HeaderAlert = () => {
  const [onTap, setOnTap] = useState(false);
  return (
    <Wrapper onClick={() => setOnTap((onTap) => !onTap)}>
      <AlertWrapper>
        <BadgeIcon badgeContent={4} color="error" max={999}>
          <BellIcon />
        </BadgeIcon>
      </AlertWrapper>
      {onTap && (
        <DropDownItemWrapper>
          {dummy.map(({ data, id }) => (
            <AlertItem key={id} title={data} />
          ))}
        </DropDownItemWrapper>
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
  color: white;
`;

const DropDownItemWrapper = styled.div`
  position: absolute;
  right: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${customColor.white};
  width: 400px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;
