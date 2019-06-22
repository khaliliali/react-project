import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
import Main from './components/Photowall/Main';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
