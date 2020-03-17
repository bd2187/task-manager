import React from 'react';
import { render } from 'react-dom';
import './styles/normalize.css';
import { Provider } from 'react-redux';
import store from './reducers/store';

import routes from './config/routes';

render(
    <Provider store={store}>{routes}</Provider>,
    document.getElementById('root')
);
