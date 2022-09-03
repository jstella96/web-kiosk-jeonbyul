import styled, { css } from 'styled-components';
import React from 'react';
import { ReactComponent as LeftArrow } from 'assets/icon/left.svg';
import { ReactComponent as RightArrow } from 'assets/icon/right.svg';
import NavbarItemList from 'components/Navbar/NavbarItemList';
import NavbarLine from 'components/Navbar/NavbarLine';
import { CategoryType } from 'types/category';
import COLORS from 'constants/color';

interface NavbarProps {
  categories: CategoryType[];
  selectedIndex: number;
  changeSelectedIndex: (selectedIndex: number) => void;
  nowStartIndex: number;
}

const Navbar = ({ categories, selectedIndex, changeSelectedIndex, nowStartIndex }: NavbarProps) => {
  return (
    <Wrapper>
      <NavbarContent>
        <LeftButton onClick={() => changeSelectedIndex(selectedIndex - 1)}>
          <LeftArrow width="20" height="20" />
        </LeftButton>
        <NavbarItemList
          categories={categories}
          selectedIndex={nowStartIndex}
          changeSelectedIndex={changeSelectedIndex}
        />
        <RightButton onClick={() => changeSelectedIndex(selectedIndex + 1)}>
          <RightArrow width="20" height="20" />
        </RightButton>
      </NavbarContent>
      <NavbarLine selectedIndex={selectedIndex - nowStartIndex} />
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const arrowButton = css`
  stroke: ${COLORS.gray};
  cursor: pointer;
  &:hover {
    stroke-opacity: 0.6;
    stroke: ${COLORS.primary};
  }
  svg {
    width: '20px';
    height: '20px';
  }
`;

const NavbarContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  font-size: 0.8rem;
`;

const LeftButton = styled.div`
  ${arrowButton}
  padding-left: 0.8rem;
`;

const RightButton = styled.div`
  ${arrowButton}
  padding-right: 0.8rem;
  text-align: right;
`;
