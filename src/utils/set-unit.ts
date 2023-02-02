import { Unit } from '../types';

export const setUnit = (input: number, unit: Unit) => {
  const value = String(input);
  switch (unit) {
    case Unit.CELSIUS:
      return value.concat(Unit.CELSIUS);
  }
};
