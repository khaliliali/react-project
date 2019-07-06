import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import PhApp from './components/Photowall/PhApp';
import BlogPosts from './components/Blog/BlogPosts';
import Footer from './components/footer/footer';
import Login from './components/Authorization/Login';
import MainGif from './components/Gifs/MainGif';
import MainNews from './components/News/MainNews';

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
                        <Route path="/gifs" component={MainGif} />
                        <Route path="/news" component={MainNews} />
                        <Route path="/login" component={Login} />
                        <Route path="/" />
                    </BrowserRouter>
                    <Footer />
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;
