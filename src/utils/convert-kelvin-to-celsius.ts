export const convertKelvinToCelcius = (temperature: number) => {
  const KELVIN_TO_CELSIUS = 273.15;
  return Number((temperature - KELVIN_TO_CELSIUS).toFixed(1));
};
