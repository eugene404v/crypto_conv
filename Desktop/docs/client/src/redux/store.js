import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  authReducer
  //pizzas,
  //cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );



export default store;