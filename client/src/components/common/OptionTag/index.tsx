import COLORS from 'constants/color';
import { Option } from 'hooks/orderInfoState';
import React from 'react';
import styled from 'styled-components';

interface OptionTagProps {
  option: Option;
}
const OptionTag = ({ option }: OptionTagProps) => {
  if (!option || !option.additionalPrice) return <></>;
  return (
    <Container>
      <span>{option.label}</span>
      <span>+{option.additionalPrice}</span>
    </Container>
  );
};
export default OptionTag;

const Container = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.4rem 0.4rem 0.4rem 0rem;
  border: 1px solid ${COLORS.primary};
  width: 5.6rem;
  font-size: 0.8rem;
  border-radius: 0.2rem;
  font-weight: 800;
  color: ${COLORS.black};
  padding: 0.4rem;
`;
