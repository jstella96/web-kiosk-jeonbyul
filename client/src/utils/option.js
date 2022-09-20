import { SIZE_LABEL_MAP, TEMPERATURE_LABLE_MAP } from 'constants/option';

export const convertOptionKeyToLabel = (options, type) => {
  if (!options) return [];
  const LABEL_MAP = type === 'temprature' ? TEMPERATURE_LABLE_MAP : SIZE_LABEL_MAP;
  const optionKeys = Object.keys(options);
  const convertedOptions = optionKeys.reduce((acc, currKey) => {
    const label = LABEL_MAP[currKey];
    if (!label) return acc;
    acc.push({ label: label, additionalPrice: options[currKey], key: currKey });
    return acc;
  }, []);
  return convertedOptions;
};
