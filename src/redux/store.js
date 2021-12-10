import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import * as reducers from './modules';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [ thunk ];

const rootReducer = combineReducers(reducers, applyMiddleware(middleware));
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
