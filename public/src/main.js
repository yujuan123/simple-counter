import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Counter from './components/Counter';
import handleCounter from './reducers/handle-counter';

let store = createStore(handleCounter);

ReactDom.render(
    <Provider store = {store}>
      <Counter />
    </Provider>,
    document.getElementById('app')
);
