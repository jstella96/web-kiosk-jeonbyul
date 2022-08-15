import { createContext, useContext } from 'react';

interface MovePage extends React.Dispatch<React.SetStateAction<string>> {}

interface Page {
  page: string;
  movePage: MovePage;
}

export const PageContext = createContext<Page | null>(null);

export function usePage(component?: string) {
  const context = useContext(PageContext);
  if (context === null) {
    throw Error(`<${component}/> should be <OptionContext.Provider/> children`);
  }
  return context;
}

PageContext.displayName = 'PageContext';
