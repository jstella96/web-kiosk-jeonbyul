import styled, { css } from 'styled-components';
import NavbarItemList from 'components/Navbar/NavbarItem';
import NavbarLine from 'components/Navbar/NavbarLine';
import { CategoryType } from 'types/category';
import COLORS from 'constants/color';
import { LeftArrow, RightArrow } from 'assets/icon';
import { useSlider } from 'context/sliderContext';

interface NavbarProps {
  categories: CategoryType[] | undefined;
}

const Navbar = ({ categories }: NavbarProps) => {
  const { startIndex, selectedIndex, actions } = useSlider();
  return (
    <Container>
      <NavbarContent>
        <LeftButton data-test="navbar-left" onClick={actions.selectPrevIndex}>
          <LeftArrow width="20" height="20" />
        </LeftButton>
        <NavbarItemList
          categories={categories}
          selectedIndex={startIndex}
          changeSelectedIndex={actions.selectIndex}
        />
        <RightButton data-test="navbar-right" onClick={actions.selectNextIndex}>
          <RightArrow width="20" height="20" />
        </RightButton>
      </NavbarContent>
      <NavbarLine selectedIndex={selectedIndex - startIndex} />
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
