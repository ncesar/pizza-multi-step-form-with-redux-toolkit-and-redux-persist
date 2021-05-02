import React from 'react';
import { CheckboxWrapper, CheckboxInput } from './styled';

export const Checkbox = ({ checked, onClick, index }) => {
  return (
    <CheckboxWrapper onClick={onClick}>
      <CheckboxInput
        className={checked && 'checked'}
        type="checkbox"
        checked={checked === index}
        readOnly
      />
      <label> </label>
    </CheckboxWrapper>
  );
};
