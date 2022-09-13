import { css } from 'styled-components';
import { flexColumn } from 'styles/common';

export const foodListLayout = css`
  display: grid;
  flex-basis: 100%;
  flex-shrink: 0;
  height: 100%;
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const foodItemLayout = css`
  ${flexColumn}
  margin: 0.8rem;
`;

export const foodItemImageLayout = css`
  width: 50%;
  margin: auto;
`;
