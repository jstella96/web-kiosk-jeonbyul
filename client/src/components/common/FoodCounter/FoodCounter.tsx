import useFoodCounter from './useFoodCounter';
import * as S from './FoodCounter.styled';

interface FoodCounterProps {
  initalValue?: number;
  onChange?: any;
}

const FoodCounter = ({ initalValue = 1, onChange = () => {} }: FoodCounterProps) => {
  const { value, onIncrease, onDecrease } = useFoodCounter({ initalValue, onChange });
  return (
    <>
      <S.Container>
        <S.FoodCounter>
          <S.ControlButton onClick={onDecrease}> - </S.ControlButton>
          <S.Text>{value}</S.Text>
          <S.ControlButton onClick={onIncrease}> + </S.ControlButton>
        </S.FoodCounter>
      </S.Container>
    </>
  );
};

export default FoodCounter;
