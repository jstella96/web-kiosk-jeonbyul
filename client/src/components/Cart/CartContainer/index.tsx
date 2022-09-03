import React from 'react';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { clearCart, deleteCartItem, updateCount } from 'hooks/orderInfoState';
import CartItem from '../CartItem';

const CartContainer = () => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice, totalCount, orderInfoDispatch } = useOrderInfo();
  const { cartItems } = orderInfo;

  const onDeleteCartItem = (index: number) => {
    orderInfoDispatch(deleteCartItem({ index }));
  };

  const onEditCount = (nextCount: number, index: number) => {
    orderInfoDispatch(updateCount({ nextCount, index }));
  };

  const onClearCart = () => {
    orderInfoDispatch(clearCart());
  };

  const order = () => {
    if (cartItems.length === 0) return;
    movePage('order');
  };

  return (
    <Container>
      <CartMain>
        <CartHeader>
          <div>
            <span>주문수량 </span>
            <Count>{totalCount}</Count>
          </div>
          <div>
            <span>총 주문금액 ₩ {totalPrice.toLocaleString()}</span>
          </div>
        </CartHeader>
        <CartItemList>
          {cartItems.map((cartItem, index) => (
            <CartItem
              key={index}
              cartItem={cartItem}
              index={index}
              onEditCount={onEditCount}
              onDelete={onDeleteCartItem}
            />
          ))}
        </CartItemList>
      </CartMain>
      <CartFooter>
        <button onClick={onClearCart}>전체취소</button>
        <button onClick={order}>주문하기</button>
      </CartFooter>
    </Container>
  );
};
export default CartContainer;

const Container = styled.div`
  height: 100%;
  width: 100vw;
`;

const CartMain = styled.div`
  height: 80%;
  padding: 1rem;
  background-color: ${COLORS.gray};
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.black};
  font-weight: 700;
  font-size: 1.2rem;
`;

const CartItemList = styled.div`
  display: flex;
  width: 100%;
  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Count = styled.span`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding: 0.1rem 1.2rem;
  border-radius: 0.2rem;
  font-size: 1rem;
`;

const CartFooter = styled.footer`
  display: flex;
  height: 20%;
  button {
    flex: 1 1 40%;
    color: ${COLORS.white};
    font-size: 1.2rem;
    font-weight: 700;
  }
  button:nth-child(1) {
    background-color: ${COLORS.blackLight};
  }
  button:nth-child(2) {
    background-color: ${COLORS.primary};
  }
`;
