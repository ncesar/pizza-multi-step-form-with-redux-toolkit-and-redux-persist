import React, { useState } from 'react';
import { Checkbox } from 'components/Checkbox';
import { CaretRight as ButtonIcon } from '@styled-icons/boxicons-regular/CaretRight';
import { PizzaPrice, PizzaValueWrapper } from 'components/PizzaOfTheDay/styled';
import {
  PizzaImage,
  PizzaInfoWrapper,
  PizzaSelectTitle,
  PizzaSelectWrapper,
  PizzaStepCounter,
  PizzaWrapper,
  PizzaWrapperTitle,
  PizzaDetailsTitle,
  PizzaIngredientTitle,
  PizzaContentWrapper,
  ButtonWrapper,
  PizzaErrorLabel,
  PizzaButtonErrorWrapper,
  PizzaTotalPrice,
} from './styled';
import { useSelector } from 'react-redux';
import { Button } from 'components/Button';
import { formatNumberToBRL } from 'utils';

export const MakeYourPizza = ({
  onNextButtonClick,
  pizzaStep,
  label,
  step,
}) => {
  const [checked, setChecked] = useState(undefined);
  const [error, setError] = useState(false);
  const onClickHandler = () => {
    checked && onNextButtonClick?.(checked);
    !checked && setError(!error);
  };
  const { price } = useSelector((state) => state.pizzaInfo);
  return (
    <PizzaWrapper>
      <PizzaWrapperTitle>Ou monte sua pizza</PizzaWrapperTitle>
      <PizzaSelectWrapper>
        <PizzaSelectTitle>{label}:</PizzaSelectTitle>
        <PizzaStepCounter className="steps">{step} / 3</PizzaStepCounter>
      </PizzaSelectWrapper>
      {pizzaStep.map((pizza, index) => (
        <PizzaContentWrapper key={index} className="pizza-content-wrapper">
          <Checkbox
            onClick={() => {
              const { title, description, price } = pizza;
              setChecked({
                id: index,
                title,
                description,
                price,
              });
            }}
            checked={checked?.id}
            index={index}
          />
          <PizzaImage src={pizza.image} alt="Pizza image" />
          <PizzaInfoWrapper className="pizza-info-wrapper">
            <PizzaInfoWrapper>
              <PizzaDetailsTitle>{pizza.title}</PizzaDetailsTitle>
              <PizzaIngredientTitle color="#3b3c4c">
                {pizza.description}
              </PizzaIngredientTitle>
            </PizzaInfoWrapper>
            <PizzaValueWrapper>
              <PizzaPrice bold>{formatNumberToBRL(pizza.price)}</PizzaPrice>
            </PizzaValueWrapper>
          </PizzaInfoWrapper>
        </PizzaContentWrapper>
      ))}
      <ButtonWrapper>
        <PizzaTotalPrice className="pizza-total-price">
          Valor parcial: {formatNumberToBRL(price)}
        </PizzaTotalPrice>
        <PizzaButtonErrorWrapper>
          <Button onClick={onClickHandler}>
            {step > 1 ? 'Próximo passo' : 'montar meu pedido'}
            <ButtonIcon />
          </Button>
          {error && (
            <PizzaErrorLabel>Escolha pelo menos uma opção.</PizzaErrorLabel>
          )}
        </PizzaButtonErrorWrapper>
      </ButtonWrapper>
    </PizzaWrapper>
  );
};
