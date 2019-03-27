import{createStore,applyMiddleware,compose} from "redux";
import {rootReducer} from "./reducer";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
console.log("rootReducer", rootReducer);
const store = (rootReducer,sagaFunction)=>{
	const creatingstore = createStore(
		rootReducer,
		applyMiddleware(sagaMiddleware)
	);
	sagaMiddleware.run(sagaFunction);
	return creatingstore;
};

export default store;
