import React from 'react';
import { Check as CheckIcon } from '@styled-icons/boxicons-regular/Check';
import {
  BottomInfo,
  BottonInfoAlert,
  PizzaButton,
  PizzaContentWrapper,
  PizzaDetailsTitle,
  PizzaDetailsWrapper,
  PizzaImage,
  PizzaIngredientTitle,
  PizzaPrice,
  PizzaPriceWrapper,
  PizzaPrimaryDetails,
  PizzaSecondaryDetails,
  PizzaTitle,
  PizzaValueWrapper,
  PizzaWrapper,
  PointsBall,
  PointsBallContent,
} from './styled';
import { useDispatch } from 'react-redux';
import { incrementPoints } from 'redux/points';
import { toast } from 'react-toastify';
import { formatNumberToBRL } from 'utils';

export const PizzaOfTheDay = ({ pizzaInfo, hideButton = false, label }) => {
  const dispatch = useDispatch();
  const { size, dough, border, price, points, image } = pizzaInfo;
  const onClickHandler = () => {
    dispatch(incrementPoints(points));
    toast.success(`Pizza comprada com sucesso! + ${points} pontos!`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <PizzaWrapper>
      <PizzaTitle>{label || 'Pizza do dia:'}</PizzaTitle>
      <PizzaContentWrapper className="pizza-content-wrapper">
        <PizzaImage
          src={image || 'https://i.imgur.com/MHyET8s.png'}
          alt="Pizza image"
        />
        <PizzaDetailsWrapper>
          <PizzaPrimaryDetails>
            <PizzaDetailsTitle>Pizza {size}</PizzaDetailsTitle>
            <PizzaIngredientTitle bold>Tamanho:</PizzaIngredientTitle>
            <PizzaIngredientTitle color="#3b3c4c">{size}</PizzaIngredientTitle>
            <PizzaIngredientTitle bold>Massa:</PizzaIngredientTitle>
            <PizzaIngredientTitle color="#3b3c4c">{dough}</PizzaIngredientTitle>
            <PizzaIngredientTitle bold>Borda:</PizzaIngredientTitle>
            <PizzaIngredientTitle color="#3b3c4c">
              {border}
            </PizzaIngredientTitle>
          </PizzaPrimaryDetails>
          <PizzaSecondaryDetails>
            <PizzaPriceWrapper>
              <PizzaValueWrapper>
                <PizzaPrice bold>{formatNumberToBRL(price)}</PizzaPrice>
              </PizzaValueWrapper>
            </PizzaPriceWrapper>
            {!hideButton && (
              <PizzaButton onClick={onClickHandler}>
                quero! <CheckIcon />
              </PizzaButton>
            )}
          </PizzaSecondaryDetails>
        </PizzaDetailsWrapper>
      </PizzaContentWrapper>
      <PointsBall>
        <PointsBallContent bold>{points}</PointsBallContent>
        <PointsBallContent>pontos</PointsBallContent>
      </PointsBall>
      {!hideButton && (
        <BottomInfo>
          ganhe pontos ao concluir o seu pedido{' '}
          <BottonInfoAlert>*</BottonInfoAlert>
        </BottomInfo>
      )}
    </PizzaWrapper>
  );
};
