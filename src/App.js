import React from 'react';
import Button from "./Component/Button/Button";
import styled from "styled-components/macro";

const APP = (props)=>{
    const Container = styled.div`
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      margin-top: 120px;
    `;
    const CounterDisplay = styled.div`
      border: 2px solid palevioletred;
      margin: 0.15em;
      width: 150px;
      text-align:center;
      padding: 0.5em;
      border-radius: 2px;
      font-size: 20px;
      font-weight:bold;
    `;
    const {decrement,increment,reset} =props.action;
    return (
        <React.Fragment >
            <Container>
                <CounterDisplay>{props.counter}</CounterDisplay>
                <Button onClick={increment} buttonText="Increment" primary />
                <Button onClick={decrement} buttonText="Decrement" primary/>
                <Button onClick={reset} buttonText="Reset" />
            </Container>
        </React.Fragment>
    );
};

export default APP;
