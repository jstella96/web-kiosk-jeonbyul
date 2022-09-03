import React from 'react';
import { usePage } from 'context/pageContext';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { Exit, Search } from 'assets/icon';

const Footer = () => {
  const { movePage } = usePage();
  return (
    <Container>
      <button onClick={() => movePage('home')}>
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
  padding: 0.4rem;
  width: 100%;
  background-color: ${COLORS.black};
  text-align: right;
  display: flex;
  justify-content: flex-end;
  button {
    font-weight: 700;
    padding: 0.4rem;
    color: ${COLORS.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;
