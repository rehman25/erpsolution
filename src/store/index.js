import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import Red_Login from './reducers/Login/index'



const reducers = combineReducers({
  Red_Login,
 

});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;