import React from 'react';

import './index.scss';
import CartItem from '../CartItem';
import { useCartItems, useCartItemsDispatch } from 'store/CartItemsContext';

const CartContainer = ({ changePage }) => {
  const { cartItems, totalPrice, totalCount } = useCartItems();
  const cartItemDispatch = useCartItemsDispatch();

  const deleteCartItem = (index) => {
    cartItemDispatch({ type: 'delete', index });
  };

  const changeCartItemCount = (nextCount, index) => {
    cartItemDispatch({ type: 'changeCount', nextCount, index });
  };

  const cleanCartItems = () => {
    cartItemDispatch({ type: 'clean' });
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
        <button onClick={changePage('order')}>주문하기</button>
      </div>
    </div>
  );
};
export default CartContainer;
