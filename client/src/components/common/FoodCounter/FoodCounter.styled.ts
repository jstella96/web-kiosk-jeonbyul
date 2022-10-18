import COLORS from 'constants/color';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.4rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FoodCounter = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ControlButton = styled.button`
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0 1rem;
  border: 1px solid ${COLORS.primary};
  width: 1.4rem;
  border-radius: 0.2rem;
  padding: 0 0.2rem;
  &hover {
    background-color: ${COLORS.gray};
  }
`;

export const Text = styled.span`
  font-size: 1.2rem;
`;
