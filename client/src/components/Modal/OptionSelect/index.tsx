import COLORS from 'constants/color';
import { Option } from 'hooks/orderInfoState';
import React from 'react';
import styled, { css } from 'styled-components';

interface OptionSelectProps {
  options: Option[];
  selectedIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}

const OptionSelect = ({ options = [], selectedIdx, setSelectedIdx }: OptionSelectProps) => {
  return (
    <OptionWrapper>
      {options.map((option, index) =>
        option.additionalPrice ? (
          <Button
            onClick={() => setSelectedIdx(index)}
            key={index}
            isSelected={selectedIdx === index ? true : false}
          >
            <span>{option.label}</span>
            <span>+{+option.additionalPrice.toLocaleString()}원</span>
          </Button>
        ) : (
          <></>
        )
      )}
    </OptionWrapper>
  );
};

export default OptionSelect;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 7rem;
  padding: 0.6em;
  margin: 0.5rem 0.2rem;
  border-radius: 0.2rem;
  border: 1px solid ${COLORS.primary};
  font-weight: 700;
  ${({ isSelected }) => {
    if (isSelected)
      return css`
        background-color: ${COLORS.gray};
      `;
  }};
`;
