import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import NewsError from './NewsError';

class SideNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${
            this.props.news.query
        }&apiKey=6d357ba22b9f4f37bc7ad5b6d6dbc909`;

        axios
            .get(url)
            .then(response => {
                this.setState({
                    sidenews: response.data.articles
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
            return this.state.sidenews.map(item => (
                <SingleSide key={item.url} item={item} />
            ));
        } else {
            return <NewsError />;
        }
    }

    render() {
        return <div className="row">{this.renderItems()}</div>;
    }
}

export default SideNews;
