import React from 'react';

import './index.scss';
import CartItem from '../CartItem';
import { useCartItems } from 'hooks/useCartItems';
import { useCartItemsDispatch } from 'hooks/useCartItemsDispatch';

const CartContainer = ({ changePage }) => {
  const { cartItems, totalPrice, totalCount } = useCartItems();
  const { cartItemsDispatch } = useCartItemsDispatch();

  const deleteCartItem = (index) => {
    cartItemsDispatch({ type: 'delete', index });
  };

  const changeCartItemCount = (nextCount, index) => {
    cartItemsDispatch({ type: 'changeCount', nextCount, index });
  };

  const cleanCartItems = () => {
    cartItemsDispatch({ type: 'clean' });
  };

  const tryOrder = () => {
    if (cartItems.length === 0) return;
    changePage('order')();
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
            <span>총 주문금액 ₩ {totalPrice}</span>
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
