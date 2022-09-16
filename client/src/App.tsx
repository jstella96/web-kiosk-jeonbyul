import Router from './Router/Router';
import { OptionContext } from 'context/optionContext';
import { useEffect, useState } from 'react';
import { requestGetOption } from 'api/api';
import { OrderInfoContext } from 'context/orderInfoContext';
import { PageContext } from 'context/pageContext';
import { useOrderInfoState } from 'hooks/useOrderInfoState';
import { initialOptionType, OptionType } from 'types/option';
import GlobalStyle from 'styles/globalstyle';

function App() {
  const [page, setPage] = useState('home');
  const [options, setOptions] = useState<OptionType>(initialOptionType);
  const { orderInfo, orderInfoDispatch, totalCount, totalPrice } = useOrderInfoState();

  useEffect(() => {
    const fetchAndSetOPtions = async () => {
      const optionsData = await requestGetOption();
      setOptions(optionsData);
    };
    fetchAndSetOPtions();
  }, []);

  /* 모바일기기 100vh 이슈 해결을 위한 로직  */
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  window.addEventListener('resize', () => setScreenSize());

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <PageContext.Provider value={{ page, movePage: setPage }}>
        <OrderInfoContext.Provider value={{ orderInfo, orderInfoDispatch, totalCount, totalPrice }}>
          <OptionContext.Provider value={options}>
            <Router></Router>
          </OptionContext.Provider>
        </OrderInfoContext.Provider>
      </PageContext.Provider>
    </div>
  );
}
export default App;
