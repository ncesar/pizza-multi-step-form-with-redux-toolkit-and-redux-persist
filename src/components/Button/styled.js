import styled from 'styled-components';

export const PizzaButton = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.primaryGreen};
  border-radius: 10px;
  width: 185px;
  cursor: pointer;
`;
