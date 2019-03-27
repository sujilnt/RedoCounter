import C from "./constant";
// INCREMENT_ACTION -> Action to increment the counter
export const INCREMENT_ACTION = ()=>{
	return{
		type: C.INC_SAGA,
	};
};
// DECREMENT_ACTION -> Action to increment the counter
export const DECREMENT_ACTION=()=>{
	return{
		type: C.DEC_SAGA,
	}
};
// RESET_ACTION -> Action to reset the counter
export const RESET_ACTION =()=>{
 return{
 	type: C.RESET_SAGA
 }
};
