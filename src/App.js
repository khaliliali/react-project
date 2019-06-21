import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
import Main from './components/Photowall/Main';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Main />
            </React.Fragment>
        );
    }
}

export default App;
