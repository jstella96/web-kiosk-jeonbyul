import { requestPostOrder } from 'api/api';
import Loding from 'components/common/Loding';
import CashModal from 'components/Modal/CashModal';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { ORDER_INFO_ACTIONS } from 'hooks/orderInfoState';
import { useState } from 'react';
import './index.scss';
const PaymentMethod = ({ setOrderNum }) => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice, orderInfoDispatch } = useOrderInfo();
  const { cartItems } = orderInfo;
  const [isLoding, setIsLoding] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);

  const orderFoods = async (method, input) => {
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

  const setPayInfo = (paymentMethod, inputAccount) => {
    orderInfoDispatch({ type: ORDER_INFO_ACTIONS.UPDATE_INPUT_ACCOUNT, payload: { inputAccount } });
    orderInfoDispatch({
      type: ORDER_INFO_ACTIONS.UPDATE_PAYMENT_METHOD,
      payload: { paymentMethod }
    });
  };

  const startLoding = () => {
    setIsLoding(true);
    setTimeout(() => {
      setIsLoding(false);
      movePage('receipt');
    }, 3000);
  };

  return (
    <div className="payment">
      <header className="payment_header">
        <button onClick={() => movePage('main')}>뒤로가기</button>
        <h1>
          <span>결제 방법</span>을 확인해주세요
        </h1>
      </header>
      <main>
        <div className="payment_wrapper">
          <button className="payment_item" onClick={() => orderFoods('card', totalPrice)}>
            카드결제
          </button>
          <button className="payment_item" onClick={() => setShowCashModal(true)}>
            현금결제
          </button>
        </div>
      </main>
      <Loding isLoding={isLoding} />
      <CashModal isOpen={showCashModal} orderFoods={orderFoods} totalPrice={totalPrice}></CashModal>
    </div>
  );
};
export default PaymentMethod;
