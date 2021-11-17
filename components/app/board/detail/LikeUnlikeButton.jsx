import React, { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { commentApi } from 'apis/index';
import { useToasts } from 'react-toast-notifications';

export const LikeUnlikeButton = ({ commentId }) => {
  // 현재 count관련 API는 없으니까 보류
  const [likeCount, setLikeCount] = useState(120);
  const [unLikeCount, setUnLikeCount] = useState(120);

  // 서버에서 내가 클릭했던 값을 가져와서 초기값으로 설정해야할듯
  const [likeSelected, setLikeSelected] = useState(false);
  const [unLikeSelected, setUnLikeSelected] = useState(false);

  const { addToast } = useToasts();
  // useEffect로 처음렌더링시 내가 선택한 값 받아서 지정해야함

  // useEffect로 likeCount, unLikeCount에 구독한다음에 변할때마다 값 가져와야함

  // 해당 버튼 클릭시 count증가시켜야함
  const handleLikeButton = async () => {
    try {
      if (likeSelected === false && unLikeSelected === false) {
        setLikeSelected((cur) => !cur);
        setLikeCount(likeCount++);
        await commentApi.like({
          commentId,
          likeCommentStatus: 'LIKE',
        });
      } else if (likeSelected === false && unLikeSelected) {
        setUnLikeSelected((cur) => !cur);
        setLikeSelected((cur) => !cur);
        setLikeCount(likeCount++);
        setUnLikeCount(unLikeCount--);
        await commentApi.like({
          commentId,
          likeCommentStatus: 'LIKE',
        });
      } else if (likeSelected && unLikeSelected === false) {
        setLikeSelected((cur) => !cur);
        setLikeCount(likeCount--);
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
        setUnLikeCount(unLikeCount++);
        await commentApi.like({
          commentId: commentId,
          likeCommentStatus: 'UNLIKE',
        });
      } else if (likeSelected && unLikeSelected === false) {
        setLikeSelected((cur) => !cur);
        setUnLikeSelected((cur) => !cur);
        setUnLikeCount(unLikeCount++);
        setLikeCount(likeCount--);
        await commentApi.like({
          commentId: commentId,
          likeCommentStatus: 'UNLIKE',
        });
      } else if (likeSelected === false && unLikeSelected) {
        setUnLikeSelected((cur) => !cur);
        setUnLikeCount(unLikeCount--);
        await commentApi.unlike({
          commentId: commentId,
          likeCommentStatus: 'UNLIKE',
        });
      }
    } catch (e) {
      // addToast(getErrorMessage(e), { appearance: 'error' });
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <LikeButton
        size="20px"
        onClick={handleLikeButton}
        selected={likeSelected}
        color={likeSelected ? customColor.skyBlue : 'black'}
      />
      {likeCount === 0 ? null : (
        <TypoGraphy type="body2">{likeCount}</TypoGraphy>
      )}
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

const UnLikeButton = styled(AiOutlineDislike)`
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
    color: ${customColor.skyBlue};
  }
`;
