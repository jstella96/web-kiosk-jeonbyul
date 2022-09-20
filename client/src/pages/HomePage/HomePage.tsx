import COLORS from 'constants/color';
import { useOrderInfo } from 'context/orderInfoContext';
import { clearOrderInfo } from 'reducer/orderInfo';
import { useEffect } from 'react';
import styled from 'styled-components';
import { PAGE_URL } from 'constants/pageUrl';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button/Button';
const HomePage = () => {
  const { orderInfoDispatch } = useOrderInfo();

  useEffect(() => {
    orderInfoDispatch(clearOrderInfo());
  }, [orderInfoDispatch]);

  return (
    <HomeLayout>
      <h1>별다방</h1>
      <ButtonBox>
        <Link to={PAGE_URL.MAIN}>
          <LinkButton size="fullWidth" data-test="dinein-button">
            매장이용
          </LinkButton>
        </Link>
        <Link to={PAGE_URL.MAIN}>
          <LinkButton size="fullWidth" data-test="takeout-button">
            포장
          </LinkButton>
        </Link>
      </ButtonBox>
    </HomeLayout>
  );
};
export default HomePage;

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
  h1 {
    font-size: 4.2rem;
    font-weight: 700;
    letter-spacing: 0.25rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LinkButton = styled(Button)`
  background-color: ${COLORS.white};
  font-size: 1.4rem;
  margin: 1rem 0rem;
  border-radius: 0.6rem;
  padding: 1.3rem 0rem;
`;
