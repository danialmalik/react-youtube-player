import React from 'react';
import propTypes from 'prop-types';


const Button = ({onClickHandler, type, text}) => {
    return (
        <button className="btn btn-primary"
        onClick={onClickHandler}
        type={type}
        >{text}</button>
    )
}


Button.propTypes = {
    onClickHandler : propTypes.func,
    type: propTypes.string,
    text: propTypes.string,
}


export default Button;
