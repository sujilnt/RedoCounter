import{createStore,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
// A custom function  that takes the rootreducer and sagaRoute Reducer as input and create a store and run the Saga .
const store = (rootReducer,sagaFunction)=>{
	const creatingstore = createStore(
		rootReducer,
		applyMiddleware(sagaMiddleware)
	); // creating the redux store.
	sagaMiddleware.run(sagaFunction); // run the redux saga
	return creatingstore;
};

export default store;
