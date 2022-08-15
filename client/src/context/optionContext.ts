import { createContext, useContext } from 'react';

interface SizeOptionInterface {
  s: number;
  m: number;
  l: number;
}

interface TemperatureOptionInterface {
  h: number;
  c: number;
}

interface OptionInterface {
  size: { [key: string]: SizeOptionInterface };
  temperature: {
    [key: string]: TemperatureOptionInterface;
  };
}

export const OptionContext = createContext<OptionInterface | null>(null);

export function useOptions(component?: string) {
  const context = useContext(OptionContext);
  if (context === null) {
    throw new Error(`<${component}/> should be <OptionContext.Provider/> children`);
  }
  return context;
}

OptionContext.displayName = 'OptionContext';
