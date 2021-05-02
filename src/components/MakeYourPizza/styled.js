import styled, { css } from 'styled-components';

export const PizzaWrapper = styled.div`
  background: ${(props) => props.theme.white};
  width: 40%;
  border-radius: 15px;
  padding: 20px 20px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 900px) {
    width: 80%;
    .steps {
      padding: 10px;
    }
    .pizza-content-wrapper {
      flex-direction: column;
    }
    .pizza-info-wrapper {
      padding: 10px;
    }
    .pizza-total-price {
      font-size: 12px;
    }
  }
`;
export const PizzaWrapperTitle = styled.h1`
  color: ${(props) => props.theme.pizzaWrapperTitle};
  font-size: 24px;
`;
export const PizzaSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const PizzaSelectTitle = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.pizzaTitle};
`;
export const PizzaStepCounter = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.pizzaStepCounterBackground};
  padding: 5px 30px;
  color: ${(props) => props.theme.pizzaStepCounter};
  font-weight: bold;
`;
export const PizzaImage = styled.img`
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 44%;
  height: 100%;
  margin-right: 20px;
  max-height: 240px;
  max-width: 150px;
  min-height: 240px;
  min-width: 150px;
`;
export const PizzaInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const PizzaDetailsTitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.pizzaDetailsTitle};
  margin-top: 10px;
`;
export const PizzaIngredientTitle = styled.p`
  color: ${({ color }) => color || '#7e807e'};
  margin-top: 20px;
  font-size: 14px;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      margin-top: 10px;
    `}
`;
export const PizzaContentWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.pizzaContentWrapper};
  margin: 20px 0;
  position: relative;
  border-radius: 15px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  svg {
    width: 25px;
  }
`;
export const PizzaErrorLabel = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
`;
export const PizzaButtonErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PizzaTotalPrice = styled.div`
  color: ${(props) => props.theme.makeYourPizzaPrimary};
  font-size: 14px;
`;
