import React, { useEffect, useState } from 'react';
import {
  LayoutContainer,
  TypoGraphy,
  Header,
  MessageModal,
} from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { boardApi } from 'apis/index';
import { useRouter } from 'next/router';

const add = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [petitionUrl, setPetitionUrl] = useState('');

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setPetitionUrl(router.query.url);
  }, [router.isReady]);

  // 작성완료 이벤트 : 등록API, 컨텐츠 내용 확인
  const addPage = async () => {
    if (title === '' || content === '' || petitionUrl === '') {
      // 모달 띄우고  return
      setModalContent('값을 다 입력하세요');
      setModalIsOpen(true);
      return null;
    }
    try {
      //API연동
      const {
        data: { data: postData },
      } = await boardApi.add({ title, content, petitionUrl });

      console.log(postData);
      // 연동 성공하면 성공했다고 모달 띄우기

      router.push('/board/list');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LayoutContainer>
      <IntroHeader />
      <Header />
      <FormBox>
        <FormHeader>
          <TypoGraphy type="Head" color={customColor.black} fontWeight="bold">
            게시글 등록
          </TypoGraphy>
        </FormHeader>
        <InputContentBox>
          <Title>
            <TypoGraphy type="h1" fontWeight="bold" color={customColor.gray}>
              제목
            </TypoGraphy>
          </Title>
          <Input
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Title>
            <TypoGraphy type="h1" fontWeight="bold" color={customColor.gray}>
              청원 링크
            </TypoGraphy>
          </Title>
          <Input
            placeholder="https://"
            value={petitionUrl}
            onChange={(e) => setPetitionUrl(e.target.value)}
          />
          <Title>
            <TypoGraphy type="h1" fontWeight="bold" color={customColor.gray}>
              나의 의견
            </TypoGraphy>
          </Title>
          <OpinionInput
            placeholder="자유롭게 의견을 작성하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputContentBox>
        <ButtonBox>
          <Button onClick={addPage}>
            <TypoGraphy color={customColor.white}>작성 완료</TypoGraphy>
          </Button>
        </ButtonBox>
      </FormBox>
      <MessageModal
        visible={modalIsOpen}
        onConfirm={() => setModalIsOpen(false)}
        content={modalContent}
      />
    </LayoutContainer>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -406px;
  margin-left: -589px;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 7px 11px -3px rgba(0, 0, 0, 0.75);
  background-color: white;
`;

const FormHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

const Title = styled.div`
  margin-left: 8px;
`;

const Input = styled.input`
  width: 1178px;
  height: 40px;
  background-color: #f6f6f6;
  border: none;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  font-size: 18px;
  margin-top: 8px;
  outline: none;
`;
const InputContentBox = styled.div``;
const OpinionInput = styled.textarea`
  width: 1178px;
  height: 320px;
  font-size: 20px;
  border: none;
  padding: 8px;
  background-color: #f6f6f6;
  border-radius: 4px;
  margin-top: 16px;
  resize: none;
  outline: none;
`;

const ButtonBox = styled.div`
  margin: auto;
  margin-top: 12px;
`;
const Button = styled.div`
  cursor: pointer;
  width: 160px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background: ${customColor.deepBlue};
  opacity: 0.9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`;
const IntroHeader = styled.div`
  background-color: ${customColor.deepBlue};
  width: 100vw;
  height: 480px;
  position: relative;
`;

export default add;
