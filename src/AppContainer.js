import {connect} from "react-redux";
import {DECREMENT_ACTION, INCREMENT_ACTION,RESET_ACTION} from "./store/actions";
import App from "./App";

const mapStateToProps = (state)=>{
	return{
		...state
	}
};

const mapDispatchToProps = (dispatcher)=>{
  return{
  	action:{
	    increment: ()=> dispatcher(INCREMENT_ACTION()),
	    decrement: ()=> dispatcher(DECREMENT_ACTION()),
	    reset:()=> dispatcher(RESET_ACTION())
    }
  }
};

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
export default AppContainer;
