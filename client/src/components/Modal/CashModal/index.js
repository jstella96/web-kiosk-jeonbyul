import { useEffect, useState } from 'react';
import './index.scss';

const CashModal = ({ isOpen, totalPrice, orderFoods }) => {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    if (sum >= +totalPrice) {
      orderFoods('cash', sum);
    }
  }, [sum]);
  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      <section>
        <main className="cash-select-button">
          <button onClick={() => setSum(sum + 500)}>500 원</button>
          <button onClick={() => setSum(sum + 1000)}>1,000 원</button>
          <button onClick={() => setSum(sum + 5000)}>5,000 원</button>
          <button onClick={() => setSum(sum + 10000)}>10,000 원</button>
          <button onClick={() => setSum(sum + 50000)}>50,000 원</button>
        </main>
        <footer className="cash-footer">
          <div>
            투입 금액 <span>{sum.toLocaleString()}</span>
          </div>
          <div>
            결제 금액 <span>{totalPrice.toLocaleString()}</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default CashModal;
