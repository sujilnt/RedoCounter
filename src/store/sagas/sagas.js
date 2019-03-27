import {delay} from "q";
import {takeLatest,put} from "redux-saga/effects";
import C from "../constant";

function* asyncIncrement() {
	yield delay(2000);
	yield put({type:C.INC})
}

function* asyncDecrement(){
	yield delay(200);
	yield put({type:C.DEC});
}

function* asyncReset() {
	yield delay(2000);
	yield put({type:C.RESET})
}
//rootSaga() => SAGA Watcher
export function* rootSaga(){
	yield takeLatest(C.INC_SAGA,asyncIncrement); // increment the number
	yield takeLatest(C.DEC_SAGA,asyncDecrement); // Decrement the number
	yield takeLatest(C.RESET_SAGA,asyncReset); // Reset the number
}
