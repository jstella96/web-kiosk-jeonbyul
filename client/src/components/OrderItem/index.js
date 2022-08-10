import FoodCount from 'components/common/FoodCount';
import OptionTag from 'components/common/OptionTag';
import './index.scss';
const OrderItem = ({ orderItem, index, setCount }) => {
  const { food, count, temperatureOption, sizeOption } = orderItem;

  const calculateTotalPrice = () => {
    const temperatureAdditionalPrice = temperatureOption?.additionalPrice || 0;
    const sizeAdditionalPrice = sizeOption?.additionalPrice || 0;
    const totalPrice = (food.basePrice + sizeAdditionalPrice + temperatureAdditionalPrice) * count;
    return totalPrice;
  };
  const itemTotalPrice = calculateTotalPrice();

  return (
    <div className="order-item">
      <img
        className="order-item-img"
        src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
      />
      <div className="order-item-detail">
        <h2 className="order-item-name">{food.name}</h2>
        <span className="order-item-price"> ₩ {itemTotalPrice}</span>

        <div className="opder-item-option">
          <OptionTag option={temperatureOption} />
          <OptionTag option={sizeOption} />
        </div>

        <FoodCount count={count} setCount={setCount} index={index} />
      </div>
    </div>
  );
};
export default OrderItem;
