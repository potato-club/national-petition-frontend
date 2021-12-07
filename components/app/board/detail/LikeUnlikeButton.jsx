import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { commentApi } from 'apis/index';
import { useToasts } from 'react-toast-notifications';
import { getErrorMessage } from 'util/index';

export const LikeUnlikeButton = React.memo(({ commentId, likeComment }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [unLikeCount, setUnLikeCount] = useState(0);

  const [likeSelected, setLikeSelected] = useState(false);
  const [unLikeSelected, setUnLikeSelected] = useState(false);

  const { addToast } = useToasts();

  useEffect(() => {
    const { likeCounts, unLikeCounts, myCommentStatus } = likeComment;

    setLikeCount(likeCounts);
    setUnLikeCount(unLikeCounts);

    if (myCommentStatus === 'LIKE') {
      setLikeSelected(true);
    } else if (myCommentStatus === 'UNLIKE') {
      setUnLikeSelected(true);
    }
  }, []);

  useEffect(() => {
    console.log('LIKE_COMMENT :: ', likeComment);
  });

  const handleLikeButton = useCallback(async () => {
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
  }, [likeSelected, unLikeSelected]);

  const handleUnLikeButton = useCallback(async () => {
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
  }, [likeSelected, unLikeSelected]);
  return (
    <Wrapper>
      <LikeBox>
        <LikeButton
          size="20px"
          onClick={() => handleLikeButton()}
          color={likeSelected ? customColor.skyBlue : 'black'}
        />
        {likeCount === 0 ? null : (
          <TypoGraphy type="body2">{likeCount}</TypoGraphy>
        )}
      </LikeBox>
      <UnLikeButton
        size="20px"
        onClick={() => handleUnLikeButton()}
        color={unLikeSelected ? customColor.skyBlue : 'black'}
      />
      {unLikeCount === 0 ? null : (
        <TypoGraphy type="body2">{unLikeCount}</TypoGraphy>
      )}
    </Wrapper>
  );
});

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
