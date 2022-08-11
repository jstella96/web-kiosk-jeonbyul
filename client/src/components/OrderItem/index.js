import FoodCount from 'components/common/FoodCount';
import OptionTag from 'components/common/OptionTag';
import './index.scss';
const OrderItem = ({ orderItem, index, setCount }) => {
  const { food, count, temperatureOption, sizeOption } = orderItem;

  const calculateTotalPrice = () => {
    const temperatureAdditionalPrice = temperatureOption?.additionalPrice || 0;
    const sizeAdditionalPrice = sizeOption?.additionalPrice || 0;
    const totalPrice =
      (+food.basePrice + +sizeAdditionalPrice + +temperatureAdditionalPrice) * +count;
    return totalPrice;
  };
  const itemTotalPrice = calculateTotalPrice();

  return (
    <div className="order-item">
      <img className="order-item-img" src={food.imgUrl} />
      <div className="order-item-detail">
        <div className="order-item-top">
          <h2 className="order-item-name">
            {food.name}
            <span className="order-item-price"> ₩ {itemTotalPrice.toLocaleString()}</span>
          </h2>

          <div className="opder-item-option">
            <OptionTag option={temperatureOption} />
            <OptionTag option={sizeOption} />
          </div>
        </div>
        <div className="order-item-bottom">
          <div className="order-food-count">
            <FoodCount count={count} setCount={setCount} index={index} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
