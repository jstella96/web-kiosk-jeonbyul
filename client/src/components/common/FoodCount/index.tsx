import COLORS from 'constants/color';
import styled from 'styled-components';

interface FoodCountProps {
  count: number;
  setCount: any;
  index?: number;
}

const FoodCount = ({ count = 0, setCount, index = 0 }: FoodCountProps) => {
  const updateCount = (newCount: number) => {
    if (newCount < 1) return;
    setCount(newCount, index);
  };

  return (
    <Container>
      <CountButtonWrapper>
        <button onClick={() => updateCount(count - 1)}> - </button>
        <span>{count}</span>
        <button onClick={() => updateCount(count + 1)}> + </button>
      </CountButtonWrapper>
    </Container>
  );
};

export default FoodCount;

const Container = styled.div`
  padding: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CountButtonWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0 1rem;
    border: 1px solid ${COLORS.primary};
    width: 1.4rem;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
  }
  button:hover {
    background-color: ${COLORS.gray};
  }
  span {
    font-size: 1.2rem;
  }
`;
