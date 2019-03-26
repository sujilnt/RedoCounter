import C from "./constant";

const AddCounterAction = (value=0)=>{
	return{
		type: C.ADD_COUNTER,
		payload: value
	};
};
