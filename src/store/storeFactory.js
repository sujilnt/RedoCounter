import{createStore,applyMiddleware,compose} from "redux";
import {rootReducer} from "./reducer";
console.log("rootReducer", rootReducer);
const store = ()=> createStore(
	rootReducer
);

export default store;
