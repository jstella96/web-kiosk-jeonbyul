import COLORS from 'constants/color';
import styled, { css } from 'styled-components';

const CircleButtonSizeStyles = {
  large: css`
    --button-text-size: 0.8rem;
    --button-width: 2rem;
    --button-heigth: 2rem;
    --button-border-radius: 1rem;
  `,
  small: css`
    --button-text-size: 0.6rem;
    --button-width: 1.4rem;
    --button-heigth: 1.4rem;
    --button-border-radius: 0.7rem;
  `
};

const CircleButtonColorStyles = {
  default: css`
    --button-color: ${COLORS.black};
    --button-bg-color: ${COLORS.grayLight};
  `,
  primary: css`
    --button-color: ${COLORS.white};
    --button-bg-color: ${COLORS.primary};
  `,
  secondary: css`
    --button-color: ${COLORS.black};
    --button-bg-color: ${COLORS.white};
  `
};

export type CircleButtonSize = keyof typeof CircleButtonSizeStyles;
export type CircleButtonColor = keyof typeof CircleButtonColorStyles;

interface CircleButtonProps {
  $size: CircleButtonSize;
  $color: CircleButtonColor;
}

export const CircleButton = styled.button<CircleButtonProps>`
  ${({ $size, $color }) =>
    css`
      ${CircleButtonSizeStyles[$size]}
      ${CircleButtonColorStyles[$color]}
    `}

  font-weight: 700;
  // transition: opacity 0.15s ease-in;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${COLORS.black};
  border-radius: var(--button-border-radius);
  width: var(--button-width);
  height: var(--button-heigth);
  font-size: var(--button-text-size);
  color: var(--button-color);
  background-color: var(--button-bg-color);
  &:hover {
    scale: 1.05;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.25;
  }
`;
