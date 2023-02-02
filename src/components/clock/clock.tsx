import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const ClockContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  h1: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: '3.8rem',
    color: theme.colors.textSecondary,
    lineHeight: '3.2rem',
  },
  small: { fontSize: '15px', color: theme.colors.textSecondary },
  marginBottom: '1rem',
});

export const Clock = (input: { timezone: number }) => {
  const [hours, setHours] = useState<string>('00');
  const [minutes, setMinutes] = useState<string>('00');
  const [seconds, setSeconds] = useState<string>('00');

  const updateTime = () => {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * input.timezone);

    const updatedTime = new Date(nd).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const splitTime = updatedTime.split(':');

    setHours(splitTime[0]);
    setMinutes(splitTime[1]);
    setSeconds(splitTime[2]);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return (
    <ClockContainer>
      <h1>{hours}</h1>
      <h1>{minutes}</h1>
      <small>{seconds}</small>
    </ClockContainer>
  );
};
