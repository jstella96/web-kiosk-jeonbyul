import COLORS from 'constants/color';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { CategoryType } from 'types/category';
interface NavbarItemListProps {
  categories: CategoryType[];
  selectedIndex: number;
  changeSelectedIndex: (selectedIndex: number) => void;
}
const NavbarItemList = ({
  categories,
  selectedIndex,
  changeSelectedIndex
}: NavbarItemListProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const calculateXposition = () => {
    if (!buttonRef.current) return 0;
    return buttonRef.current?.clientWidth * selectedIndex * -1;
  };

  return (
    <Wrapper>
      <ItemList translateX={calculateXposition()}>
        {categories.map((category, index) => (
          <Item
            {...(index === 0 ? { ref: buttonRef } : {})}
            key={category.id}
            onClick={() => changeSelectedIndex(index)}
          >
            {category.name}
          </Item>
        ))}
      </ItemList>
    </Wrapper>
  );
};
export default NavbarItemList;

const Wrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemList = styled.div<{ translateX: number }>`
  transition: all 0.25s;
  ${({ translateX }) => {
    return css`
      transform: translateX(${`${translateX}px`});
    `;
  }}
`;

const Item = styled.button`
  color: ${COLORS.primary};
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  width: 25%;
  position: relative;
  @media (max-width: 767px) {
    width: 33.33%;
  }
`;
