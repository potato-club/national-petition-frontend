import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { TypoGraphy } from 'components/common';

export const RecommandButton = React.memo(
  ({ selected, type, onClick, count }) => {
    return (
      <Wrapper>
        {/* <ButtonWrapper onClick={onClick} selected={selected}> */}
        <ButtonWrapper onClick={() => onClick()} selected={selected}>
          {type === 'like' ? (
            <AiOutlineLike
              size="56px"
              color={selected ? customColor.white : customColor.blue}
            />
          ) : (
            <AiOutlineDislike
              size="56px"
              color={selected ? customColor.white : customColor.blue}
            />
          )}
        </ButtonWrapper>
        <Gap />
        <TypoGraphy
          type="Title"
          fontWeight="bold"
          textAlign="center"
          color={customColor.gray}>
          {count}
        </TypoGraphy>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  &:hover {
    transform: translate(0px, -16px);
    transition-duration: 1s;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-left: 88px;
  margin-right: 88px;
  background-color: ${(props) =>
    props.selected ? customColor.blue : customColor.white};
  border-radius: 1000px;
  cursor: pointer;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  &:hover {
    opacity: 0.8;
  }
`;

const Gap = styled.div`
  margin-top: 16px;
`;
