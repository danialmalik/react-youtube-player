import React from 'react';
import propTypes from 'prop-types';

import Suggestion from './Suggestion';

import './SuggestionsList.css';


const SuggestionsList = ({suggestions, suggestionClickHandler}) =>  {
    let suggestionsList = [];
    if (suggestions) {
        suggestionsList = suggestions.map(function (title, index) {
            return (
                <Suggestion
                    key={index}
                    suggestionClickHandler={suggestionClickHandler}
                    title={title}
                />
            );
        })
    }

    return (
        <ul className="suggestions">
            {suggestionsList}
        </ul>
    )
}


SuggestionsList.propTypes = {
    suggestions: propTypes.array,
    suggestionClickHandler: propTypes.func,
}


export default SuggestionsList;

