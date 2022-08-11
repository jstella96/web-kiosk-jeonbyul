import { createContext, useContext } from 'react';

export const OptionContext = createContext({
  size: { 1: { s: 123, m: 213, l: 123 }, 2: { s: 123, m: 213, l: 123 } },
  temperature: { 1: { h: 1000, c: 400 }, 2: { h: 400, c: 300 } }
});

export function useOptions() {
  return useContext(OptionContext);
}
