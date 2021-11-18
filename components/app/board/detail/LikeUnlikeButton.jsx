import React, { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { commentApi } from 'apis/index';
import { useToasts } from 'react-toast-notifications';

export const LikeUnlikeButton = ({ commentId }) => {
  // 현재 count 값 넘어오면 초기값으로 지정하기
  const [likeCount, setLikeCount] = useState(0);
  const [unLikeCount, setUnLikeCount] = useState(10);

  // 서버에서 내가 클릭했던 값을 가져와서 초기값으로 설정해야할듯
  const [likeSelected, setLikeSelected] = useState(false);
  const [unLikeSelected, setUnLikeSelected] = useState(false);

  const { addToast } = useToasts();

  const handleLikeButton = async () => {
    try {
      if (likeSelected === false && unLikeSelected === false) {
        setLikeSelected((cur) => !cur);
        setLikeCount((cur) => cur + 1);
        await commentApi.like({
          commentId,
          likeCommentStatus: 'LIKE',
        });
      } else if (likeSelected === false && unLikeSelected) {
        setUnLikeSelected((cur) => !cur);
        setLikeSelected((cur) => !cur);
        setLikeCount((cur) => cur + 1);
        setUnLikeCount((cur) => cur - 1);
        await commentApi.like({
          commentId,
          likeCommentStatus: 'LIKE',
        });
      } else if (likeSelected && unLikeSelected === false) {
        setLikeSelected((cur) => !cur);
        setLikeCount((cur) => cur - 1);
        await commentApi.unlike({
          commentId,
          likeCommentStatus: 'LIKE',
        });
      }
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };

  const handleUnLikeButton = async () => {
    try {
      if (likeSelected === false && unLikeSelected === false) {
        setUnLikeSelected((cur) => !cur);
        setUnLikeCount((cur) => cur + 1);
        await commentApi.like({
          commentId: commentId,
          likeCommentStatus: 'UNLIKE',
        });
      } else if (likeSelected && unLikeSelected === false) {
        setLikeSelected((cur) => !cur);
        setUnLikeSelected((cur) => !cur);
        setUnLikeCount((cur) => cur + 1);
        setLikeCount((cur) => cur - 1);
        await commentApi.like({
          commentId: commentId,
          likeCommentStatus: 'UNLIKE',
        });
      } else if (likeSelected === false && unLikeSelected) {
        setUnLikeSelected((cur) => !cur);
        setUnLikeCount((cur) => cur - 1);
        await commentApi.unlike({
          commentId: commentId,
          likeCommentStatus: 'UNLIKE',
        });
      }
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };
  return (
    <Wrapper>
      <LikeBox>
        <LikeButton
          size="20px"
          onClick={handleLikeButton}
          selected={likeSelected}
          color={likeSelected ? customColor.skyBlue : 'black'}
        />
        {likeCount === 0 ? null : (
          <TypoGraphy type="body2">{likeCount}</TypoGraphy>
        )}
      </LikeBox>
      <UnLikeButton
        size="20px"
        onClick={handleUnLikeButton}
        selected={unLikeSelected}
        color={unLikeSelected ? customColor.skyBlue : 'black'}
      />
      {unLikeCount === 0 ? null : (
        <TypoGraphy type="body2">{unLikeCount}</TypoGraphy>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const LikeButton = styled(AiOutlineLike)`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
    color: ${customColor.skyBlue};
  }
`;
const LikeBox = styled.div`
  display: flex;
  width: 50px;
`;

const UnLikeButton = styled(AiOutlineDislike)`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
    color: ${customColor.skyBlue};
  }
`;
