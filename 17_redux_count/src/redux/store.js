import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import counterReducer from './count_reducer'

export default createStore(counterReducer, applyMiddleware(thunk))