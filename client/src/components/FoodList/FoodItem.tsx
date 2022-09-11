import styled from 'styled-components';
import { FoodType } from 'types/food';
import COLORS from 'constants/color';

interface FoodItmeProps {
  food: FoodType;
  onClickFood: (food: FoodType) => void;
}

const FoodItem = ({ food, onClickFood }: FoodItmeProps) => {
  return (
    <Food key={food.id} onClick={() => onClickFood(food)}>
      <img alt={food.name} src={food.imgUrl}></img>
      <h2>{food.name}</h2>
      <span>{(+food.basePrice).toLocaleString()}원</span>
    </Food>
  );
};
export default FoodItem;

const Food = styled.div`
  margin: 0.8rem;
  color: ${COLORS.primary};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    max-width: 9rem;
    margin: auto;
    object-fit: cover;
  }
  h2 {
    font-size: 1rem;
    display: block;
    text-align: center;
    margin-bottom: 0.2rem;
  }
  span {
    display: block;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 400;
  }
`;
