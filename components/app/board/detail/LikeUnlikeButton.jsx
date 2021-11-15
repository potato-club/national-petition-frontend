import React, { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { commentApi } from 'apis/index';

export const LikeUnlikeButton = ({ commentId }) => {
  // 현재 count관련 API는 없으니까 보류
  // const [likeCount, setLikeCount] = useState(120);

  // 서버에서 내가 클릭했던 값을 가져와서 초기값으로 설정해야할듯
  const [likeSelected, setLikeSelected] = useState(false);
  const [unLikeSelected, setUnLikeSelected] = useState(false);

  // useEffect로 처음렌더링시 내가 선택한 값 받아서 지정해야함

  const handleLikeButton = async () => {
    try {
      // 둘다 false일때
      if (likeSelected === false && unLikeSelected === false) {
        // 좋아요 등록
        await commentApi.like({
          commentId,
          likeCommentStatus: 'LIKE',
        });
        setLikeSelected((cur) => !cur);
      }
      // 상대가 true일때
      else if (likeSelected === false && unLikeSelected) {
        // 상대 false로 만들고 API취소하기
        setUnLikeSelected((cur) => !cur);
        await commentApi.unlike({
          commentId,
          likeCommentStatus: 'UNLIKE',
        });
        // 나는 true로 하고 API등록하기
        setLikeSelected((cur) => !cur);
        await commentApi.like({
          commentId,
          likeCommentStatus: 'LIKE',
        });
      }
      // 내가 true일때
      else if (likeSelected && unLikeSelected === false) {
        // 나 취소하기
        setLikeSelected((cur) => !cur);
        await commentApi.unlike({
          commentId,
          likeCommentStatus: 'LIKE',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnLikeButton = async () => {
    try {
      // 둘다 false일때
      if (likeSelected === false && unLikeSelected === false) {
        // 싫어요 등록
        await commentApi.like({
          commentId,
          likeCommentStatus: 'UNLIKE',
        });
        setUnLikeSelected((cur) => !cur);
      }
      // 상대가 true일때
      else if (likeSelected && unLikeSelected === false) {
        // 상대 false로 만들고 API취소하기
        setLikeSelected((cur) => !cur);
        await commentApi.unlike({
          commentId,
          likeCommentStatus: 'LIKE',
        });
        // 나는 true로 하고 API등록하기
        setUnLikeSelected((cur) => !cur);
        await commentApi.like({
          commentId,
          likeCommentStatus: 'UNLIKE',
        });
      }
      // 내가 true일때
      else if (likeSelected === false && unLikeSelected) {
        // 나 취소하기
        setUnLikeSelected((cur) => !cur);
        await commentApi.unlike({
          commentId,
          likeCommentStatus: 'UNLIKE',
        });
      }
    } catch (error) {
      console.log(error);
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
      {/* count 생기면 하기  */}
      {/* <TypoGraphy type="body2">{likeCount}</TypoGraphy> */}
      <UnLikeButton
        size="20px"
        onClick={handleUnLikeButton}
        selected={unLikeSelected}
        color={unLikeSelected ? customColor.skyBlue : 'black'}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const LikeButton = styled(AiOutlineLike)`
  &:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
    color: ${customColor.skyBlue};
  }
`;

const UnLikeButton = styled(AiOutlineDislike)`
  margin-left: 16px;
  &:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
    color: ${customColor.skyBlue};
  }
`;
