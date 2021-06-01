import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { About, Main, Contacts, NotFound } from '../Pages';
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
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;
