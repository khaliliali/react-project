import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import PhApp from './components/Photowall/PhApp';
import BlogPosts from './components/Blog/BlogPosts';
import Footer from './components/footer/footer';

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <Navbar />
                    <BrowserRouter>
                        <Route path="/blog" component={BlogPosts} />
                        <Route path="/photowall" component={PhApp} />
                        <Route path="/" />
                    </BrowserRouter>
                    <Footer />
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;
