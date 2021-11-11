import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { useRecoilState } from 'recoil';
import { totalNotification } from 'recoil/atom';
import { Switch } from '@mui/material';

export const TotalNotification = () => {
  // 초기값 true
  const [notice, setNotice] = useRecoilState(totalNotification);

  return (
    <div>
      OFF
      <Switch
        checked={notice}
        onChange={() => setNotice(!notice)}
        color="default"
      />
      ON
    </div>
  );
};
