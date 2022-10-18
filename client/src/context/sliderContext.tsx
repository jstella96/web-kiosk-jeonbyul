import { createContext, useContext, useMemo, useState } from 'react';
import { calculateNextStartIndex } from 'utils/animation';

const MAIN_WIDTH = 767;

interface SliderContextType {
  selectedIndex: number;
  startIndex: number;
  length: number;
  actions: any;
}

export const SliderContext = createContext<SliderContextType | null>(null);
SliderContext.displayName = 'SliderContext';

export function useSlider(component?: string) {
  const context = useContext(SliderContext);
  if (context === null) {
    throw new Error(`<${component}/> should be <OrderInfoContext.Provider/> children`);
  }
  return context;
}

interface Props {
  children: React.ReactNode;
  length: number;
}

export const SliderProvider = ({ children, length }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const actions = useMemo(
    () => ({
      selectIndex(nextIndex: number) {
        const numVisibleItem = window.innerWidth <= MAIN_WIDTH ? 3 : 4;
        if (nextIndex < 0 || length - 1 < nextIndex) return;
        const nextStartIndex = calculateNextStartIndex(
          nextIndex,
          startIndex,
          length,
          numVisibleItem
        );
        setStartIndex(nextStartIndex);
        setSelectedIndex(nextIndex);
      },
      selectNextIndex() {
        actions.selectIndex(selectedIndex + 1);
      },
      selectPrevIndex() {
        actions.selectIndex(selectedIndex - 1);
      }
    }),
    [length, startIndex, selectedIndex]
  );

  const value = useMemo(
    () => ({
      selectedIndex,
      startIndex,
      length,
      actions
    }),
    [selectedIndex, actions, startIndex, length]
  );

  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
};
