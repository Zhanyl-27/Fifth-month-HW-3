import {INCREMENT,DECREMENT, RESET,RANDOMINCREMENT,RANDOMDECREMENT} from "./types";
import  reducer  from "./reducers";
import {increment, decrement, reset, randomincrement, randomdecrement} from "./actions";
import store from "./store"

export { INCREMENT, reducer,
 increment, store,
 DECREMENT, RESET,
 RANDOMINCREMENT, RANDOMDECREMENT,
 decrement, reset,
 randomincrement, randomdecrement
 };