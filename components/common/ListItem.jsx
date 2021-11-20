import React, { useState, useEffect } from 'react';
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
  const [isBarHover, setIsBarHover] = useState(1);
  const [percent, setPercent] = useState(
    (boardLikeCounts / (boardLikeCounts + boardUnLikeCounts)) * 100,
  );
  useEffect(() => {
    if (isNaN(percent)) {
      setPercent(0);
    }
  }, []);
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
        <GraphWrapper
          onMouseOver={() => {
            setIsBarHover(0);
          }}
          onMouseOut={() => {
            setIsBarHover(1);
          }}>
          {isBarHover ? (
            <Bar>
              <AgreeBar
                per={
                  (boardLikeCounts / (boardLikeCounts + boardUnLikeCounts)) *
                  100
                }
              />
              <DisagreeBar
                per={
                  (boardUnLikeCounts / (boardLikeCounts + boardUnLikeCounts)) *
                  100
                }
              />
            </Bar>
          ) : (
            <Percent>
              <TypoGraphy
                type="body1"
                color={customColor.skyBlue}
                textAlign="center">
                {parseInt(percent)}%
              </TypoGraphy>
            </Percent>
          )}
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
  width: 14%;
`;
const TitleWrapper = styled.div`
  width: 60%;

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
  display: flex;
  align-items: flex-start;
  width: 50px;
  margin-bottom: 2px;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  display: flex;
`;

const SubNumber = styled.div`
  width: 7%;
`;
const Day = styled.div`
  width: 9%;
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
  background-color: ${customColor.gray};
  border: 1px solid ${customColor.blue};
`;
const AgreeBar = styled.div`
  width: ${({ per }) => per + '%'};
  height: 100%;
  background-color: ${customColor.blue};
`;
const DisagreeBar = styled.div`
  width: ${({ per }) => per + '%'};
  height: 100%;
  background-color: ${customColor.white};
`;

const Percent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
