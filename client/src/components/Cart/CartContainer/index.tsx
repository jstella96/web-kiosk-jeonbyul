import React from 'react';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { clearCart, deleteCartItem, updateCount } from 'hooks/orderInfoState';
import CartItem from '../CartItem';
import { FlexboxRow, flexRow } from 'styles/common';

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
          <FlexboxRow>
            <span>주문수량 </span>
            <Count>{totalCount}</Count>
          </FlexboxRow>
          <div>
            <span>총 주문금액 {totalPrice.toLocaleString()}원</span>
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
  height: 82%;
  padding: 1rem;
  background-color: ${COLORS.gray};
`;

const CartHeader = styled.div`
  ${flexRow}
  justify-content: space-between;
  color: ${COLORS.black};
  font-weight: 700;
  font-size: 1rem;
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
  margin-left: 0.2rem;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding: 0.2rem 0.8rem;
  border-radius: 0.2rem;
`;

const CartFooter = styled.footer`
  display: flex;
  height: 18%;
  button {
    flex: 1;
    color: ${COLORS.white};
    font-size: 1rem;
    font-weight: 700;
  }
  button:nth-child(1) {
    background-color: ${COLORS.blackLight};
  }
  button:nth-child(2) {
    background-color: ${COLORS.primary};
  }
`;
