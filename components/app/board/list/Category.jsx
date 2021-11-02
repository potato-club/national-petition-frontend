import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common/index';
import { customColor } from 'constants/index';

export const Category = ({ category, handleCategory, text }) => {
  const [CheckCategory, setCheckCategory] = useState(false);
  useEffect(() => {
    if (category === '' && text === '전체') setCheckCategory(true);
    else if (category === 'POLITICS' && text === '정치개혁')
      setCheckCategory(true);
    else if (category === 'DIPLOMACY' && text === '외교/통일/국방')
      setCheckCategory(true);
    else if (category === 'JOB' && text === '일자리') setCheckCategory(true);
    else if (category === 'FUTURE' && text === '미래') setCheckCategory(true);
    else if (category === 'GROWTH' && text === '성장동력')
      setCheckCategory(true);
    else if (category === 'FARM' && text === '농산어촌') setCheckCategory(true);
    else if (category === 'HEALTH' && text === '보건복지')
      setCheckCategory(true);
    else if (category === 'BABY' && text === '육아/교육')
      setCheckCategory(true);
    else if (category === 'SAFE' && text === '안전/환경')
      setCheckCategory(true);
    else if (category === 'AGING' && text === '저출산/고령화대책')
      setCheckCategory(true);
    else if (category === 'ADMINISTRATION' && text === '행정')
      setCheckCategory(true);
    else if (category === 'PET' && text === '반려동물') setCheckCategory(true);
    else if (category === 'TRAFFIC' && text === '교통/건축/국토')
      setCheckCategory(true);
    else if (category === 'ECONOMY' && text === '경제민주화')
      setCheckCategory(true);
    else if (category === 'HUMAN' && text === '인권/성평등')
      setCheckCategory(true);
    else if (category === 'CULTURE' && text === '문화/예술/체육/언론')
      setCheckCategory(true);
    else if (category === 'ETC' && text === '기타') setCheckCategory(true);
    else setCheckCategory(false);
  }, [category]);
  return (
    <Item CheckCategory={CheckCategory} onClick={() => handleCategory(text)}>
      <TypoGraphy
        fontWeight={CheckCategory === true && 'bold'}
        type="body1"
        color={CheckCategory === true ? customColor.skyBlue : customColor.gray}
        textAlign="center">
        {text}
      </TypoGraphy>
    </Item>
  );
};
const Item = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;
