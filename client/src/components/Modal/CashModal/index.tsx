import COLORS from 'constants/color';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { flexColumn, modal } from 'styles/common';

interface CashModalProps {
  isOpen: boolean;
  totalPrice: any;
  orderFoods: any;
}

const CashModal = ({ isOpen, totalPrice, orderFoods }: CashModalProps) => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    if (sum >= +totalPrice) {
      orderFoods('cash', sum);
    }
  }, [sum]);
  return (
    <Modal isOpen={isOpen}>
      <Section>
        <ButtonBox>
          <button onClick={() => setSum(sum + 500)}>500 원</button>
          <button onClick={() => setSum(sum + 1000)}>1,000 원</button>
          <button onClick={() => setSum(sum + 5000)}>5,000 원</button>
          <button onClick={() => setSum(sum + 10000)}>10,000 원</button>
          <button onClick={() => setSum(sum + 50000)}>50,000 원</button>
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
