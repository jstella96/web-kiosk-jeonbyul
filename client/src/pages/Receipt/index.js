import './index.scss';
const Receipt = ({ changePage }) => {
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
        <span className="receipt_footer-text">이 화면은 10초 뒤에 자동으로 사라집니다.</span>
        <button className="receipt_footer-button" onClick={changePage('home')}>
          홈으로 바로가기{' '}
        </button>
      </footer>
    </div>
  );
};
export default Receipt;
