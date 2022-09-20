import { foodItemImageLayout, foodItemLayout } from 'components/FoodList/FoodListLayout';
import COLORS from 'constants/color';
import styled from 'styled-components';

export const FoodDetail = styled.div`
  ${foodItemLayout}
  color: ${COLORS.primary};
  font-weight: 700;
`;
export const Image = styled.img`
  ${foodItemImageLayout}
  min-width: 9rem;
  object-fit: cover;
`;
export const Title = styled.h2`
  font-size: 1rem;
  display: block;
  text-align: center;
  margin-bottom: 0.2rem;
`;
export const Text = styled.span`
  display: block;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 400;
`;
