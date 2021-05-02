import React from 'react';
import { Button } from 'components/Button';
import { PizzaOfTheDay } from 'components/PizzaOfTheDay';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetPoints } from 'redux/points';
import { ResultTitle, ResultWrapper } from './styled';
import { MotionWrapper } from 'components/MotionWrapper';

export const Result = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    dough: doughRedux,
    size: sizeRedux,
    border: borderRedux,
    price,
  } = useSelector((state) => state.pizzaInfo);
  const { title: dough } = doughRedux;
  const { title: size } = sizeRedux;
  const { title: border } = borderRedux;
  const selectedPizza = {
    dough,
    size,
    border,
    price,
    points: 50,
  };

  return (
    <MotionWrapper>
      <ResultWrapper>
        <ResultTitle>
          Obrigado por comprar conosco! <br />
          Essas são as informações da sua pizza:
        </ResultTitle>
        <PizzaOfTheDay
          pizzaInfo={selectedPizza}
          hideButton
          label="Pizza comprada:"
        />
        <Button onClick={() => dispatch(resetPoints())}>Resetar pontos</Button>
        <br />
        <Button onClick={() => history.push('/')}>Comprar novamente</Button>
      </ResultWrapper>
    </MotionWrapper>
  );
};
