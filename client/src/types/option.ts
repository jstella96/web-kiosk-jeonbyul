interface SizeOptionType {
  s: number;
  m: number;
  l: number;
}

interface TemperatureOptionType {
  h: number;
  c: number;
}

export interface OptionType {
  size: { [key: string]: SizeOptionType };
  temperature: {
    [key: string]: TemperatureOptionType;
  };
}

export const initialOptionType = {
  size: {},
  temperature: {}
};
