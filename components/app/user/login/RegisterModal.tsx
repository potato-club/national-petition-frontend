import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (nickName: string) => void;
};

export const RegisterModal: React.FC<Props> = ({
  visible,
  onConfirm,
  onClose,
}) => {
  const [inputNickName, setInputNickName] = useState<string>('');

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNickName(e.target.value);
  };

  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Wrapper>
        <Content>
          <TypoGraphy type="h3" color={customColor.gray}>
            닉네임을 등록해주세요
          </TypoGraphy>
          <NickNameInput
            placeholder="최대 6글자까지 가능합니다"
            maxLength={6}
            value={inputNickName}
            onChange={(e) => onChangeNickName(e)}
          />
        </Content>
        <Bottom>
          <Button onClick={() => onConfirm(inputNickName)}>
            <TypoGraphy type="h3" color={customColor.blue}>
              확인
            </TypoGraphy>
          </Button>
        </Bottom>
      </Wrapper>
    </Modal>
  );
};

const NickNameInput = styled.input`
  margin-top: 16px;
  padding: 8px;
  border: 1px solid ${customColor.gray};
  border-radius: 4px;
`;

const Wrapper = styled.div`
  background-color: ${customColor.white};
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 184px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 24px;
  outline: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: auto;
`;
