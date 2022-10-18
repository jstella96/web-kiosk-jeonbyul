import styled, { css } from 'styled-components/macro';

export const modal = css`
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const flexRow = css`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const fixedTop = css`
  position: fixed;
  top: 0;
`;

export const fixedBottom = css`
  position: fixed;
  bottom: 0;
`;

export const fixedEntire = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const absoluteTop = css`
  position: absolute;
  top: 0;
`;

export const absoluteBottom = css`
  position: absolute;
  bottom: 0;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FlexboxRow = styled.div`
  ${flexRow};
`;

export const FlexRowCenter = styled.div`
  ${flexCenter};
`;

export const FlexboxColumn = styled.div`
  ${flexColumn}
  width: 100%;
`;

export const Header = styled.header`
  margin: 1.5rem 1rem;
  h1 {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  span {
    font-weight: 700;
    font-size: 1.4rem;
  }
`;
