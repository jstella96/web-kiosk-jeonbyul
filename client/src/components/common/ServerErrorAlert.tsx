import { CoffeeCup } from 'assets/icon';
import COLORS from 'constants/color';
import { PAGE_URL } from 'constants/pageUrl';
import { Link, useNavigate } from 'react-router-dom';
import { useTimer } from 'hooks/useTimer';
import styled from 'styled-components';
import { modal } from 'styles/common';

const START_COUNT_NUMBER = 10;
export const ServerErrorAlert = () => {
  const navigate = useNavigate();
  const time = useTimer({
    seconds: START_COUNT_NUMBER,
    onTimeout: () => navigate(PAGE_URL.HOME, { replace: true })
  });
  return (
    <Modal>
      <Section>
        <Main>
          <Icon>
            <CoffeeCup></CoffeeCup>
          </Icon>
          <p>
            죄송합니다
            <br />
            서버와의 통신에러가 발생했습니다
          </p>
          <Link to={PAGE_URL.HOME}>
            <Button>
              홈 화면으로 이동 <strong>({time})</strong>
            </Button>
          </Link>
        </Main>
      </Section>
    </Modal>
  );
};

const Modal = styled.div`
  ${modal}
  display: flex;
  p {
    text-align: center;
  }
  line-height: 1.5;
`;

const Section = styled.section`
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 0.2rem;
  background-color: ${COLORS.white};
  display: grid;
  grid-template-rows: 8fr 1fr;
`;
const Main = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.div`
  padding: 2rem;
  // background-color: ${COLORS.primary};
  svg {
    width: 5rem;
    height: 5rem;
    fill: ${COLORS.primary};
  }
`;
const Button = styled.button`
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  border: 1px solid ${COLORS.grayDark};
  color: ${COLORS.grayDark};
  border-radius: 0.2rem;
`;
