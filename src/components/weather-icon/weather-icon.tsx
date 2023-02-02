export const WeatherIcon = (props: { icon: string }) => {
  return <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />;
};
