import COLORS from 'constants/color';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

interface NavbarLineProps {
  selectedIndex: number;
}

const NavbarLine = ({ selectedIndex }: NavbarLineProps) => {
  const selectedLineRef = useRef<HTMLDivElement>(null);

  const calculateXposition = () => {
    if (!selectedLineRef.current) return 0;
    return selectedLineRef.current?.clientWidth * selectedIndex;
  };

  return (
    <Line>
      <SeletedLine ref={selectedLineRef} translateX={calculateXposition()} />
    </Line>
  );
};
export default NavbarLine;

const Line = styled.div`
  margin-top: 0.5rem;
  display: inline-block;
  height: 0.4rem;
  background-color: ${COLORS.gray};
  position: relative;
`;
const SeletedLine = styled.div<{ translateX: number }>`
  position: absolute;
  left: 10%;
  z-index: 10;
  height: inherit;
  width: 20%;
  background: ${COLORS.primary};
  transition: all 0.4s;
  ${({ translateX }) => {
    console.log(translateX);
    return css`
      transform: translateX(${`${translateX}px`});
    `;
  }}
`;
