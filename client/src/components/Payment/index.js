import './index.scss';
const PaymentMethod = ({ changePage }) => {
  return (
    <div className="payment">
      <header className="payment_header">
        <button onClick={changePage('main')}>뒤로가기 아이콘</button>
        <h1>
          <span>결제 방법</span>을 확인해주세요
        </h1>
      </header>
      <main>
        <div className="payment_wrapper">
          <button className="payment_item" onClick={changePage('receipt')}>
            카드결제
          </button>
          <button className="payment_item" onClick={changePage('receipt')}>
            현금결제
          </button>
        </div>
      </main>
    </div>
  );
};
export default PaymentMethod;
