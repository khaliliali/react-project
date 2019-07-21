import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import PhApp from './components/Photowall/PhApp';
import BlogPosts from './components/Blog/BlogPosts';
import Footer from './components/Footer/Footer';
import Login from './components/Authorization/Login';
import MainGif from './components/Gifs/MainGif';
import MainNews from './components/News/MainNews';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Callback from './components/Authorization/Callback';
import Profile from './components/Dashboard/Profile';
import Public from './components/TestAuth/Public';
import Private from './components/TestAuth/Private';
import Courses from './components/TestAuth/Courses';
import PrivateRoute from './components/TestAuth/PrivateRoute';
import AuthContext from './AuthContext';
import MyNav from './components/Nav/MyNav';
import './App.css';
import Home from './components/Home/Home';

const store = createStore(rootReducer);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: new Auth(this.props.history)
        };
    }

    render() {
        const { auth } = this.state;

        return (
            <React.Fragment>
                <AuthContext.Provider value={auth}>
                    <Provider store={store}>
                        <Router>
                            <div className="App">
                                <MyNav auth={auth} />
                                <div className="contentArea">
                                    <Route path="/blog" component={BlogPosts} />
                                    <Route
                                        path="/photowall"
                                        component={PhApp}
                                    />
                                    <Route path="/gifs" component={MainGif} />
                                    <Route path="/news" component={MainNews} />
                                    <Route path="/login" component={Login} />
                                    <Route
                                        path="/"
                                        exact
                                        render={props => (
                                            <Home auth={auth} {...props} />
                                        )}
                                    />
                                    <Route
                                        path="/callback"
                                        render={props => (
                                            <Callback auth={auth} {...props} />
                                        )}
                                    />
                                    <PrivateRoute
                                        path="/profile"
                                        component={Profile}
                                    />
                                    <Route path="/public" component={Public} />
                                    <PrivateRoute
                                        path="/private"
                                        component={Private}
                                    />
                                    <PrivateRoute
                                        path="/courses"
                                        component={Courses}
                                        scopes={['read:courses']}
                                    />
                                    <Route
                                        path="/dashboard"
                                        render={props => (
                                            <Dashboard auth={auth} {...props} />
                                        )}
                                    />
                                </div>
                            </div>
                        </Router>
                        <Footer />
                    </Provider>
                </AuthContext.Provider>
            </React.Fragment>
        );
    }
}

export default App;
