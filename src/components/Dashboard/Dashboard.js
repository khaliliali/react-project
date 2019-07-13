import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        const { isAuthenticated, login } = this.props.auth;
        return (
            <div className="photo_top_title">
                <h1>Home</h1>
                {isAuthenticated() ? (
                    <Link to="/profile">Profile is here</Link>
                ) : (
                    <button onClick={login}>Login</button>
                )}
            </div>
        );
    }
}

export default Home;
