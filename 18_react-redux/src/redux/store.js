import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import counterReducer from './reducers/count'

export default createStore(counterReducer, applyMiddleware(thunk))