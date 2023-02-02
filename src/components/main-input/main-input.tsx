import React, { FC } from 'react';
import { IconType } from 'react-icons/lib';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const InputGroup = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  svg: {
    marginLeft: '-2.5rem',
    marginBottom: '5px',
  },
});

export const MainInput = styled.input({
  width: '100%',
  padding: '5px',
  fontSize: '1.5rem',
  color: theme.colors.textPrimary,
  background: 'none',
  border: 'none',
  borderBottom: `1px solid ${theme.colors.textSecondary}`,
  outline: 'none',
});

interface IInput {
  icon?: IconType;
  type: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  iconSize?: number | string;
  style?: React.CSSProperties;
  placeholder?: string;
}

export const Input: FC<IInput> = (props) => {
  return (
    <InputGroup style={props.style}>
      <MainInput
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.icon && <props.icon size={props?.iconSize} />}
    </InputGroup>
  );
};
