import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { BsArrowReturnRight } from 'react-icons/bs';
import { CommentAddForm } from './CommentAddForm';

export const ApplyItem = () => {
  const [AddApplyVisible, setAddApplyVisible] = useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <Side>
          <BsArrowReturnRight
            size="16"
            color={customColor.gray}
            style={{ marginRight: 4 }}
          />
        </Side>
        <ItemContainer>
          <Information>
            <TypoGraphy
              type="body1"
              color={customColor.black}
              fontWeight="bold">
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
        </ItemContainer>
      </ContentWrapper>
      <Divide />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  background-color: ${customColor.grayBg};
  display: flex;
  padding-top: 24px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 32px;
  border-bottom: 1px solid ${customColor.grayBg};
`;

const Side = styled.div``;

const ItemContainer = styled.div`
  width: 100%;
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const Content = styled.div`
  margin-bottom: 8px;
  min-height: 24px;
`;

const Divide = styled.div`
  border: 1px solid ${customColor.bg};
  margin-left: 24px;
  margin-right: 24px;
`;

const ButtonForm = styled.div`
  display: flex;
`;
const Button = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 16px;
`;

const AddApplyWrapper = styled.div`
  padding: 16px;
`;
