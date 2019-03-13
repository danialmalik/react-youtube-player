import React from 'react';
import propTypes from 'prop-types';


const Suggestion = ({title, suggestionClickHandler}) => {
    return (
        <li
            className="suggestion-item"
            value={title}
            onMouseDown={()=>suggestionClickHandler(title)}>
            {title}
        </li>
    )
}


Suggestion.propTypes = {
    title: propTypes.string,
    suggestionClickHandler: propTypes.func,
}


export default Suggestion;
