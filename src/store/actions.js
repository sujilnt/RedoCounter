import C from "./constant";

export const INCREMENT_ACTION = ()=>{
	return{
		type: C.INC_SAGA,
	};
};

export const DECREMENT_ACTION=()=>{
	return{
		type: C.DEC_SAGA,
	}
};

export const RESET_ACTION =()=>{
 return{
 	type: C.RESET_SAGA
 }
};
