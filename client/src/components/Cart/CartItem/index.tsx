import React from 'react';
import FoodCount from 'components/common/FoodCount';
import OptionTag from 'components/common/OptionTag';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { CartItem as CartItemType } from 'hooks/orderInfoState';
import { flexColumn } from 'styles/common';

interface CartItemProps {
  cartItem: CartItemType;
  index: number;
  onDelete: (index: number) => void;
  onEditCount: (nextCount: number, index: number) => void;
}

const CartItem = ({ cartItem, index, onEditCount, onDelete }: CartItemProps) => {
  const { food, count, sizeOption, temperatureOption } = cartItem;
  return (
    <Container>
      <DeleteButton onClick={() => onDelete(index)}>x</DeleteButton>
      <Image src={food.imgUrl} />
      <FlexboxColumn>
        <Name>{food.name}</Name>
        <OptionWrapper>
          <OptionTag option={sizeOption}></OptionTag>
          <OptionTag option={temperatureOption}></OptionTag>
        </OptionWrapper>
      </FlexboxColumn>
      <Footer>
        <FoodCount count={count} setCount={onEditCount} index={index} />
      </Footer>
    </Container>
  );
};
export default CartItem;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: ${COLORS.white};
  padding: 0.3rem;
  margin: 0.7rem 0;
  margin-right: 1rem;
  position: relative;
  width: 40%;
  min-width: 18rem;
  max-width: 20rem;
`;

const DeleteButton = styled.button`
  width: 1rem;
  background-color: ${COLORS.primary};
  border-radius: 0.5rem;
  position: absolute;
  right: -0.3rem;
  top: -0.3rem;
  color: ${COLORS.white};
`;

const Image = styled.img`
  width: 100%;
  grid-column: 1/2;
`;

const OptionWrapper = styled.div`
  display: flex;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 0rem 0.1rem 0rem;
  color: ${COLORS.black};
`;

const Footer = styled.h2`
  grid-column: 1/3;
`;
const FlexboxColumn = styled.div`
  ${flexColumn}
  justify-content: center;
  gap: 0.4rem;
`;
