import './index.scss';
const Order = ({ changePage }) => {
  return (
    <div className="order">
      <header className="order-header">
        <button onClick={changePage('main')}>뒤로가기 아이콘</button>
        <h1>
          <span>주문 내역</span>을 확인해주세요
        </h1>
      </header>
      <main>
        <div className="order-item-list">
          <div className="order-item">
            <img
              className="order-item-img"
              src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
            />
            <div className="order-item-detail">
              <h2 className="order-item-name">카페라떼</h2>
              <span className="order-item-price"> ₩ 3,000</span>
              <div className="order-count-control">
                <button> - </button>
                <span> 5 </span>
                <button> + </button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-item-list">
          <div className="order-item">
            <img
              className="order-item-img"
              src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
            />
            <div className="order-item-detail">
              <h2 className="order-item-name">카페라떼</h2>
              <span className="order-item-price"> ₩ 3,000</span>
              <div className="order-count-control">
                <button> - </button>
                <span> 5 </span>
                <button> + </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button className="order-button" onClick={changePage('payment')}>
        <span>₩ 7,000</span>
        <span> 결제하기</span>
      </button>
    </div>
  );
};
export default Order;
