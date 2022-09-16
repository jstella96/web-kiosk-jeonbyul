import React from 'react';
import * as S from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: S.ButtonSize;
  color?: S.ButtonColor;
}

const Button = ({ children, size = 'large', color = 'default', ...props }: ButtonProps) => {
  return (
    <S.BaseButton $size={size} $color={color} {...props}>
      {children}
    </S.BaseButton>
  );
};

export default Button;
