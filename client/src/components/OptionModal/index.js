import React, { useEffect } from 'react';
import './index.scss';

const OptionModal = ({ isOpen, close, food }) => {
  //const { open, close, header } = props;
  console.log(isOpen);
  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      <section>
        <main>
          <div className="food-detail">
            <img
              className="food-img"
              src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
            />
            <h2 className="food-name">{food.name}</h2>
            <span className="food-price">{food.basePrice} 원</span>
          </div>
          <div className="food-option-select">
            <div className="food-option-temperature">
              <span> 온도 </span>
              <div className="food-option-wrapper">
                <button> ICE </button>
                <button> HOT </button>
              </div>
            </div>
            <div className="food-option-size">
              <span> 사이즈 </span>
              <div className="food-option-wrapper">
                <button> s </button>
                <button> m </button>
                <button> l </button>
              </div>
            </div>
            <div className="food-option-count">
              <span> 카운트 </span>

              <div className="count-control">
                <button> - </button>
                <span> 5 </span>
                <button> + </button>
              </div>
            </div>
          </div>
        </main>
        <footer className="option-modal-footer">
          <button onClick={close}> 닫기 </button>
          <button onClick={close}> 주문하기</button>
        </footer>
      </section>
    </div>
  );
};

export default OptionModal;
