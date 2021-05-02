import React, { useEffect } from 'react';
import { MakeYourPizza } from 'components/MakeYourPizza';
import { PizzaOfTheDay } from 'components/PizzaOfTheDay';
import { HomepageWrapper } from './styled';
import { pizzas, sizes as pizzaSizes } from 'data/pizzas';
import { useDispatch, useSelector } from 'react-redux';
import { chooseSize, sumPrice, resetPizza } from 'redux/pizza';
import { useHistory } from 'react-router-dom';
import { MotionWrapper } from 'components/MotionWrapper';

export const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const stepHandler = (selectedIngredient) => {
    const { price, id, ...selected } = selectedIngredient;
    dispatch(chooseSize(selected));
    dispatch(sumPrice(price));
    history.push('/step2');
  };
  useEffect(() => {
    dispatch(resetPizza());
    window.scrollTo(0, 0);
  }, [dispatch]);

  // getting a random pizza from data/pizza.js
  const pizzaOfTheDay = pizzas[Math.floor(Math.random() * pizzas.length)];
  const { step } = useSelector((state) => state.pizzaInfo.size);
  return (
    <MotionWrapper>
      <HomepageWrapper>
        <PizzaOfTheDay pizzaInfo={pizzaOfTheDay} />
        <MakeYourPizza
          step={step}
          pizzaStep={pizzaSizes}
          label="Selecione o tamanho"
          onNextButtonClick={(checked) => stepHandler(checked)}
        />
      </HomepageWrapper>
    </MotionWrapper>
  );
};
