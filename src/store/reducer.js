import {combineReducers} from "redux";
import C from "./constant";
export const counter = (state=0,action)=>{
	switch(action.type){
		case C.INC:
			return state+1;
		case C.DEC:
			return state-1;
		case C.RESET:
			return 0;
		default:
			return state;
		
	}
};

export const rootReducer =  combineReducers({
	counter
});

