import * as S from './CircleButton.styled';
interface CircleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: S.CircleButtonSize;
  color?: S.CircleButtonColor;
}

const CircleButton = ({
  children,
  size = 'small',
  color = 'default',
  ...props
}: CircleButtonProps) => {
  return (
    <S.CircleButton $size={size} $color={color} {...props}>
      {children}
    </S.CircleButton>
  );
};

export default CircleButton;
