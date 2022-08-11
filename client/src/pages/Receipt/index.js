import { useEffect, useRef } from 'react';
import './index.scss';

const Receipt = ({ changePage, orderNum, payInfo }) => {
  const countRef = useRef(null);

  const printCount = () => {
    let current = 10;
    const print = () => {
      countRef.current.innerHTML = current;
      if (current === 0) {
        clearInterval(timerId);

        changePage('home')();

        return;
      }
      current--;
    };
    print();
    let timerId = setInterval(print, 1000);
  };
  useEffect(() => {
    printCount();
  }, []);

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
        <button className="receipt_footer-button" onClick={changePage('home')}>
          홈으로 바로가기{' '}
        </button>
      </footer>
    </div>
  );
};
export default Receipt;
