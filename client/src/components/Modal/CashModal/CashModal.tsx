import COLORS from 'constants/color';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { flexColumn, modal } from 'styles/common';

interface CashModalProps {
  isOpen: boolean;
  isLoding: boolean;
  totalPrice: number;
  orderFoods: any;
  onClose: () => void;
}

const CashModal = ({ isOpen, isLoding, totalPrice, orderFoods, onClose }: CashModalProps) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (sum >= totalPrice && !isLoding) {
      orderFoods('cash', sum);
    }
  }, [sum, totalPrice, orderFoods, isLoding]);

  return (
    <Modal isOpen={isOpen}>
      <Section>
        <DeleteButton onClick={onClose}>
          <span>x</span>
        </DeleteButton>
        <ButtonBox>
          <button onClick={() => setSum(sum + 500)}>500원</button>
          <button onClick={() => setSum(sum + 1000)}>1,000원</button>
          <button onClick={() => setSum(sum + 5000)}>5,000원</button>
          <button onClick={() => setSum(sum + 10000)}>10,000원</button>
          <button onClick={() => setSum(sum + 50000)}>50,000원</button>
        </ButtonBox>
        <Footer>
          <div>
            투입 금액: <span>{sum.toLocaleString()}원</span>
          </div>
          <div>
            결제 금액: <span>{totalPrice.toLocaleString()}원</span>
          </div>
        </Footer>
      </Section>
    </Modal>
  );
};
const Section = styled.section`
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  background-color: ${COLORS.white};
  position: relative;
`;
const ButtonBox = styled.main`
  ${flexColumn}
  padding: 2rem;
  button {
    border: 1px solid ${COLORS.black};
    border-radius: 0.2rem;
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;
const Modal = styled.div<{ isOpen: Boolean }>`
  ${modal}
  display: none;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        display: flex;
      `;
    }
  }}
`;
const DeleteButton = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1rem;
  border-radius: 0.6rem;
  position: absolute;
  right: -0.5rem;
  top: -0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  padding: 0.5rem;
  gap: 0.5rem;
`;

export default CashModal;
