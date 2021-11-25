import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { LikeUnlikeButton } from 'components/app/board/detail';
import { customColor } from 'constants/index';
import { BsArrowReturnRight } from 'react-icons/bs';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { CommentAddForm } from './CommentAddForm';
import moment from 'moment';
import { ApplyPagination } from './ApplyPagination';
import { commentApi } from 'apis/index';
import { getErrorMessage } from 'util/index';
import { useToasts } from 'react-toast-notifications';

export const CommentItem = React.memo(
  ({
    userId,
    commentId,
    memberId,
    content,
    depth,
    childrenCounts,
    createdAt,
    setCommentList,
    nickName,
    boardId,
    likeComment,
  }) => {
    const [ApplyVisible, setApplyVisible] = useState(false);
    const [AddApplyVisible, setAddApplyVisible] = useState(false);
    const [commentEditVisible, setCommentEditVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [applyAddUpdate, setApplyAddUpdate] = useState(false);
    const { addToast } = useToasts();

    const deleteComment = async () => {
      try {
        await commentApi.delete(commentId);

        setCommentList((cur) =>
          cur.map(
            ({
              commentId: id,
              memberId,
              content,
              depth,
              childrenCounts,
              createdAt,
              nickName,
            }) => {
              return {
                commentId: id,
                memberId: commentId === id ? null : memberId,
                content: commentId === id ? '삭제된 메세지 입니다' : content,
                depth,
                childrenCounts,
                createdAt,
                nickName: commentId === id ? '' : nickName,
              };
            },
          ),
        );

        addToast('댓글이 삭제되었습니다', { appearance: 'success' });
      } catch (e) {
        addToast(getErrorMessage(e), { appearance: 'error' });
      }
    };

    const editComment = async (revalueContent) => {
      try {
        await commentApi.edit({ commentId, content: revalueContent });
        setCommentList((cur) =>
          cur.map(
            ({
              commentId: id,
              memberId,
              content,
              depth,
              childrenCounts,
              createdAt,
              nickName,
            }) => {
              return {
                commentId: id,
                memberId,
                content: commentId === id ? revalueContent : content,
                depth,
                childrenCounts,
                createdAt,
                nickName,
              };
            },
          ),
        );

        setCommentEditVisible((cur) => !cur);
        addToast('댓글이 수정되었습니다', { appearance: 'success' });
      } catch (e) {
        addToast(getErrorMessage(e), { appearance: 'error' });
      }
    };

    const addApply = async (content) => {
      try {
        await commentApi.add(boardId, { content, parentId: commentId });

        setApplyAddUpdate((cur) => !cur);
        addToast('댓글이 추가되었습니다', { appearance: 'success' });
      } catch (e) {
        addToast(getErrorMessage(e), { appearance: 'error' });
      }
    };
    return (
      <Wrapper>
        <ItemWrapper>
          <Information>
            <TypoGraphy
              type="body1"
              color={memberId === null ? customColor.gray : customColor.black}
              fontWeight={memberId === null ? 'normal' : 'bold'}>
              {nickName}
            </TypoGraphy>
            <TypoGraphy type="body1" color={customColor.gray}>
              {moment(createdAt).format('YYYY-MM-DD')}
            </TypoGraphy>
          </Information>
          {commentEditVisible ? (
            <CommentAddForm
              onSubmit={editComment}
              type="edit"
              content={content}
            />
          ) : (
            <Content>
              <TypoGraphy
                type="body2"
                color={
                  memberId === null ? customColor.gray : customColor.black
                }>
                {content}
              </TypoGraphy>
            </Content>
          )}
          {/* 내가만든 거 */}
          {memberId !== null && (
            <LikeUnlikeButton commentId={commentId} likeComment={likeComment} />
          )}

          <ButtonForm>
            {memberId !== null && (
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
            )}
            {userId === memberId && (
              // <Button onClick={deleteComment}>
              <Button onClick={() => deleteComment()}>
                <TypoGraphy type="body2" color={customColor.gray}>
                  삭제
                </TypoGraphy>
              </Button>
            )}
            {userId === memberId && (
              <Button onClick={() => setCommentEditVisible((cur) => !cur)}>
                <TypoGraphy type="body2" color={customColor.gray}>
                  {commentEditVisible ? '댓글보기' : '수정'}
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
          {AddApplyVisible && (
            <AddApplyWrapper>
              <CommentAddForm type="add" onSubmit={addApply} />
            </AddApplyWrapper>
          )}
          {ApplyVisible && (
            <ApplyWrapper>
              <ApplyPagination
                commentId={commentId}
                userId={userId}
                page={page}
                setPage={setPage}
                applyAddUpdate={applyAddUpdate}
              />
            </ApplyWrapper>
          )}
        </ItemWrapper>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div``;

const ItemWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${customColor.grayBg};
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

const ApplyWrapper = styled.div`
  margin-top: 24px;
`;

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
