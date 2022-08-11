import { useEffect, useRef } from 'react';
import './index.scss';

const Receipt = ({ changePage, orderNum, payInfo }) => {
  const countRef = useRef(null);

  useEffect(() => {
    displayCount();
  }, []);

  const displayCount = () => {
    let currentCount = 10;

    const print = () => {
      if (countRef.current) countRef.current.innerText = currentCount;
      currentCount--;
    };

    const countDown = () => {
      if (currentCount === 0) {
        clearInterval(counter);
        changePage('home')();
      }
      print();
    };

    print();
    let counter = setInterval(countDown, 1000);
  };

  return (
    <div className="receipt">
      <main className="receipt_content">
        <div className="receipt_icon">
          <img src="https://cdn.icon-icons.com/icons2/2493/PNG/512/coffee_bar_icon_150224.png" />
        </div>

        <div className="receipt-detail">
          <div className="receipt_ordernum">
            주문 번호 : <span>{orderNum}</span>
          </div>
          <div>결제 수단 : {payInfo.method === 'cash' ? '현금' : '카드'}</div>
          <div>결제 금액 : {payInfo.totalPrice.toLocaleString()}원</div>
          {payInfo.method === 'cash' ? (
            <>
              <div>투입 금액 : {payInfo.input}</div>
              <div>거스름돈 : {payInfo.input - payInfo.totalPrice}</div>{' '}
            </>
          ) : (
            <></>
          )}
        </div>
      </main>
      <footer className="receipt_footer">
        <span className="receipt_footer-text">
          이 화면은 <span ref={countRef}></span>초 뒤에 자동으로 사라집니다.
        </span>
      </footer>
    </div>
  );
};
export default Receipt;
