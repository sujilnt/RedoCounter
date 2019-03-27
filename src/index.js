import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import storeFactory from "./store/storeFactory";
import AppContainer from "./AppContainer";
import {rootReducer} from "./store/reducer";
import {rootSaga} from "./store/sagas/sagas";
const store = storeFactory(rootReducer,rootSaga);
store.subscribe(
	()=>console.log(store,store.getState())
);
window.store= store;
ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
