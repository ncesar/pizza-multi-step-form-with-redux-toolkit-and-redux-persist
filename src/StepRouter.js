import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * The idea of this function is to check if the user has started the pizza flow.
 * If he didn't, he shouldn't be able to progress to other routes.
 * @author César Nascimento - ncesar.com
 * @date 2021-05-01
 * @param {any} {component:Component
 * @param {any} step
 * @param {any} ...other}
 * @returns JSX
 */
export const StepRouter = ({ component: Component, step, ...other }) => {
  const pizzaContent = useSelector((state) => state.pizzaInfo);
  const isBuildingPizza = pizzaContent[step].title === '';
  return (
    <Route
      {...other}
      render={(props) =>
        !isBuildingPizza ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};
