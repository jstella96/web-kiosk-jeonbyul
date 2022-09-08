import COLORS from 'constants/color';
import { Option } from 'hooks/orderInfoState';
import React from 'react';
import styled from 'styled-components';
import { flexRow } from 'styles/common';

interface OptionTagProps {
  option: Option;
}
const OptionTag = ({ option }: OptionTagProps) => {
  if (!option || !option.additionalPrice) return <></>;
  return (
    <Container>
      <span>{option.label}</span>
      <span>+{option.additionalPrice}원</span>
    </Container>
  );
};
export default OptionTag;

const Container = styled.span`
  ${flexRow}
  justify-content: space-between;
  gap: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0rem;
  border: 1px solid ${COLORS.primary};
  font-size: 0.8rem;
  border-radius: 0.2rem;
  font-weight: 700;
  color: ${COLORS.black};
  padding: 0.2em 0.4rem;
`;
