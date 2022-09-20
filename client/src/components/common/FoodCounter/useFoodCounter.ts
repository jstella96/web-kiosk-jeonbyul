import { useEffect, useState } from 'react';

interface useFoodCounterProps {
  initalValue: number;
  onChange: (value: number) => {};
}

const useFoodCounter = ({ initalValue, onChange }: useFoodCounterProps) => {
  let [value, setValue] = useState(initalValue);

  useEffect(() => {
    if (initalValue === value) return;
    setValue(initalValue);
  }, [initalValue]);

  const onIncrease = () => {
    setValue(value + 1);
    onChange(value + 1);
  };

  const onDecrease = () => {
    if (value === 1) return;
    setValue(value - 1);
    onChange(value - 1);
  };

  return { value, onIncrease, onDecrease };
};

export default useFoodCounter;
