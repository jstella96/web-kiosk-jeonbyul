import { createContext, useContext } from 'react';

export const PageContext = createContext({
  page: 'home',
  movePage: () => {}
});

export function usePage() {
  return useContext(PageContext);
}
