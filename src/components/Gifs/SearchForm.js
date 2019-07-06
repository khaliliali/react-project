import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        searchText: ''
    };
    onSearchChange = event => {
        this.setState({ searchText: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.query.value);
        event.currentTarget.reset();
    };
    render() {
        return (
            <div className="row">
                <form
                    className="search-form container"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        style={{ color: 'green' }}
                        type="search"
                        onChange={this.onSearchChange}
                        name="name"
                        ref={input => (this.query = input)}
                        placeholder="type sth..."
                    />
                </form>
            </div>
        );
    }
}

export default SearchForm;
