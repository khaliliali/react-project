import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import GifList from './GifList';

export default class MainGif extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
        // axios
        //     .get(
        //         `http://api.giphy.com/v1/gifs/trending?api_key=KNKk31Dmxd3i38k260NeeSQDBKlIXnVH`
        //     )
        //     .then(response => {
        //         this.setState({ gifs: response.data.data });
        //     })
        //     .catch(error => {
        //         console.log('Error ', error);
        //     });
        // ---------
        // fetch(
        //     `http://api.giphy.com/v1/gifs/trending?api_key=KNKk31Dmxd3i38k260NeeSQDBKlIXnVH`
        // )
        //     .then(response => response.json())
        //     .then(responseData => {
        //         this.setState({ gifs: responseData.data });
        //     })
        //     .catch(error => {
        //         console.log('Error ', error);
        //     });
    }

    performSearch = (query = 'dogs') => {
        axios
            .get(
                `http://api.giphy.com/v1/stickers/search?q=${query}&limit=5&api_key=KNKk31Dmxd3i38k260NeeSQDBKlIXnVH`
            )
            .then(response => {
                this.setState({
                    gifs: response.data.data,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error ', error);
            });
    };

    render() {
        console.log(this.state.gifs);

        return (
            <div className="photo_top_title">
                <div className="main-header">
                    <div className="inner">
                        <h1 className="main-title">GifSearch</h1>
                        <SearchForm onSearch={this.performSearch} />
                    </div>
                </div>
                <div className="main-content">
                    {this.state.loading ? (
                        <p>Loading</p>
                    ) : (
                        <GifList data={this.state.gifs} />
                    )}
                </div>
            </div>
        );
    }
}
