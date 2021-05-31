import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { About, Main, NotFound } from '../Pages';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { CartPopup } from '../Cart';

const Router = ReactRouterDOM.BrowserRouter;
const { Route } = ReactRouterDOM;
const { Switch } = ReactRouterDOM;

function App() {
  return (
    <Router>
      <CartPopup />
      <AppHeader />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;
