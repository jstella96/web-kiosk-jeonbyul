import { requestPostOrder } from 'api/api';
import Loding from 'components/common/Loding';
import CashModal from 'components/Modal/CashModal';
import { useCartItems } from 'hooks/useCartItems';
import { useState } from 'react';
import './index.scss';
const PaymentMethod = ({ changePage, setOrderNum, setPayInfo }) => {
  const { cartItems } = useCartItems();
  const [isLoding, setIsLoding] = useState(false);
  const [isCashModal, setIsCashModal] = useState(false);

  const { totalPrice } = useCartItems();

  const order = async (method, input) => {
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
    setPayInfo({ method, input, totalPrice });
    setOrderNum(orderNum);
    startLoding();
  };

  const startLoding = () => {
    setIsLoding(true);
    setTimeout(() => {
      setIsLoding(false);
      changePage('receipt')();
    }, 3000);
  };

  return (
    <div className="payment">
      <header className="payment_header">
        <button onClick={changePage('main')}>뒤로가기</button>
        <h1>
          <span>결제 방법</span>을 확인해주세요
        </h1>
      </header>
      <main>
        <div className="payment_wrapper">
          <button className="payment_item" onClick={() => order('card', totalPrice)}>
            카드결제
          </button>
          <button className="payment_item" onClick={() => setIsCashModal(true)}>
            현금결제
          </button>
        </div>
      </main>
      <Loding isLoding={isLoding} />
      <CashModal isOpen={isCashModal} order={order} totalPrice={totalPrice}></CashModal>
    </div>
  );
};
export default PaymentMethod;
