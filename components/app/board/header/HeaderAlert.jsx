import React, { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { BsFillBellFill } from 'react-icons/bs';
import { AlertItem } from './index';
import { notificationApi } from 'apis';

export const HeaderAlert = () => {
  const [onTap, setOnTap] = useState(false);
  const [alertList, setAlertList] = useState([]);
  const [alertCount, setAlertCount] = useState();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: data },
        } = await notificationApi.getList();
        setAlertList(data);
        setAlertCount(data.filter(({ isRead }) => !isRead).length);
      } catch (e) {
        console.log('Alert 정보받기 실패', e);
      }
    })();
  }, []);
  const handleAlert = async (id) => {
    try {
      const { data: OK } = await notificationApi.readStatus(id);
      const {
        data: { data: data },
      } = await notificationApi.getList();
      setAlertList(data);
      setAlertCount(data.filter(({ isRead }) => !isRead).length);
    } catch (e) {
      console.log('실패', e);
    }
  };
  return (
    <Wrapper onClick={() => setOnTap((onTap) => !onTap)}>
      <AlertWrapper>
        <BadgeIcon badgeContent={alertCount} color="error" max={999}>
          <BellIcon isActive={onTap} />
        </BadgeIcon>
      </AlertWrapper>
      {onTap && (
        <DropDownBox>
          <DropDownItemWrapper>
            {alertList.map(({ id, content, isRead, boardId }) => (
              <AlertItem
                handleAlert={handleAlert}
                key={id}
                id={id}
                content={content}
                isRead={isRead}
                boardId={boardId}
              />
            ))}
            <Line />
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
  flex-direction: column-reverse;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  border: 1px solid ${customColor.grayBg};
`;
