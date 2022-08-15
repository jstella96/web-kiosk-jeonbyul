import React from 'react';

import './index.scss';
import CartItem from '../CartItem';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { ORDER_INFO_ACTIONS } from 'hooks/orderInfoState';

const CartContainer = () => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice, totalCount, orderInfoDispatch } = useOrderInfo();
  const { cartItems } = orderInfo;

  const deleteCartItem = (index) => {
    orderInfoDispatch({ type: ORDER_INFO_ACTIONS.DELETE_CARTITEM, payload: { index } });
  };

  const changeCartItemCount = (nextCount, index) => {
    orderInfoDispatch({ type: ORDER_INFO_ACTIONS.UPDATE_COUNT, payload: { nextCount, index } });
  };

  const cleanCartItems = () => {
    orderInfoDispatch({ type: ORDER_INFO_ACTIONS.CLEAN_CARTITEM });
  };

  const tryOrder = () => {
    if (cartItems.length === 0) return;
    movePage('order');
  };

  return (
    <div className="cart">
      <div className="cart-main">
        <div className="cart-header">
          <div className="cart-header-item">
            <span>주문수량 </span>
            <span className="item-count">{totalCount}</span>
          </div>
          <div className="cart-header-item">
            <span>총 주문금액 ₩ {totalPrice.toLocaleString()}</span>
          </div>
        </div>
        <div className="cart-item-wrapper">
          {cartItems.map((cartItem, index) => (
            <CartItem
              key={index}
              cartItem={cartItem}
              index={index}
              setCount={changeCartItemCount}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </div>
      </div>
      <div className="cart-button">
        <button onClick={cleanCartItems}>전체취소</button>
        <button onClick={tryOrder}>주문하기</button>
      </div>
    </div>
  );
};
export default CartContainer;
