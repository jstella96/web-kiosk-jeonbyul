import COLORS from 'constants/color';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

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
      <section>
        <main className="cash-select-button">
          <button onClick={() => setSum(sum + 500)}>500 원</button>
          <button onClick={() => setSum(sum + 1000)}>1,000 원</button>
          <button onClick={() => setSum(sum + 5000)}>5,000 원</button>
          <button onClick={() => setSum(sum + 10000)}>10,000 원</button>
          <button onClick={() => setSum(sum + 50000)}>50,000 원</button>
        </main>
        <footer className="cash-footer">
          <div>
            투입 금액 <span>{sum.toLocaleString()}</span>
          </div>
          <div>
            결제 금액 <span>{totalPrice.toLocaleString()}</span>
          </div>
        </footer>
      </section>
    </Modal>
  );
};

const Modal = styled.div<{ isOpen: Boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        display: flex;
        align-items: center;
      `;
    }
  }}

  section {
    max-width: 40rem;
    margin: 0 auto;
    background-color: ${COLORS.white};
  }

  main {
    padding: 2rem;
    display: flex;
    flex-direction: center;
    align-items: center;
  }
  .cash-footer {
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: ${COLORS.black};
    color: ${COLORS.white};
    padding-right: 1rem;
    div {
      margin-left: 1rem;
    }
  }
  .cash-select-button {
    display: flex;
    button {
      border: 1px solid ${COLORS.black};
      border-radius: 0.2rem;
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    button:hover {
      background-color: ${COLORS.grayLight};
    }
  }
`;

export default CashModal;
