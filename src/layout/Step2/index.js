import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MakeYourPizza } from 'components/MakeYourPizza';
import { chooseDough, sumPrice } from 'redux/pizza';
import { doughs as pizzaDoughs } from 'data/pizzas';
import { HomepageWrapper } from 'layout/Homepage/styled';
import { MotionWrapper } from 'components/MotionWrapper';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const stepHandler = (selectedIngredient) => {
    const { price, id, ...selected } = selectedIngredient;
    dispatch(chooseDough(selected));
    dispatch(sumPrice(price));
    history.push('/step3');
  };
  const { step } = useSelector((state) => state.pizzaInfo.dough);
  return (
    <MotionWrapper>
      <HomepageWrapper>
        <MakeYourPizza
          step={step}
          pizzaStep={pizzaDoughs}
          label="Selecione a massa"
          onNextButtonClick={(checked) => stepHandler(checked)}
        />
      </HomepageWrapper>
    </MotionWrapper>
  );
};
