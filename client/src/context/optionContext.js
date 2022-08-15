import { createContext, useContext } from 'react';

export const OptionContext = createContext({
  size: { 1: { s: 0, m: 500, l: 1000 }, 2: { s: 0, m: 1000, l: 2000 } },
  temperature: { 1: { h: 0, c: 500 }, 2: { h: 0, c: 500 } }
});

export function useOptions() {
  return useContext(OptionContext);
}
