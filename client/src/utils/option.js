const TEMPERATURE_LABLE_MAP = {
  c: 'ICE',
  h: 'HOT'
};

const SIZE_LABEL_MAP = {
  s: '작은 컵',
  m: '중간 컵',
  ㅣ: '큰 컵'
};

export const convertOptionKeyToLabel = (options, type) => {
  const LABEL_MAP = type === 'temprature' ? TEMPERATURE_LABLE_MAP : SIZE_LABEL_MAP;
  const optionKeys = Object.keys(options);
  const convertedOptions = optionKeys.reduce((acc, currKey) => {
    const label = LABEL_MAP[currKey];
    if (!label) return acc;
    acc.push({ label: label, additionalAmount: options[currKey], key: currKey });
    return acc;
  }, []);
  return convertedOptions;
};
