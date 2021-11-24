import React, { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { commentApi } from 'apis/index';
import { useToasts } from 'react-toast-notifications';
import { getErrorMessage } from 'util/index';

export const LikeUnlikeButton = ({ commentId, likeComment }) => {
  const { likeCounts, unLikeCounts, myCommentStatus } = likeComment;
  console.log(`${commentId} : 좋아요 몇개인지? ${likeCounts}`);
  console.log(`${commentId} : 싫어요 몇개인지? ${unLikeCounts}`);
  console.log(`${commentId} : 뭐를 체크했는지? ${myCommentStatus}`);
  console.log(`-------------------------------------`);

  const [likeCount, setLikeCount] = useState(likeCounts);
  const [unLikeCount, setUnLikeCount] = useState(unLikeCounts);

  const [likeSelected, setLikeSelected] = useState(false);
  const [unLikeSelected, setUnLikeSelected] = useState(false);

  const { addToast } = useToasts();

  if (myCommentStatus === 'LIKE') {
    setLikeSelected(true);
  } else if (myCommentStatus === 'UNLIKE') {
    setUnLikeSelected(true);
  }

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
          commentId,
          likeCommentStatus: 'UNLIKE',
        });
      } else if (likeSelected && unLikeSelected === false) {
        setLikeSelected((cur) => !cur);
        setUnLikeSelected((cur) => !cur);
        setUnLikeCount((cur) => cur + 1);
        setLikeCount((cur) => cur - 1);
        await commentApi.like({
          commentId,
          likeCommentStatus: 'UNLIKE',
        });
      } else if (likeSelected === false && unLikeSelected) {
        setUnLikeSelected((cur) => !cur);
        setUnLikeCount((cur) => cur - 1);
        await commentApi.unlike({
          commentId,
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
