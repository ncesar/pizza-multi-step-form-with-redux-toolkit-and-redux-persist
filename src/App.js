import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from 'layout/Homepage';
import { Step2 } from 'layout/Step2';
import { Step3 } from 'layout/Step3';
import { Result } from 'layout/Result';
import { Header } from 'components/Header';
import { AnimatePresence } from 'framer-motion';
import { StepRouter } from 'StepRouter';
import { GlobalStyle } from 'components/GlobalStyle';
import { Toast } from 'components/Toast';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Toast />
      <Header />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <StepRouter path="/step2" component={Step2} step="size" />
          <StepRouter path="/step3" component={Step3} step="dough" />
          <StepRouter path="/result" component={Result} step="border" />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
