import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const START_COUNT_NUMBER = 10;
interface ReceiptProps {
  orderNum: number;
}
const Receipt = ({ orderNum }: ReceiptProps) => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice } = useOrderInfo();
  const { paymentMethod, inputAmount } = orderInfo;

  const countRef = useRef<HTMLSpanElement | null>(null);

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
      if (!countRef.current) return;
      countRef.current.innerText = String(countNumber);
      countNumber--;
    };

    const timerId = setInterval(countDown, 1000);
    return timerId;
  };

  return (
    <div>
      <Main>
        <Icon>
          <img src="https://cdn.icon-icons.com/icons2/2493/PNG/512/coffee_bar_icon_150224.png" />
        </Icon>

        <Detail>
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
        </Detail>
      </Main>
      <Footer className="receipt_footer">
        <span className="receipt_footer-text">
          이 화면은 <span ref={countRef}></span>초 뒤에 자동으로 사라집니다.
        </span>
        <div onClick={() => movePage('home')}> 홈으로 이동 </div>
      </Footer>
    </div>
  );
};

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 0.4rem;
    font-weight: 700;
  }
`;

const Icon = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  align-items: center;
  display: flex;

  img {
    margin: auto;
    width: 10rem;
  }
`;

const Main = styled.div`
  font-size: 1.2rem;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: ${COLORS.grayDark};
    margin-bottom: 2rem;
  }
`;
export default Receipt;
