import React, { Component } from 'react';
import './App.css';
const Number_ZERO = 0;
class App extends Component {
    state={
        count:Number_ZERO
    };
    addCounter =()=>{
        const {increment}=this.props.action;
        increment();
    };
    resetFunction = ()=>{
        const {reset} =this.props.action;
        reset();
    };
    decCounter =()=>{
       const {decrement} =this.props.action;
       decrement();
    };
  render() {
      const {decrement} =this.props.action;
      //const {count} = this.props.state;
      console.log("counter value => ", this.props);
    return (
      <div className="App">
          <span>{this.props.counter}</span>
       <button onClick={this.addCounter}>Add Counter</button>
       <button onClick={decrement}>Decrement Counter</button>
       <button onClick={this.resetFunction}> Reset</button>
      </div>
    );
  }
}

export default App;
