import { requestGetOption } from 'api/api';
import { useEffect, useState } from 'react';
import { initialOptionType, OptionType } from 'types/option';

const useOption = () => {
  const [options, setOptions] = useState<OptionType>(initialOptionType);

  useEffect(() => {
    const fetchAndSetOPtions = async () => {
      const optionsData = await requestGetOption();
      setOptions(optionsData);
    };
    fetchAndSetOPtions();
  }, []);

  return { options };
};
export default useOption;
