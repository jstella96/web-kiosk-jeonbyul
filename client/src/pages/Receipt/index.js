import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { useEffect, useRef } from 'react';
import './index.scss';

const START_COUNT_NUMBER = 10;

const Receipt = ({ orderNum }) => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice } = useOrderInfo();
  const { paymentMethod, inputAmount } = orderInfo;

  const countRef = useRef(null);

  useEffect(() => {
    const timerId = startCountDown();
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const startCountDown = () => {
    let countNumber = START_COUNT_NUMBER;

    const countDown = () => {
      if (countNumber === 0) {
        movePage('home');
      }
      countRef.current.innerText = countNumber;
      countNumber--;
    };

    const timerId = setInterval(countDown, 1000);
    return timerId;
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
          <div>결제 수단 : {paymentMethod === 'cash' ? '현금' : '카드'}</div>
          <div>결제 금액 : {totalPrice.toLocaleString()}원</div>
          {paymentMethod === 'cash' ? (
            <>
              <div>투입 금액 : {inputAmount.toLocaleString()}</div>
              <div>거스름돈 : {(inputAmount - totalPrice).toLocaleString()}</div>{' '}
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
        <div onClick={() => movePage('home')}> 홈으로 이동 </div>
      </footer>
    </div>
  );
};
export default Receipt;
