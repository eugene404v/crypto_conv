import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './reducers/auth.reducer';
import favsReducer from './reducers/favs.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  authReducer,
  favsReducer
  //cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );



export default store;