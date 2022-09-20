import CircleButton from 'components/common/CircleButton/CircleButton';
import COLORS from 'constants/color';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { modal } from 'styles/common';
interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  children?: React.ReactNode;
  hasHeaderClose?: boolean;
}
const Modal = ({ isShowing, hide, children, hasHeaderClose }: ModalProps) =>
  ReactDOM.createPortal(
    <>
      {isShowing && (
        <ModalOverlay onClick={hide}>
          <ModalSection onClick={(e) => e.stopPropagation()}>
            {hasHeaderClose && (
              <ModalCloseButton>
                <CircleButton onClick={hide} color="secondary">
                  X
                </CircleButton>
              </ModalCloseButton>
            )}
            <ModalContent>{children}</ModalContent>
          </ModalSection>
        </ModalOverlay>
      )}
    </>,
    document.querySelector('#root') as HTMLElement
  );

const ModalOverlay = styled.div`
  ${modal}
  display: flex;
`;
const ModalSection = styled.section`
  width: 85%;
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 0.2rem;
  background-color: ${COLORS.white};
  position: relative;
`;

const ModalCloseButton = styled.div`
  position: absolute;
  right: -0.5rem;
  top: -0.5em;
`;

const ModalContent = styled.main``;
export default Modal;
