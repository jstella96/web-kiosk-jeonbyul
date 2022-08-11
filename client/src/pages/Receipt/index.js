import { useEffect, useRef } from 'react';
import './index.scss';

const Receipt = ({ changePage, orderNum, payInfo }) => {
  const countRef = useRef(null);

  useEffect(() => {
    displayCount();
  }, []);

  const displayCount = () => {
    let currentCount = 5;

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
        <div className="receipt_icon">큰 아이콘</div>
        <h2 className="receipt_ordernum">
          주문번호 <span>{orderNum}</span>
        </h2>
        <span>주문이 완료되었습니다</span>
        <div>결제 수단 : {payInfo.method === 'cash' ? '현금' : '카드'}</div>
        <div>결제 금액 : {payInfo.totalPrice}</div>
        {payInfo.method === 'cash' ? (
          <div>
            <span>투입 금액 : {payInfo.input}</span>
            <span>거스름돈 : {payInfo.input - payInfo.totalPrice}</span>{' '}
          </div>
        ) : (
          <></>
        )}
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
