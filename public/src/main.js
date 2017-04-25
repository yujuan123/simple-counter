import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Counter from './components/Counter';
import reducers from './reducers/index';

let store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    document.getElementById('app')
);
