import { createContext, useContext } from 'react';
import { OptionType } from 'types/option';

export const OptionContext = createContext<OptionType | null>(null);

export function useOptions(component?: string) {
  const context = useContext(OptionContext);
  if (context === null) {
    throw new Error(`<${component}/> should be <OptionContext.Provider/> children`);
  }
  return context;
}

OptionContext.displayName = 'OptionContext';
