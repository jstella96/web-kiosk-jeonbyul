import OrderItem from 'components/OrderItem/OrderItem';
import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { updateCount } from 'reducer/orderInfo';
import styled from 'styled-components';
import { Header } from 'styles/common';

const Order = () => {
  const { movePage } = usePage();
  const { orderInfoDispatch, orderInfo, totalPrice } = useOrderInfo();
  const { cartItems } = orderInfo;
  const onChangeCartItemCount = (nextCount: number, index: number) => {
    orderInfoDispatch(updateCount({ nextCount, index }));
  };

  return (
    <OrderLayout>
      <Header>
        <button onClick={() => movePage('main')}>뒤로가기</button>
        <h1>
          <span>주문 내역</span>을 확인해주세요
        </h1>
      </Header>
      <ItemBox>
        {cartItems.map((item, index) => (
          <OrderItem key={index} setCount={onChangeCartItemCount} orderItem={item} index={index} />
        ))}
      </ItemBox>
      <OrderButton onClick={() => movePage('payment')}>
        <span>{totalPrice.toLocaleString()}원</span>
        <span> 결제하기</span>
      </OrderButton>
    </OrderLayout>
  );
};
export default Order;

const OrderLayout = styled.div`
  height: 100%;
  color: ${COLORS.primary};
  display: grid;
  grid-template-rows: 0.5fr 6fr 1fr;
`;

const ItemBox = styled.main`
  overflow: scroll;
  padding: 0 1rem;
`;

const OrderButton = styled.button`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  span:nth-child(1) {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }
  span:nth-child(2) {
    font-size: 1.6rem;
  }
`;
