import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialSate = {};

const middlewares = [thunk];

const store = createStore(
    rootReducer,
    initialSate,
    applyMiddleware(...middlewares)
)

export default store;