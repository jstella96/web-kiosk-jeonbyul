import COLORS from 'constants/color';
import styled, { css } from 'styled-components';

const ButtonSizeStyles = {
  large: css`
    --button-text-size: 1rem;
    --button-py: 1rem;
    --button-px: 1rem;
  `,
  medium: css`
    --button-text-size: 0.8rem;
    --button-py: 0.8rem;
    --button-px: 0.8rem;
  `,
  small: css`
    --button-text-size: 0.6rem;
    --button-py: 0.5rem;
    --button-px: 0.5rem;
  `,
  fullWidth: css`
    --button-text-size: 0.6rem;
    --button-py: 1rem;
    --button-px: 1.5rem;
    --button-width: 100%;
  `
};

const ButtonColorStyles = {
  default: css`
    --button-color: ${COLORS.black};
    --button-bg-color: ${COLORS.grayLight};
    --button-border: none;
  `,
  primary: css`
    --button-color: ${COLORS.white};
    --button-bg-color: ${COLORS.primary};
    --button-border: none;
  `,
  secondary: css`
    --button-color: ${COLORS.black};
    --button-bg-color: ${COLORS.white};
    --button-border: 1px solid ${COLORS.black};
  `
};

export type ButtonSize = keyof typeof ButtonSizeStyles;
export type ButtonColor = keyof typeof ButtonColorStyles;

interface BaseButtonProps {
  $size: ButtonSize;
  $color: ButtonColor;
}

export const BaseButton = styled.button<BaseButtonProps>`
  ${({ $size, $color }) =>
    css`
      ${ButtonSizeStyles[$size]}
      ${ButtonColorStyles[$color]}
    `}
  ${({ $size }) => {
    if ($size === 'fullWidth')
      return css`
        width: var(--button-width);
      `;
  }}
  font-weight: 700;
  transition: opacity 0.1s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--button-border);
  padding: var(--button-py) var(--button-px);
  font-size: var(--button-text-size);
  color: var(--button-color);
  background-color: var(--button-bg-color);

  &:hover {
    opacity: 0.75;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.25;
  }
`;
