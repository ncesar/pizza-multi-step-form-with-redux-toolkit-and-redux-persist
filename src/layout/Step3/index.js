import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MakeYourPizza } from 'components/MakeYourPizza';
import { chooseBorder, sumPrice } from 'redux/pizza';
import { incrementPoints } from 'redux/points';
import { border as pizzaBorders } from 'data/pizzas';
import { HomepageWrapper } from 'layout/Homepage/styled';
import { toast } from 'react-toastify';
import { MotionWrapper } from 'components/MotionWrapper';

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const stepHandler = (selectedIngredient) => {
    const { price, id, ...selected } = selectedIngredient;
    dispatch(chooseBorder(selected));
    dispatch(sumPrice(price));
    dispatch(incrementPoints(50));
    toast.success('Pizza comprada com sucesso! + 50 pontos!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push('/result');
  };
  const { step } = useSelector((state) => state.pizzaInfo.border);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MotionWrapper>
      <HomepageWrapper>
        <MakeYourPizza
          step={step}
          pizzaStep={pizzaBorders}
          label="Selecione a borda"
          onNextButtonClick={(checked) => stepHandler(checked)}
        />
      </HomepageWrapper>
    </MotionWrapper>
  );
};
