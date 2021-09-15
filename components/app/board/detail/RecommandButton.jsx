import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { TypoGraphy } from 'components/common';

export const RecommandButton = ({ type }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        {type === 'like' ? (
          <AiOutlineLike size="56px" color={customColor.blue} />
        ) : (
          <AiOutlineDislike size="56px" color={customColor.blue} />
        )}
      </ButtonWrapper>
      <Gap />
      <TypoGraphy
        type="Title"
        fontWeight="bold"
        textAlign="center"
        color={customColor.gray}>
        320,100
      </TypoGraphy>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-left: 88px;
  margin-right: 88px;
  background-color: ${customColor.white};
  border-radius: 1000px;
  cursor: pointer;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
`;

const Gap = styled.div`
  margin-top: 16px;
`;
