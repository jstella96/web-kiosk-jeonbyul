import React, { createContext } from 'react';

export const OptionContext = createContext({});

const OptionStore = (props) => {
  const options = {
    size: {
      1: {
        s: 0,
        m: 500,
        l: 1000
      },
      2: {
        s: 0,
        m: 1000,
        l: 2000
      },
      3: {
        s: 100,

        l: 1000
      }
    },
    temperature: {
      1: { h: 100, c: 500 },
      2: { c: 500 },
      3: { h: 0, c: 1000 }
    }
  };
  return <OptionContext.Provider value={options}>{props.children}</OptionContext.Provider>;
};

export default OptionStore;
