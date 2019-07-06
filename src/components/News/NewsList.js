import React, { Component } from 'react';
import NewsSingle from './NewsSingle';
import NewsError from './NewsError';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${
            this.props.news.query
        }&apiKey=6d357ba22b9f4f37bc7ad5b6d6dbc909`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    news: data.articles
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            });
    }

    renderItems() {
        if (!this.state.error) {
            return this.state.news.map(item => (
                <NewsSingle key={item.url} item={item} />
            ));
        } else {
            return <NewsError />;
        }
    }

    render() {
        return <div className="row">{this.renderItems()}</div>;
    }
}

export default NewsList;
