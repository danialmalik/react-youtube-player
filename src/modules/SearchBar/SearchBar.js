import React, { Component } from 'react';
import propTypes from 'prop-types';

import InputField from '../shared/InputField/InputField';
import Button from '../shared/Button/Button';
import SuggestionsList from '../SuggestionsList/SuggestionsList';

import APICaller from '../services/APICaller';
import { YOUTUBE_API_SEARCH } from '../constants/api_constants';

import { getSugggestionsArray } from './helper';

import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: '',
            suggestions: [],
        };
    }

    getSuggestions = query => {
        APICaller(query, YOUTUBE_API_SEARCH)
            .then(response => {
                const suggestions = getSugggestionsArray(response);
                this.setState({
                    suggestions,
                })
            });
    }

    onChangeHandler = event => {
        const searchKey = event.target.value;
        this.setState({
            searchKey
        });

        this.getSuggestions(searchKey);
    }

    searchSubmitHandler = (event) => {
        event.preventDefault();
        this.props.searchHandler(this.state.searchKey);
        this.setState({
            suggestions: []
        })
    }

    suggestionClickHandler = key => {
        const searchKey = key;
        const suggestions = [];
        this.setState({
            searchKey,
            suggestions
        });
        this.props.searchHandler(searchKey);
    }

    handleOnBlur = (event) => {
        this.setState({
            suggestions: []
        });
    }


    render() {
        const suggestions = this.state.suggestions.length ?
            (<SuggestionsList
                suggestions={this.state.suggestions}
                suggestionClickHandler={key => this.suggestionClickHandler(key)} />) :
            null;

        return (
            <form className="form" onSubmit={this.searchSubmitHandler}>
                <div className="from-group input-group row search-row" >
                    <InputField value={this.state.searchKey}
                        text='Enter text'
                        onChangeHandler={this.onChangeHandler}
                        onBlur={this.handleOnBlur} />
                    <div className="input-group-append">
                        <Button text='search' type='submit' />
                    </div>
                    {suggestions}
                </div>
            </form>
        );
    }
}


SearchBar.propTypes = {
    searchHandler: propTypes.func,
}


export default SearchBar;
