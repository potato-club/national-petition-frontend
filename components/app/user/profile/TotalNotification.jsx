import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { totalNotification } from 'recoil/atom';
import { Switch } from '@mui/material';
import { TypoGraphy } from 'components/common';

export const TotalNotification = () => {
  // 초기값 true
  const [notice, setNotice] = useRecoilState(totalNotification);
  console.log(`@@초기 노티스 ${notice}`);
  return (
    <Box>
      <TypoGraphy type="body1" fontWeight="bold">
        전체 알림
      </TypoGraphy>
      <Box>
        <TypoGraphy type="body1" fontWeight="bold">
          OFF
        </TypoGraphy>
        <Switch
          checked={notice}
          onChange={() => setNotice(!notice)}
          color="primary"
        />
        <TypoGraphy type="body1" fontWeight="bold">
          ON
        </TypoGraphy>
      </Box>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
