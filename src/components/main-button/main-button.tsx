import { FC } from 'react';
import { IconType } from 'react-icons/lib';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const MainButton = styled.button({
  width: '100%',
  padding: '1rem 0.5rem',
  background: 'none',
  cursor: 'pointer',
  color: theme.colors.buttonSecondary,
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
  fontSize: '1rem',
  fontWeight: 'bold',
  border: `1px solid ${theme.colors.buttonSecondary}`,
  ':hover:enabled': {
    color: theme.colors.buttonPrimary,
    background: theme.colors.listItemHover,
  },
  ':active:enabled': {
    background: theme.colors.textTertiary,
  },
  ':disabled': {
    cursor: 'not-allowed',
    color: 'gray',
    background: 'none',
    border: `1px solid gray`,
  },
});

interface IMainButton {
  type?: 'button' | 'reset' | 'submit' | undefined;
  id?: string;
  icon?: IconType;
  onClick?: () => void;
  iconSize?: number | string;
  style?: React.CSSProperties;
  placeholder?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<IMainButton> = (props) => {
  return (
    <MainButton
      id={props.id}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}
      type={props.type || 'button'}
      className={props.className}
    >
      {props.children}
      {props.icon && <props.icon size={props?.iconSize} />}
    </MainButton>
  );
};
