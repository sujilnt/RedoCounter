import React from "react";
import styled from "styled-components/macro";
import PropTypes from 'prop-types';
const Button = (props)=>{
	const ButtonStyles = styled.div`
	    background: ${props => props.primary ? "palevioletred" : "white"};
	    color: ${props => !props.primary ? "palevioletred" : "white"};
        display: inline-flex;
        font-size: 1em;
        margin: .30em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        :hover{
          background:  ${props => !props.primary ? "palevioletred" : "white"};;
          color: ${props => props.primary ? "palevioletred" : "white"};
          cursor:pointer;
        }
        :active{
          background:  ${props => props.primary ? "#cf70db" : "white"};;
          color: ${props => !props.primary ? "#cf70db" : "white"};
        }
	`;
	
	return(
		<ButtonStyles onClick={props.onClick} primary={props.primary}>{props.buttonText}</ButtonStyles>
	);
};
Button.defaultProps={
	primary: false
};
Button.propTypes={
	onClick: PropTypes.func.isRequired,
	primary: PropTypes.bool,
	buttonText: PropTypes.string.isRequired
};
export default Button;
