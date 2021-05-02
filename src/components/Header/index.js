import React from 'react';
import {
  HeaderTitleWrapper,
  HeaderSubtitle,
  HeaderTitle,
  HeaderContentWrapper,
  HeaderWrapper,
  HeaderPointsWrapper,
  HeaderPointsTitleWrapper,
  HeaderPointsValue,
  HeaderPoints,
} from './styled';
import { FoodPizza as PizzaIcon } from '@styled-icons/fluentui-system-regular/FoodPizza';
import { Food as FoodIcon } from '@styled-icons/fluentui-system-filled/Food';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { point } = useSelector((state) => state.points);
  return (
    <HeaderWrapper>
      <HeaderContentWrapper className="header-content-wrapper">
        <PizzaIcon className="pizza-icon" />
        <HeaderTitleWrapper>
          <HeaderTitle>PizzaStoom</HeaderTitle>
          <HeaderSubtitle>é pizza, sim.</HeaderSubtitle>
        </HeaderTitleWrapper>
      </HeaderContentWrapper>
      <HeaderPointsWrapper className="points-wrapper">
        <FoodIcon className="food-icon" />
        <HeaderPointsTitleWrapper>
          <HeaderSubtitle size="16px">StoomPoints</HeaderSubtitle>
          <HeaderPoints>
            <HeaderPointsValue>{point}</HeaderPointsValue>
            <HeaderSubtitle size="16px">pontos.</HeaderSubtitle>
          </HeaderPoints>
        </HeaderPointsTitleWrapper>
      </HeaderPointsWrapper>
    </HeaderWrapper>
  );
};
