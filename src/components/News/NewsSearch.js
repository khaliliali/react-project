import React, { Component } from 'react';

class NewsSearch extends Component {
    state = {
        searchNewsText: ''
    };
    onSearchChange = event => {
        this.setState({ searchNewsText: event.target.value });
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
                        placeholder="Type Here"
                    />
                </form>
            </div>
        );
    }
}

export default NewsSearch;
