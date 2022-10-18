import OrderItem from 'components/OrderItem/OrderItem';
import COLORS from 'constants/color';
import { PAGE_URL } from 'constants/pageUrl';
import { useOrderInfo } from 'context/orderInfoContext';

import { Link } from 'react-router-dom';
import { updateCount } from 'reducer/orderInfo';
import styled from 'styled-components';
import { Header } from 'styles/common';

const Order = () => {
  const { orderInfoDispatch, orderInfo, totalPrice } = useOrderInfo();
  const { cartItems } = orderInfo;

  const onEditCount = (index: number) => (nextCount: number) => {
    orderInfoDispatch(updateCount({ index, nextCount }));
  };

  return (
    <OrderLayout>
      <Header>
        <Link to={PAGE_URL.MAIN}>
          <button>뒤로가기</button>
        </Link>
        <h1>
          <span>주문 내역</span>을 확인해주세요
        </h1>
      </Header>
      <ItemBox>
        {cartItems.map((item, index) => (
          <OrderItem key={index} onEditCount={onEditCount(index)} orderItem={item} />
        ))}
      </ItemBox>
      <Link to={PAGE_URL.PAYMENT}>
        <OrderButton>
          <span>{totalPrice.toLocaleString()}원</span>
          <span> 결제하기</span>
        </OrderButton>
      </Link>
    </OrderLayout>
  );
};
export default Order;

const OrderLayout = styled.div`
  height: 100vh;
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
  height: 100%;
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
