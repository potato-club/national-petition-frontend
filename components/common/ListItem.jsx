import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
import Link from 'next/link';
export const ListItem = ({
  boardId,
  category,
  petitionTitle,
  subTitle,
  viewCounts,
  createdDate,
  boardLikeCounts,
  boardUnLikeCounts,
  boardCommentCounts,
}) => {
  return (
    <Link href={`/board/detail/${boardId}`}>
      <Wrapper>
        <Category>
          <TypoGraphy
            type="body1"
            color={customColor.skyBlue}
            textAlign="center"
            fontWeight="bold">
            {category}
          </TypoGraphy>
        </Category>
        <TitleWrapper>
          <MainTitle>
            <TypoGraphy type="body1" color={customColor.black} textAlign="left">
              {petitionTitle}
            </TypoGraphy>
            <CommentWrapper>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center">
                &nbsp;({boardCommentCounts})
              </TypoGraphy>
            </CommentWrapper>
          </MainTitle>
          <SubTitle>
            <MdSubdirectoryArrowRight />
            <TypoGraphy type="body2" color={customColor.gray} textAlign="left">
              {subTitle}
            </TypoGraphy>
          </SubTitle>
        </TitleWrapper>
        <SubNumber>
          <TypoGraphy
            type="body1"
            color={customColor.skyBlue}
            textAlign="center">
            {viewCounts}
          </TypoGraphy>
        </SubNumber>
        <Day>
          <TypoGraphy type="body1" color={customColor.black} textAlign="center">
            {createdDate.slice(0, 10)}
          </TypoGraphy>
        </Day>
        <GraphWrapper>
          <Bar>
            <AgreeBar
              per={
                (boardLikeCounts / (boardLikeCounts + boardUnLikeCounts)) * 100
              }
            />
            <DisagreeBar
              per={
                (boardUnLikeCounts / (boardLikeCounts + boardUnLikeCounts)) *
                100
              }
            />
          </Bar>
        </GraphWrapper>
      </Wrapper>
    </Link>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid ${customColor.gray};
  :hover {
    cursor: pointer;
    background-color: ${customColor.grayBg};
  }
`;
const Category = styled.div`
  width: 13%;
`;
const TitleWrapper = styled.div`
  width: 61%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
const MainTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
`;
const CommentWrapper = styled.div`
  margin-bottom: 2px;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  display: flex;
`;

const SubNumber = styled.div`
  width: 8%;
`;
const Day = styled.div`
  width: 8%;
`;
const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;
const Bar = styled.div`
  display: flex;
  width: 80%;
  height: 15px;
  background-color: ${customColor.grayBg};
`;
const AgreeBar = styled.div`
  width: ${({ per }) => per + '%'};
  height: 100%;
  background-color: ${customColor.blue};
`;
const DisagreeBar = styled.div`
  width: ${({ per }) => per + '%'};
  height: 100%;
  background-color: ${customColor.gray};
`;
