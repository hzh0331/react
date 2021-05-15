import {createStore} from "redux";

import counterReducer from './count_reducer'

export default createStore(counterReducer)