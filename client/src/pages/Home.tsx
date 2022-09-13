import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { usePage } from 'context/pageContext';
import { clearOrderInfo } from 'reducer/orderInfo';
import { useEffect } from 'react';
import styled from 'styled-components';
import { PAGE_URL } from 'constants/pageUrl';

const Home = () => {
  const { movePage } = usePage();
  const { orderInfoDispatch } = useOrderInfo();

  useEffect(() => {
    orderInfoDispatch(clearOrderInfo());
  }, [orderInfoDispatch]);

  return (
    <HomeLayout>
      <h2>별다방</h2>
      <ButtonBox>
        <button onClick={() => movePage(PAGE_URL.MAIN)}>매장이용</button>
        <button onClick={() => movePage(PAGE_URL.MAIN)}>포장</button>
      </ButtonBox>
    </HomeLayout>
  );
};
export default Home;

const HomeLayout = styled.div`
  height: 100%;
  background-color: ${COLORS.primary};
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  font-size: calc(20px + 2vmin);
  color: ${COLORS.white};
  h2 {
    font-size: 4.2rem;
    font-weight: 700;
    letter-spacing: 0.25rem;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    background-color: ${COLORS.white};
    font-size: 1.4rem;
    margin: 1rem 0rem;
    border-radius: 0.6rem;
    font-weight: 700;
    padding: 1.3rem 0rem;
  }
`;
