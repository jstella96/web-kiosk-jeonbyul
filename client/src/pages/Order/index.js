import OrderItem from 'components/OrderItem';
import { useOrderInfo } from 'context/orderInfoContext';

import './index.scss';
const Order = ({ changePage }) => {
  const { orderInfoDispatch, orderInfo, totalPrice } = useOrderInfo();
  const { cartItems } = orderInfo;
  const changeCartItemCount = (nextCount, index) => {
    orderInfoDispatch({ type: 'update-count', payload: { nextCount, index } });
  };

  return (
    <div className="order">
      <header className="order-header">
        <button onClick={changePage('main')}>뒤로가기</button>
        <h1>
          <span>주문 내역</span>을 확인해주세요
        </h1>
      </header>
      <main className="order-item-list">
        {cartItems.map((item, index) => (
          <OrderItem key={index} setCount={changeCartItemCount} orderItem={item} index={index} />
        ))}
      </main>
      <button className="order-button" onClick={changePage('payment')}>
        <span>₩ {totalPrice.toLocaleString()}</span>
        <span> 결제하기</span>
      </button>
    </div>
  );
};
export default Order;
