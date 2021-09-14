import React, { useMemo } from 'react';
import styled from '@emotion/styled';

type TypoGraphyProps = {
  type?:
    | 'Head'
    | 'Title'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'sm1'
    | 'sm2';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
};

type StyledTypoGraphyProps = {
  type: '48' | '32' | '24' | '22' | '20' | '18' | '14' | '12' | '10' | '8';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
};

export const TypoGraphy: React.FC<TypoGraphyProps> = ({
  children,
  type,
  color,
  textAlign,
  fontWeight,
  fontHeight,
}) => {
  const changeTypeFontSize = useMemo(() => {
    switch (type) {
      case 'Head':
        return '48';
      case 'Title':
        return '32';
      case 'h1':
        return '24';
      case 'h2':
        return '22';
      case 'h3':
        return '20';
      case 'h4':
        return '18';
      case 'body1':
        return '14';
      case 'body2':
        return '12';
      case 'sm1':
        return '10';
      case 'sm2':
        return '8';
      default:
        return '14';
    }
  }, [type]);

  return (
    <TypoGraphyText
      type={changeTypeFontSize}
      color={color || '#333333'}
      textAlign={textAlign || 'left'}
      fontWeight={fontWeight || 'normal'}
      fontHeight={fontHeight || 'normal'}>
      {children}
    </TypoGraphyText>
  );
};

const TypoGraphyText = styled.div<StyledTypoGraphyProps>`
  font-size: ${(props) => props.type}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  ${(props) =>
    props.fontHeight === 'normal' ? '' : `line-height: ${props.fontHeight};`}
`;
