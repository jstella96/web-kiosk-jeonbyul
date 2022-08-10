import { useEffect, useRef } from 'react';
import './index.scss';
const Receipt = ({ changePage }) => {
  const countRef = useRef(null);

  const printCount = () => {
    let current = 10;
    const print = () => {
      countRef.current.innerHTML = current;
      if (current === 0) {
        clearInterval(timerId);
        changePage('home')(); //??
        return;
      }
      current--;
    };
    print();
    let timerId = setInterval(print, 1000);
  };
  useEffect(() => {
    printCount();
  });

  return (
    <div className="receipt">
      <main className="receipt_content">
        <div className="receipt_icon">큰 아이콘</div>
        <h2 className="receipt_ordernum">
          주문번호 <span>6933</span>
        </h2>
        <span>주문이 완료되었습니다</span>
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
