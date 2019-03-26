import {combineReducers} from "redux";
import C from "./constant";

export const addCounter = (state={},action)=>(action.type=== C.ADD_COUNTER)?
	action.payload:
	state;

