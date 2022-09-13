import COLORS from 'constants/color';
import { PAGE_URL } from 'constants/pageUrl';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { useTimer } from 'hooks/useTimer';
import styled from 'styled-components';
import { flexColumn } from 'styles/common';

const START_COUNT_NUMBER = 10;
interface ReceiptProps {
  orderNum: number;
}
const Receipt = ({ orderNum }: ReceiptProps) => {
  const { movePage } = usePage();
  const { orderInfo, totalPrice } = useOrderInfo();
  const { paymentMethod, inputAmount } = orderInfo;
  const time = useTimer({ seconds: START_COUNT_NUMBER, onTimeout: () => movePage(PAGE_URL.HOME) });

  return (
    <ReceiptLayout>
      <Main>
        <Detail>
          <div>
            주문 번호 : <span>{orderNum}</span>
          </div>
          <div>결제 수단 : {paymentMethod === 'cash' ? '현금' : '카드'}</div>
          <div>결제 금액 : {totalPrice.toLocaleString()}원</div>
          {paymentMethod === 'cash' && (
            <>
              <div>투입 금액 : {inputAmount.toLocaleString()}원</div>
              <div>거스름 돈 : {(inputAmount - totalPrice).toLocaleString()}원</div>
            </>
          )}
        </Detail>
      </Main>
      <Footer>
        <span>
          이 화면은 <span>{time}</span>초 뒤에 자동으로 사라집니다.
        </span>
        <div onClick={() => movePage(PAGE_URL.HOME)}> 홈으로 이동 </div>
      </Footer>
    </ReceiptLayout>
  );
};

const ReceiptLayout = styled.div`
  ${flexColumn}
  justify-content: center;
  gap: 2rem;
  height: 100%;
  padding: 0 10%;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 0.4rem;
    font-weight: 700;
  }
`;

const Main = styled.div`
  font-size: 1.2rem;
  border: 1px solid ${COLORS.primary};
  border-radius: 0.2rem;
  width: 100%;
  padding: 2rem;
  ${flexColumn}
  justify-content: center;
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
