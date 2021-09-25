import React from 'react';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from './TypoGraphy';

type Props = {
  visible: boolean;
  content: string;
  onClose: () => void;
  onConfirm?: () => void;
};

export const MessageModal: React.FC<Props> = ({
  visible,
  content,
  onConfirm,
  onClose,
}) => {
  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Wrapper>
        <Content>
          <TypoGraphy type="h3" color={customColor.gray}>
            {content}
          </TypoGraphy>
        </Content>
        <Bottom>
          <Button onClick={onConfirm || onClose}>
            <TypoGraphy type="h3" color={customColor.blue}>
              확인
            </TypoGraphy>
          </Button>
        </Bottom>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  background-color: ${customColor.white};
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 160px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 24px;
  outline: none;
`;

const Content = styled.div`
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
