import React from 'react';
import { PizzaButton } from './styled';

export const Button = ({ children, ...props }) => {
  return <PizzaButton {...props}>{children}</PizzaButton>;
};
