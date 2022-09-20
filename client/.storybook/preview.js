import GlobalStyle from '../src/styles/globalstyle';
import { BrowserRouter } from 'react-router-dom';
import { OrderInfoProvider } from '../src/context/orderInfoContext';
import { ScreenHandler } from '../src/hooks/screenHandler';
import React from 'react';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
export const decorators = [
  (Story) => (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ScreenHandler />
        <OrderInfoProvider>
          <Story />
        </OrderInfoProvider>
      </BrowserRouter>
    </>
  )
];
