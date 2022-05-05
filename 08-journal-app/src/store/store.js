
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers(
    {
        auth:authReducer
    }
)


export const store = configureStore(
    {reducer:reducers},
    composeEnhancers(
      applyMiddleware( thunk )
    )
    );
