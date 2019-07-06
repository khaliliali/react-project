import React, { Component } from 'react';
import NewsList from './NewsList';
import SideNews from './SideNews';

class MainNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news1: {
                type: 'everything',
                query: 'q=apple'
            },
            news2: {
                type: 'top-headlines',
                query: 'country=us&category=business'
            },
            news3: {
                type: 'top-headlines',
                query: 'category=business'
            }
        };
    }

    render() {
        return (
            <div className="photo_top_title">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col s8">
                            <NewsList news={this.state.news1} />
                            <NewsList news={this.state.news2} />
                        </div>
                        <div className="col s4">
                            <SideNews news={this.state.news3} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainNews;
