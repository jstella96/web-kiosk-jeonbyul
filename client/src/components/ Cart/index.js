import React, { useState } from 'react';
import FoodCount from 'components/common/FoodCount';

import './index.scss';

const Cart = ({ changePage, cartItem = [], deleteCartItem, updateCartItem }) => {
  const totalCount = cartItem.reduce((acc, curr) => {
    return (acc += curr?.count);
  }, 0);

  const totalAcount = cartItem.reduce((acc, curr) => {
    const temperatureAdditionalAmount = curr?.temperatureOption?.additionalAmount || 0;
    const sizeAdditionalAmount = curr?.sizeOption?.additionalAmount || 0;
    const basePrice = curr?.food.basePrice || 0;
    const total = basePrice + temperatureAdditionalAmount + sizeAdditionalAmount;
    return acc + total * curr.count;
  }, 0);

  const changeCount = (nextCount, idx) => {
    const nextCartItem = [...cartItem];
    nextCartItem[idx].count = nextCount;
    updateCartItem(nextCartItem);
  };

  const cleanCart = () => {
    updateCartItem([]);
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
            <span>총 주문금액 ₩ {totalAcount.toLocaleString()}</span>
          </div>
        </div>
        <div className="cart-item-wrapper">
          {cartItem.map(({ food, count, sizeOption, temperatureOption }, index) => (
            <div className="cart-item" key={food.id}>
              <button className="cart-item-remove" onClick={deleteCartItem(index)}>
                x
              </button>
              <div className="cart-item-menu">
                <img
                  src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
                  className="cart-item-image"
                ></img>
                <div>
                  <h2 className="cart-item-name">{food.name}</h2>
                  {sizeOption ? (
                    <span className="cart-item-option">
                      <span>{sizeOption.label}</span>
                      <span>+{sizeOption.additionalAmount}</span>
                    </span>
                  ) : (
                    <></>
                  )}
                  {temperatureOption ? (
                    <span className="cart-item-option">
                      <span>{temperatureOption.label}</span>
                      <span>+{temperatureOption.additionalAmount}</span>
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <FoodCount count={count} setCount={changeCount} idx={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="cart-button">
        <button onClick={cleanCart}>전체취소</button>
        <button onClick={changePage('order')}>주문하기</button>
      </div>
    </div>
  );
};
export default Cart;
