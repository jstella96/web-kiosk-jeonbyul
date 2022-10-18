import COLORS from 'constants/color';
import styled, { css } from 'styled-components';

const HeadingLevelStyles = {
  1: css`
    --heading-text-size: 2em;
  `,
  2: css`
    --heading-text-size: 1.5em;
  `,
  3: css`
    --heading-text-size: 1em;
  `
};

const HeadingColorStyles = {
  primary: css`
    --heading-color: ${COLORS.primary};
  `,
  secondary: css`
    --heading-color: ${COLORS.secondary};
  `,
  default: css`
    --heading-color: ${COLORS.black};
  `
};

export type HeadingLevel = keyof typeof HeadingLevelStyles;
export type HeadingColor = keyof typeof HeadingColorStyles;

interface HeadingProps {
  $level: HeadingLevel;
  $color: HeadingColor;
}

export const Heading = styled.h1<HeadingProps>`
  ${({ $level, $color }) =>
    css`
      ${HeadingLevelStyles[$level]}
      ${HeadingColorStyles[$color]}
    `}

  font-weight: 700;
  font-size: var(--heading-text-size);
  color: var(--heading-color);
`;
