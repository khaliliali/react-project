import React, { Component } from 'react';
import NewsList from './NewsList';
import SideNews from './SideNews';
import SearchForm from '../Gifs/SearchForm';

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
                            <div className="main-header">
                                <div className="inner">
                                    <h1 className="main-title">
                                        Search Top Headlines
                                    </h1>
                                    {/* <SearchForm onSearch={this.performSearch} /> */}
                                </div>
                            </div>
                            <NewsList news={this.state.news1} />
                            <NewsList news={this.state.news2} />
                        </div>
                        <div className="col s4">
                            <div className="main-header">
                                <div className="inner">
                                    <h1 className="main-title">
                                        Search Everything
                                    </h1>
                                    {/* <SearchForm onSearch={this.performSearch} /> */}
                                </div>
                            </div>
                            <SideNews news={this.state.news3} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainNews;
