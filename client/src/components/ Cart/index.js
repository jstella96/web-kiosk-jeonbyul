import React, { useState } from 'react';

import './index.scss';

const Cart = ({ changePage }) => {
  return (
    <div className="cart">
      <div className="cart-main">
        <div className="cart-header">
          <div className="cart-header-item">
            <span>주문수량 </span>
            <span className="item-count">5</span>
          </div>
          <div className="cart-header-item">
            <span>총 주문금액 ₩ 14,0000</span>
          </div>
        </div>
        <div className="cart-item-wrapper">
          <div className="cart-item">
            <button className="cart-item-remove">x</button>
            <div className="cart-item-menu">
              <img
                src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
                className="cart-item-image"
              ></img>
              <div>
                <h2 className="cart-item-name">아메리카노</h2>
                <span className="cart-item-option">ice</span>
              </div>
            </div>
            <div className="cart-item-control">
              <button> - </button>
              <button> 5 </button>
              <button> + </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-button">
        <button>전체취소</button>
        <button onClick={changePage('order')}>주문하기</button>
      </div>
    </div>
  );
};
export default Cart;
