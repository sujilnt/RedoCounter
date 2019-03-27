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
        console.log(this.props);
    };
    reset = ()=>{
        this.setState(()=>{
            return {
                count: Number_ZERO
            }
        })
    };
  render() {
      //const {count} =this.state;
      //const {count} = this.props.state;
      console.log("counter value => ", this.props);
    return (
      <div className="App">
          <span>{this.props.counter}</span>
       <button onClick={this.addCounter}>Add Counter</button>
       <button onClick={this.reset}> Reset</button>
      </div>
    );
  }
}

export default App;
