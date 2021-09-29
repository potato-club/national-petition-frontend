import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { UrlInput, TypoGraphy, Top5TextLoop } from '.';

type Props = {
  title: string;
  top5Visible?: boolean;
};

export const TitleHeader: React.FC<Props> = ({ title, top5Visible = true }) => {
  return (
    <Wrapper>
      <Title>
        <TypoGraphy type="Head" color={customColor.white} textAlign="center">
          {title}
        </TypoGraphy>
      </Title>
      <UrlInput />
      {top5Visible && <Top5TextLoop />}
    </Wrapper>
  );
};

const ImageWrapper = styled.div`
  background-image: url('/img/headerbg.jpeg');
  background-size: cover;
  opacity: 0.5;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100vw;
  z-index: -1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  padding-bottom: 50px;
  background-image: linear-gradient(
      rgba(3, 68, 151, 0.2),
      rgba(3, 68, 151, 0.2)
    ),
    url('/img/headerbg.jpeg');
  background-size: cover;
`;

const Divide = styled.div`
  margin-top: 48px;
`;

const Title = styled.div`
  margin: 20px;
  margin-top: 120px;
`;
