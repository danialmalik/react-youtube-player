import React from 'react';
import propTypes from 'prop-types';


const InputField = ({onBlur, onChangeHandler, value, text}) => {
    return (
        <input
            className="col-sm-10"
            onChange={onChangeHandler}
            placeholder={text}
            onBlur={onBlur}
            value={value}
        >
        </input>
    );
}


InputField.propTypes = {
    onBlur: propTypes.func,
    text: propTypes.string,
    value: propTypes.string,
    onChangeHandler: propTypes.func
}


export default InputField;
