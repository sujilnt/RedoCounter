import React, { Component } from 'react';
import './App.css';
const Number_ZERO = 0;
class App extends Component {
    state={
        count:Number_ZERO
    };
    addCounter =()=>{
        this.setState((prevstate,props)=>{
            return {
                count: prevstate.count+1
            };
        });
    };
    reset = ()=>{
        this.setState(()=>{
            return {
                count: Number_ZERO
            }
        })
    };
  render() {
      const {count} =this.state;
      console.log("counter value => ", count);
    return (
      <div className="App">
       <button onClick={this.addCounter}>Add Counter</button>
       <button onClick={this.reset}> Reset</button>
      </div>
    );
  }
}

export default App;
