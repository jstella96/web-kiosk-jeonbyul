import React from 'react';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { Exit, Search } from 'assets/icon';
import { flexRow } from 'styles/common';
import { PAGE_URL } from 'constants/pageUrl';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <Link to={PAGE_URL.HOME}>
        <button>
          <Exit />
          <span>나가기</span>
        </button>
      </Link>
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
  align-items: center;
  display: flex;
  justify-content: flex-end;
  button {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0rem 0.2rem;
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
