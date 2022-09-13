import COLORS from 'constants/color';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import SkeletonItem from 'styles/skeleton';
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
        {categories.length === 0 &&
          Array.apply('', Array(4)).map((_, i) => (
            <ItemSkeletonWrapper key={i}>
              <ItemSkeleton />
            </ItemSkeletonWrapper>
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
const ItemStyle = css`
  width: 25%;
  position: relative;
  @media (max-width: 767px) {
    width: 33.33%;
  }
`;
const Item = styled.button`
  ${ItemStyle}
  color: ${COLORS.primary};
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
`;

const ItemSkeletonWrapper = styled.div`
  ${ItemStyle}
  width: 25%;
  padding: 0 3%;
  display: inline-block;
  @media (max-width: 767px) {
    padding: 0 4%;
  }
`;
const ItemSkeleton = styled.button`
  ${SkeletonItem};
  height: 1.5rem;
  width: 100%;
`;
