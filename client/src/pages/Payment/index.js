import { requestPostOrder } from 'api/api';
import { useCartItems } from 'hooks/useCartItems';
import './index.scss';
const PaymentMethod = ({ changePage, setOrderNum }) => {
  const { cartItems } = useCartItems();
  const order = async (method) => {
    console.log(method);
    const foods = cartItems.map((item) => {
      const { count, food, sizeOption, temperatureOption } = item;
      const orderFood = {
        foodId: food?.id,
        foodName: food?.name,
        unit: count,
        options: {
          size: sizeOption.key,
          temperature: temperatureOption.key
        },
        eachPrice: food?.basePrice
      };
      return orderFood;
    });

    const result = {
      foods,
      payment: 'cash',
      date: new Date()
    };
    const orderNum = await requestPostOrder(result);
    setOrderNum(orderNum);
    changePage('receipt')();
  };

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
          <button className="payment_item" onClick={() => order('card')}>
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
