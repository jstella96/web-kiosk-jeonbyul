import { requestPostOrder } from 'api/api';
import Loding from 'components/common/Loding';
import CashModal from 'components/Modal/CashModal';
import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { updateInputAmount, updatePaymentMethod } from 'hooks/orderInfoState';
import { useState } from 'react';
import styled from 'styled-components';
import { FlexboxColumn } from 'styles/common';
interface PaymentMethodProps {
  setOrderNum: React.Dispatch<React.SetStateAction<number>>;
}

const PaymentMethod = ({ setOrderNum }: PaymentMethodProps) => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice, orderInfoDispatch } = useOrderInfo();
  const { cartItems } = orderInfo;
  const [isLoding, setIsLoding] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);

  const orderFoods = async (method: string, input: number) => {
    const foods = cartItems.map((item) => {
      const { count, food, sizeOption, temperatureOption } = item;
      const orderFood = {
        foodId: food?.id,
        foodName: food?.name,
        unit: count,
        options: {
          size: sizeOption.key,
          temperature: temperatureOption.key
        },
        eachPrice: food?.basePrice
      };
      return orderFood;
    });

    const result = {
      foods,
      payment: method,
      date: new Date()
    };

    const orderNum = await requestPostOrder(result);
    setPayInfo(method, input);
    setOrderNum(orderNum);
    startLoding();
  };

  const setPayInfo = (paymentMethod: string, inputAmount: number) => {
    orderInfoDispatch(updateInputAmount({ inputAmount }));
    orderInfoDispatch(updatePaymentMethod({ paymentMethod }));
  };

  const startLoding = () => {
    setIsLoding(true);
    setTimeout(() => {
      setIsLoding(false);
      movePage('receipt');
    }, 3000);
  };

  return (
    <PaymentMethodLayout>
      <header className="payment_header">
        <button onClick={() => movePage('main')}>뒤로가기</button>
        <h1>
          <span>결제 방법</span>을 확인해주세요
        </h1>
      </header>
      <main>
        <FlexboxColumn>
          <button className="payment_item" onClick={() => orderFoods('card', totalPrice)}>
            카드결제
          </button>
          <button className="payment_item" onClick={() => setShowCashModal(true)}>
            현금결제
          </button>
        </FlexboxColumn>
      </main>
      <Loding isLoding={isLoding} />
      <CashModal isOpen={showCashModal} orderFoods={orderFoods} totalPrice={totalPrice}></CashModal>
    </PaymentMethodLayout>
  );
};
export default PaymentMethod;

const PaymentMethodLayout = styled.div`
  height: 100vh;
  color: ${COLORS.primary};
  display: grid;
  grid-template-rows: 0.5fr 7fr;
  padding: 0 1.2rem;
  .payment_header {
    padding: 1.7rem 0rem;
    h1 {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
    span {
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
  .payment_item {
    width: 100%;
    padding: 2rem;
    border: 1px solid ${COLORS.primary};
    border-radius: 0.2rem;
    margin-bottom: 1rem;
  }
`;
