import FoodCount from 'components/common/FoodCount';
import OptionTag from 'components/common/OptionTag';
import COLORS from 'constants/color';
import { CartItem } from 'hooks/orderInfoState';
import styled from 'styled-components';
import { flexRow } from 'styles/common';

interface OrderItemProps {
  orderItem: CartItem;
  index: number;
  setCount: (nextCount: number, index: number) => void;
}

const OrderItem = ({ orderItem, index, setCount }: OrderItemProps) => {
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
    <Container>
      <img className="order-item-img" alt={food.name} src={food.imgUrl} />
      <div className="order-item-detail">
        <div className="order-item-top">
          <h2 className="order-item-name">
            {food.name}
            <span className="order-item-price"> {itemTotalPrice.toLocaleString()}원</span>
          </h2>

          <OptionTagWrapper>
            <OptionTag option={temperatureOption} />
            <OptionTag option={sizeOption} />
          </OptionTagWrapper>
        </div>
        <FlexboxRow>
          <div>
            <FoodCount count={count} setCount={setCount} index={index} />
          </div>
        </FlexboxRow>
      </div>
    </Container>
  );
};
export default OrderItem;

const OptionTagWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  height: 10rem;
  margin-bottom: 1rem;
  padding: 1.2rem 0.8rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid ${COLORS.primary};
  img {
    width: 6rem;
    margin: auto;
    object-fit: cover;
  }
  .order-item-name {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .order-item-price {
    font-size: 1rem;
    font-weight: 700;
  }
  .order-item-detail {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .order-item-top {
    display: flex;
    flex-direction: column;
  }
`;

const FlexboxRow = styled.div`
  ${flexRow}
  justify-content: end;
`;
