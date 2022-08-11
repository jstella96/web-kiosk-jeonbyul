import { useState } from 'react';
import './index.scss';

const CashModal = ({ isOpen, totalPrice }) => {
  const { sum, setSum } = useState();
  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      <section>
        <main className="cash-select-button">
          <button onClick={setSum(sum + 500)}>500</button>
          <button onClick={setSum(sum + 1000)}>1000</button>
          <button onClick={setSum(sum + 5000)}>5000</button>
          <button onClick={setSum(sum + 10000)}>10000</button>
          <button onClick={setSum(sum + 50000)}>50000</button>
        </main>
        <footer className="footer">
          <div>
            투입 금액 <span>{sum}</span>
          </div>
          <div>
            결제 금액 <span>{totalPrice}</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default CashModal;
