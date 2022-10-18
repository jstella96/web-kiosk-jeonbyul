import COLORS from 'constants/color';
import styled, { css } from 'styled-components';

const TextLevelStyles = {
  1: css`
    --text-size: 1.4rem;
  `,
  2: css`
    --text-size: 1.2rem;
  `,
  3: css`
    --text-size: 1rem;
  `,
  4: css`
    --text-size: 0.8rem;
  `
};

const TextColorStyles = {
  primary: css`
    --text-color: ${COLORS.primary};
  `,
  secondary: css`
    --text-color: ${COLORS.secondary};
  `,
  default: css`
    --text-color: ${COLORS.black};
  `
};

export type TextLevel = keyof typeof TextLevelStyles;
export type TextColor = keyof typeof TextColorStyles;

interface TextProps {
  $level: TextLevel;
  $color: TextColor;
}

export const Text = styled.span<TextProps>`
  ${({ $level, $color }) =>
    css`
      ${TextLevelStyles[$level]}
      ${TextColorStyles[$color]}
    `}

  font-weight: 500;
  font-size: var(--text-size);
  color: var(--text-color);

  line-height: 1.5;

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.25;
  }
`;
