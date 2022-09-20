import styled, { css } from 'styled-components';
import NavbarItemList from 'components/Navbar/NavbarItem';
import NavbarLine from 'components/Navbar/NavbarLine';
import { CategoryType } from 'types/category';
import COLORS from 'constants/color';
import { LeftArrow, RightArrow } from 'assets/icon';

interface NavbarProps {
  categories: CategoryType[];
  selectedIndex: number;
  changeSelectedIndex: (selectedIndex: number) => void;
  nowStartIndex: number;
}

const Navbar = ({ categories, selectedIndex, changeSelectedIndex, nowStartIndex }: NavbarProps) => {
  return (
    <Container>
      <NavbarContent>
        <LeftButton data-test="navbar-left" onClick={() => changeSelectedIndex(selectedIndex - 1)}>
          <LeftArrow width="20" height="20" />
        </LeftButton>
        <NavbarItemList
          categories={categories}
          selectedIndex={nowStartIndex}
          changeSelectedIndex={changeSelectedIndex}
        />
        <RightButton
          data-test="navbar-right"
          onClick={() => changeSelectedIndex(selectedIndex + 1)}
        >
          <RightArrow width="20" height="20" />
        </RightButton>
      </NavbarContent>
      <NavbarLine selectedIndex={selectedIndex - nowStartIndex} />
    </Container>
  );
};
export default Navbar;

const Container = styled.nav`
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
