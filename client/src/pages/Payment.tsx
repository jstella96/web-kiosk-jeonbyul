import { requestPostOrder } from 'api/api';
import Loding from 'components/common/Loding';
import CashModal from 'components/Modal/CashModal/CashModal';
import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { updateMethodAndAmount } from 'reducer/orderInfo';
import { useState } from 'react';
import styled from 'styled-components';
import { FlexboxColumn, Header } from 'styles/common';
import { convertCartItemsTofoods } from 'utils/order';
import { PAGE_URL } from 'constants/pageUrl';
import { Link, useNavigate } from 'react-router-dom';
interface PaymentMethodProps {
  setOrderNum: React.Dispatch<React.SetStateAction<number>>;
}

const PaymentMethod = ({ setOrderNum }: PaymentMethodProps) => {
  const { orderInfo, totalPrice, orderInfoDispatch } = useOrderInfo();
  const [isLoding, setIsLoding] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);
  const navigate = useNavigate();

  const orderFoods = async (paymentMethod: string, inputAmount: number) => {
    const { cartItems } = orderInfo;
    const foods = convertCartItemsTofoods(cartItems);
    const orderNum = await requestPostOrder({
      foods,
      payment: paymentMethod,
      date: new Date()
    });
    orderInfoDispatch(updateMethodAndAmount({ paymentMethod, inputAmount }));
    setOrderNum(orderNum);
    startLoding();
  };

  const startLoding = () => {
    setIsLoding(true);
    setTimeout(() => {
      navigate(PAGE_URL.RECEIPT, { replace: true });
    }, 3000);
  };

  return (
    <PaymentMethodLayout>
      <Header>
        <Link to={PAGE_URL.ORDER}>
          <button>뒤로가기</button>
        </Link>
        <h1>
          <span>결제 방법</span>을 확인해주세요
        </h1>
      </Header>
      <Main>
        <FlexboxColumn>
          <MethodButton onClick={() => orderFoods('card', totalPrice)}>카드결제</MethodButton>
          <MethodButton onClick={() => setShowCashModal(true)}>현금결제</MethodButton>
        </FlexboxColumn>
      </Main>
      <Loding isLoding={isLoding} />
      <CashModal
        isOpen={showCashModal}
        isLoding={isLoding}
        totalPrice={totalPrice}
        orderFoods={orderFoods}
        onClose={() => setShowCashModal(false)}
      ></CashModal>
    </PaymentMethodLayout>
  );
};
export default PaymentMethod;

const PaymentMethodLayout = styled.div`
  height: 100%;
  color: ${COLORS.primary};
  display: grid;
  grid-template-rows: 0.5fr 7fr;
`;
const Main = styled.main`
  padding: 0 1rem;
`;
const MethodButton = styled.button`
  margin: 0 1.2rem;
  width: 100%;
  padding: 2rem;
  border: 1px solid ${COLORS.primary};
  border-radius: 0.2rem;
  margin-bottom: 1rem;
`;
