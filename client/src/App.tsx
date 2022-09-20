import { OrderInfoProvider } from 'context/orderInfoContext';
import GlobalStyle from 'styles/globalstyle';
import { AppRoutes } from 'AppRoutes';
import { ScreenHandler } from 'hooks/screenHandler';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ScreenHandler />
      <OrderInfoProvider>
        <AppRoutes></AppRoutes>
      </OrderInfoProvider>
    </div>
  );
}
export default App;
