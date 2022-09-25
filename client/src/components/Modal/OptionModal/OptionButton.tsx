import Button from 'components/common/Button/Button';
import styled from 'styled-components';

interface OptionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  additionalPrice: number;
  isSelected: boolean;
}

const OptionButton = ({
  label,
  additionalPrice,
  isSelected,
  style,
  onClick
}: OptionButtonProps) => {
  return (
    <ButtonStyled
      data-test="option-button"
      color={isSelected ? 'primary' : 'default'}
      style={style}
      onClick={onClick}
    >
      <span>{label}</span>
      <span data-test="option-button-additionalPrice">+{+additionalPrice.toLocaleString()}원</span>
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)`
  @media (max-width: 767px) {
    width: 5.2rem;
    font-size: 0.5rem;
  }
  width: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default OptionButton;
