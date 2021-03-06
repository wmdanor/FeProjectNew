import '../styles/index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './reducers';

const onclick = (e) => {
  e.preventDefault();
  console.log(store.getState(), localStorage);
};

const onclick2 = (e) => {
  e.preventDefault();
  console.log('ok');
  localStorage.clear();
};

ReactDOM.render(
  <Provider store={store}>
    <button type="button" onClick={onclick}>
      Show state
    </button>
    <button type="button" onClick={onclick2}>
      Clear state
    </button>
    <App />
  </Provider>,
  document.getElementById('root'),
);
