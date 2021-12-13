import React, { useState, useEffect } from 'react';
import {
  LayoutContainer,
  TypoGraphy,
  TitleHeader,
  Header,
} from 'components/common/index';
import styled from '@emotion/styled';
import { customColor, socketKey } from 'constants/index';
import { boardApi, commentApi } from 'apis';
import { FaUserEdit } from 'react-icons/fa';
import {
  RecommandButton,
  CommentAddForm,
  CommentList,
  Information,
} from 'components/app/board/detail';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { getErrorMessage, socketManager } from 'util/index';

// test with :: 11789

const detail = ({ detailInfo }) => {
  const [likeSelected, setLikeSelected] = useState(false);
  const [unLikeSelected, setUnLikeSeleted] = useState(false);
  const [likeCount, setLikeCount] = useState(detailInfo.boardLikeCounts);
  const [unLikeCount, setUnLikeCount] = useState(detailInfo.boardUnLikeCounts);
  const [commentReset, setCommentReset] = useState(false);
  const { addToast } = useToasts();

  const router = useRouter();
  const { id: boardId } = router.query;

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: status },
        } = await boardApi.getLikeStatus(boardId);

        status !== null &&
          (status === 'LIKE' ? setLikeSelected(true) : setUnLikeSeleted(true));
      } catch (e) {}
    })();
  }, []);

  const onRecommendSelect = async (state, type) => {
    // 추천수 응답 논의 필요
    if (!state) {
      const {
        data: { data: result },
      } = await boardApi.like({
        boardId: boardId,
        boardState: type === 'like' ? 'LIKE' : 'UNLIKE',
      });

      if (result === 'OK') {
        if (likeSelected || unLikeSelected) {
          setLikeSelected((cur) => !cur);
          setUnLikeSeleted((cur) => !cur);
        } else {
          type === 'like'
            ? setLikeSelected((cur) => !cur)
            : setUnLikeSeleted((cur) => !cur);
        }
      }
    } else {
      const {
        data: { data: result },
      } = await boardApi.likeCancel({ boardId: boardId });

      if (result === 'OK') {
        type === 'like'
          ? setLikeSelected((cur) => !cur)
          : setUnLikeSeleted((cur) => !cur);
      }
    }

    const {
      data: { data: info },
    } = await boardApi.getDetail(boardId);

    setLikeCount(info.boardLikeCounts);
    setUnLikeCount(info.boardUnLikeCounts);
  };

  // TODO
  const addComment = async (comment) => {
    try {
      await commentApi.add(boardId, { content: comment });

      socketManager.socket.emit(socketKey.CREATE_COMMENT, {
        memberId: detailInfo.memberId,
      });

      setCommentReset((cur) => !cur);
      addToast('댓글이 작성되었습니다', { appearance: 'success' });
    } catch (e) {
      addToast(getErrorMessage(e), { appearance: 'error' });
    }
  };

  return (
    <LayoutContainer>
      <Header />
      <TitleHeader title={detailInfo.title} top5Visible={false} />
      <Container>
        <PetitionTitle>
          <TypoGraphy
            type="Head"
            color={customColor.deepBlue}
            textAlign="center">
            {detailInfo.petitionTitle}
          </TypoGraphy>
        </PetitionTitle>
        <StatusWrapper>
          <PetitionDivider />
          <TypoGraphy type="h1" color={customColor.skyBlue} textAlign="center">
            {detailInfo.status}
          </TypoGraphy>
          <PetitionDivider />
        </StatusWrapper>
        <InformationForm>
          <Information
            title="작성자"
            content={detailInfo.memberResponse.nickName}
          />
          <Information title="조회수" content={detailInfo.viewCounts} />
          <Information
            title="게시글 등록"
            content={moment(detailInfo.createdDate).format('YYYY-MM-DD')}
          />
          <Information title="청원등록" content={'2021-09-11'} />
        </InformationForm>
        <UserContent>
          <NickNameForm>
            <FaUserEdit
              size="24px"
              colo={customColor.black}
              style={{ marginRight: 8 }}
            />
            <TypoGraphy type="h4" color={customColor.black}>
              작성자 의견
            </TypoGraphy>
          </NickNameForm>
          <TypoGraphy type="body1" color={customColor.black} fontWeight="300">
            {detailInfo.content}
          </TypoGraphy>
        </UserContent>
        <PepitionContent>
          <TypoGraphy type="h4" color={customColor.black} fontHeight="1.5">
            {detailInfo.petitionContent.split('\n').map((line, index) => (
              <span key={index.toString()}>
                {line}
                <br />
              </span>
            ))}
          </TypoGraphy>
        </PepitionContent>
        {/* 좋아요/싫어요 관련 */}
        <RecommandWrapper>
          <RecommandButton
            onClick={() => onRecommendSelect(likeSelected, 'like')}
            selected={likeSelected}
            type="like"
            count={likeCount}
          />
          <RecommandButton
            onClick={() => onRecommendSelect(unLikeSelected, 'unlike')}
            selected={unLikeSelected}
            type="unlike"
            count={unLikeCount}
          />
        </RecommandWrapper>
        <CommentInputForm>
          <CommentAddForm onSubmit={addComment} />
        </CommentInputForm>
        {/* 댓글들 */}
        <CommentList boardId={boardId} commentReset={commentReset} />
      </Container>
    </LayoutContainer>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const {
    data: { data: detailInfo },
  } = await boardApi.getDetail(id);

  return {
    props: { detailInfo },
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1178px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  border: 1px solid ${customColor.grayBg};
  border-radius: 4px;
  padding: 16px;
`;

const IntroHeader = styled.div`
  background-color: ${customColor.deepBlue};
  width: 100vw;
  height: 480px;
`;

const AuthorTitle = styled.div`
  margin-top: 32px;
  /* border: 1px solid; */
`;
const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  /* border: 1px solid; */
`;
const PetitionTitle = styled.div`
  margin-top: 32px;
  /* border: 1px solid; */
`;

const PetitionDivider = styled.div`
  width: 64px;
  height: 1px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: ${customColor.grayBg};
`;

const InformationForm = styled.div`
  background-color: ${customColor.grayBg};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  gap: 0px 80px;
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const UserContent = styled.div`
  background-color: ${customColor.grayBg};
  border-radius: 4px;
  min-height: 128px;
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 16px;
`;

const PepitionContent = styled.div`
  margin-top: 16px;
  padding: 16px;
  /* border: 1px solid; */
`;

const RecommandWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  height: 280px;
  /* border: 1px solid; */
`;

const CommentInputForm = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  /* border: 1px solid; */
`;

const NickNameForm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export default detail;
