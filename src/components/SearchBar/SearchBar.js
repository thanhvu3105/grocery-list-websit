import React, { useState, useEffect} from 'react';

class SearchBar extends React.Component{
    state = { term: ""};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        //this.props.onTermSubmitPROP(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form
                    className="ui form"
                    >
                    <div className="field"> 
                        <label> Item Search</label>
                        <input
                        type="text" placeholder="Seach item"
                        value={this.state.term}
                        onChange={this.onInputChange}>
                        </input>
                        </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;
