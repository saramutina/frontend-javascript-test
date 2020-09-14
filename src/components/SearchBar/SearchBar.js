import React from 'react';

class SearchBar extends React.Component {
    handleChange = event => {
        this.props.changeSearchInfo(event.target.value)
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        this.props.filter();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" value={this.props.searchInfo} onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
            </div>

        )
    }
}

export default SearchBar;