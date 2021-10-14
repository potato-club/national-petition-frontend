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
      <Side>
        <BsArrowReturnRight
          size="16"
          color={customColor.gray}
          style={{ marginRight: 4 }}
        />
      </Side>
      <ItemContainer>
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
        {/* <ButtonForm>
          <Button onClick={() => setAddApplyVisible((cur) => !cur)}>
            <BsArrowReturnRight
              size="16"
              color={customColor.gray}
              style={{ marginRight: 4 }}
            />
            <TypoGraphy type="body2" color={customColor.gray}>
              답글
            </TypoGraphy>
          </Button>
        </ButtonForm>
        {AddApplyVisible && (
          <AddApplyWrapper>
            <CommentAddForm />
          </AddApplyWrapper>
        )} */}
      </ItemContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${customColor.grayBg};
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-left: 32px;
  border-bottom: 1px solid ${customColor.grayBg};
  margin-bottom: 16px;
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
