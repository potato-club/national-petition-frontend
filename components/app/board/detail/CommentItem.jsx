import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { BsArrowReturnRight } from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';

export const CommentItem = () => {
  return (
    <Wrapper>
      <Information>
        <TypoGraphy type="body1" color={customColor.black} fontWeight="bold">
          동철
        </TypoGraphy>
        <TypoGraphy type="body1" color={customColor.gray}>
          2019-01-11
        </TypoGraphy>
      </Information>
      <Content>
        <TypoGraphy type="body2" color={customColor.black}>
          내용
        </TypoGraphy>
      </Content>
      <ButtonForm>
        <Button>
          <BsArrowReturnRight
            size="16"
            color={customColor.gray}
            style={{ marginRight: 4 }}
          />
          <TypoGraphy type="body2" color={customColor.gray}>
            답글
          </TypoGraphy>
        </Button>
        <Button>
          <RiArrowDownSFill
            size="16"
            color={customColor.blue}
            style={{ marginRight: 4 }}
          />
          <TypoGraphy type="body2" color={customColor.blue}>
            답글 32개 보기
          </TypoGraphy>
        </Button>
      </ButtonForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${customColor.grayBg};
  margin-bottom: 16px;
`;
const Information = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const Content = styled.div`
  margin-bottom: 8px;
  min-height: 56px;
`;
const ButtonForm = styled.div`
  display: flex;
`;
const Button = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 16px;
`;
