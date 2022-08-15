import OrderItem from 'components/OrderItem';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { updateCount } from 'hooks/orderInfoState';

import './index.scss';
const Order = () => {
  const { movePage } = usePage();
  const { orderInfoDispatch, orderInfo, totalPrice } = useOrderInfo();
  const { cartItems } = orderInfo;

  const onChangeCartItemCount = (nextCount, index) => {
    orderInfoDispatch(updateCount({ nextCount, index }));
  };

  return (
    <div className="order">
      <header className="order-header">
        <button onClick={() => movePage('main')}>뒤로가기</button>
        <h1>
          <span>주문 내역</span>을 확인해주세요
        </h1>
      </header>
      <main className="order-item-list">
        {cartItems.map((item, index) => (
          <OrderItem key={index} setCount={onChangeCartItemCount} orderItem={item} index={index} />
        ))}
      </main>
      <button className="order-button" onClick={() => movePage('payment')}>
        <span>₩ {totalPrice.toLocaleString()}</span>
        <span> 결제하기</span>
      </button>
    </div>
  );
};
export default Order;
