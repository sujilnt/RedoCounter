import {connect} from "react-redux";
import {DECREMENT_ACTION, INCREMENT_ACTION} from "./store/actions";
import App from "./App";

const mapStateToProps = (state)=>{
	console.log(state);
   const obj={
   	  state:{
   	  	count: 0 ,
      }
   };
   return obj.state;
};

const mapDispatchToProps = (dispatcher)=>{
  return{
  	action:{
	    increment: ()=> dispatcher(INCREMENT_ACTION()),
	    decrement: ()=> dispatcher(DECREMENT_ACTION()),
    }
  }
};

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
export default AppContainer;
