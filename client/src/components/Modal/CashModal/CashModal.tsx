import Button from 'components/common/Button/Button';
import COLORS from 'constants/color';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { flexColumn, modal } from 'styles/common';
import Modal from '../Modal/Modal';

interface CashModalProps {
  isOpen: boolean;
  isLoding: boolean;
  totalPrice: number;
  orderFoods: any;
  onClose: () => void;
}

const AMOUNT = [500, 1000, 5000, 10000, 50000];
const CashModal = ({ isOpen, isLoding, totalPrice, orderFoods, onClose }: CashModalProps) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (sum >= totalPrice && !isLoding) {
      orderFoods('cash', sum);
    }
  }, [sum, totalPrice, orderFoods, isLoding]);

  return (
    <Modal isShowing={isOpen} hide={onClose} hasHeaderClose>
      <ModalContent>
        <ButtonBox>
          {AMOUNT.map((item) => (
            <AmountButton size="fullWidth" onClick={() => setSum(sum + item)}>
              <span>{item.toLocaleString()}원</span>
            </AmountButton>
          ))}
        </ButtonBox>
        <Footer>
          <div>
            투입 금액: <span>{sum}원</span>
          </div>
          <div>
            결제 금액: <span>{totalPrice}원</span>
          </div>
        </Footer>
      </ModalContent>
    </Modal>
  );
};
const ModalContent = styled.div``;

const ButtonBox = styled.main`
  padding: 1rem;
`;

const AmountButton = styled(Button)`
  margin: 0.4rem auto;
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
