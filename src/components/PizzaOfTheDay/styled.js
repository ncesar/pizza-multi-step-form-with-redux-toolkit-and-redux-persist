import styled, { css } from 'styled-components';

export const PizzaWrapper = styled.main`
  background: ${(props) => props.theme.pizzaStepCounterBackground};
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -40px;
  border-radius: 15px;
  padding: 20px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  svg {
    width: 40px;
  }
  @media (max-width: 900px) {
    width: 80%;
    top: -10px;
    margin-bottom: 40px;
    .pizza-content-wrapper {
      flex-direction: column;
    }
    img {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
`;
export const PizzaTitle = styled.h1`
  color: ${(props) => props.theme.pizzaSecondaryTitle};
  font-size: 24px;
  font-weight: bold;
`;
export const PizzaContentWrapper = styled.div`
  display: flex;
`;
export const PizzaImage = styled.img`
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 50%;
  height: 100%;
  margin-right: 20px;
  margin-top: 20px;
  max-height: 240px;
  max-width: 150px;
  min-height: 240px;
  min-width: 150px;
`;
export const PizzaDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;
export const PizzaPrimaryDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PizzaSecondaryDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PizzaDetailsTitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.pizzaDetailsTitle};
  margin-top: 10px;
`;
export const PizzaIngredientTitle = styled.p`
  color: ${({ color }) => color || '#7e807e'};
  font-size: 14px;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      margin-top: 10px;
    `}
`;
export const PizzaPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PizzaValueWrapper = styled.div``;
export const PizzaPrice = styled.span`
  font-size: 28px;
  color: ${(props) => props.theme.pizzaPrice};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      color: #2b9543;
    `}
`;
export const PizzaButton = styled.button`
  background: ${(props) => props.theme.pizzaButtonBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 10px 3px 10px 10px;
  width: 143px;
  height: 45px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.white};
  font-size: 20px;
  cursor: pointer;
`;
export const PointsBall = styled.div`
  position: absolute;
  right: -20px;
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
  width: 100px;
  background: ${(props) => props.theme.pizzaTitle};
  height: 100px;
  color: black;
  top: -38px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const PointsBallContent = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 18px;
  font-weight: normal;
  margin-top: -5px;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-size: 24px;
      margin-top: 0;
    `};
`;
export const BottomInfo = styled.span`
  color: ${(props) => props.theme.bottomInfo};
  font-size: 10px;
  position: absolute;
  bottom: -25px;
  right: 0;
`;
export const BottonInfoAlert = styled.span`
  color: ${(props) => props.theme.alertColor};
  font-size: 10px;
`;
