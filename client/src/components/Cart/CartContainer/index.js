import React from 'react';

import './index.scss';
import CartItem from '../CartItem';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { clearCart, deleteCartItem, updateCount } from 'hooks/orderInfoState';

const CartContainer = () => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice, totalCount, orderInfoDispatch } = useOrderInfo();
  const { cartItems } = orderInfo;

  const onDeleteCartItem = (index) => {
    orderInfoDispatch(deleteCartItem({ index }));
  };

  const onChangeCartItemCount = (nextCount, index) => {
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
              onChangeCount={onChangeCartItemCount}
              onDelete={onDeleteCartItem}
            />
          ))}
        </div>
      </div>
      <div className="cart-button">
        <button onClick={onClearCart}>전체취소</button>
        <button onClick={order}>주문하기</button>
      </div>
    </div>
  );
};
export default CartContainer;
