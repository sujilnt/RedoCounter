import {combineReducers} from "redux";
import C from "./constant";
export const counter = (state=0,action)=>{
	switch(action.type){
		case C.INC:
			state= state+1;
			break;
		case C.DEC:
			state= state-1;
			break;
		case C.RESET:
			state=0;
			break;
		default:
			return state;
		
	}
};



export const rootReducer =  combineReducers({
	counter
});

