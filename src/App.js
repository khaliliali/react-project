import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
// import Main from './components/Photowall/Main';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import PhApp from './components/Photowall/PhApp';

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <Navbar />
                    <BrowserRouter>
                        <PhApp />
                    </BrowserRouter>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;
