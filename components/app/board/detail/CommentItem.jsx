import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { BsArrowReturnRight } from 'react-icons/bs';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { ApplyItem } from './ApplyItem';
import { CommentAddForm } from './CommentAddForm';
import moment from 'moment';
import { ApplyPagination } from './ApplyPagination';

export const CommentItem = ({
  userId,
  commentId,
  memberId,
  content,
  depth,
  childrenCounts,
  createdAt,
}) => {
  const [ApplyVisible, setApplyVisible] = useState(false);
  const [AddApplyVisible, setAddApplyVisible] = useState(false);

  return (
    <Wrapper>
      <ItemWrapper>
        <Information>
          <TypoGraphy type="body1" color={customColor.black} fontWeight="bold">
            동철
          </TypoGraphy>
          <TypoGraphy type="body1" color={customColor.gray}>
            {moment(createdAt).format('YYYY-MM-DD')}
          </TypoGraphy>
        </Information>
        <Content>
          <TypoGraphy type="body2" color={customColor.black}>
            {content}
          </TypoGraphy>
        </Content>
        <ButtonForm>
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
          {userId === memberId && (
            <Button onClick={() => setAddApplyVisible((cur) => !cur)}>
              <TypoGraphy type="body2" color={customColor.gray}>
                삭제
              </TypoGraphy>
            </Button>
          )}
          {userId === memberId && (
            <Button onClick={() => setAddApplyVisible((cur) => !cur)}>
              <TypoGraphy type="body2" color={customColor.gray}>
                수정
              </TypoGraphy>
            </Button>
          )}
          <Button onClick={() => setApplyVisible((cur) => !cur)}>
            {ApplyVisible ? (
              <ApplyViewWrapper>
                <RiArrowUpSFill
                  size="16"
                  color={customColor.blue}
                  style={{ marginRight: 4 }}
                />
                <TypoGraphy type="body2" color={customColor.blue}>
                  답글 {childrenCounts}개 접기
                </TypoGraphy>
              </ApplyViewWrapper>
            ) : (
              <ApplyViewWrapper>
                <RiArrowDownSFill
                  size="16"
                  color={customColor.blue}
                  style={{ marginRight: 4 }}
                />
                <TypoGraphy type="body2" color={customColor.blue}>
                  답글 {childrenCounts}개 보기
                </TypoGraphy>
              </ApplyViewWrapper>
            )}
          </Button>
        </ButtonForm>
      </ItemWrapper>
      {AddApplyVisible && (
        <AddApplyWrapper>
          <CommentAddForm />
        </AddApplyWrapper>
      )}
      {ApplyVisible && (
        <ApplyWrapper>
          <ApplyPagination />
        </ApplyWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ItemWrapper = styled.div`
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

const ApplyWrapper = styled.div``;

const MoreApplyButton = styled.div`
  background-color: ${customColor.grayBg};
  border: 1px solid ${customColor.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 16px;
  margin-bottom: 16px;
`;

const AddApplyWrapper = styled.div`
  padding: 16px;
`;

const ApplyViewWrapper = styled.div`
  display: flex;
`;
