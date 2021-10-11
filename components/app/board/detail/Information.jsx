import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';

export const Information = ({ title, content }) => {
  return (
    <Wrapper>
      <TypoGraphy type="h3" color={customColor.black} fontWeight="bold">
        {title}
      </TypoGraphy>
      <Gap />
      <TypoGraphy type="h3" color={customColor.black}>
        {content}
      </TypoGraphy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Gap = styled.div`
  margin-right: 8px;
`;
