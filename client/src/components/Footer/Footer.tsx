import React from 'react';
import { usePage } from 'context/pageContext';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { Exit, Search } from 'assets/icon';
import { flexRow } from 'styles/common';
import { PAGE_URL } from 'constants/pageUrl';

const Footer = () => {
  const { movePage } = usePage();
  return (
    <Container>
      <button onClick={() => movePage(PAGE_URL.HOME)}>
        <Exit />
        <span>나가기</span>
      </button>
      <button>
        <Search />
        <span>검색하기</span>
      </button>
    </Container>
  );
};
export default Footer;

const Container = styled.footer`
  padding: 0.1rem 0.2rem;
  width: 100%;
  background-color: ${COLORS.black};
  text-align: right;
  display: flex;
  justify-content: flex-end;
  button {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0rem 0.4rem;
    color: ${COLORS.white};
    ${flexRow}
    span {
      margin-left: 10px;
    }
  }
  svg {
    width: 1rem;
  }
`;
