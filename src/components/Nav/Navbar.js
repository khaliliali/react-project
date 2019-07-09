import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Navbar extends Component {
    render() {
        const {
            isAuthenticated,
            login,
            logout,
            userHasScopes
        } = this.props.auth;
        return (
            <nav className="site-nav navbar navbar-expand bg-dark  navbar-dark fixed-top">
                <div className="container-fluid">
                    <div className="col-md-3 col-sm-3">
                        <Link to="/" className="navbar-brand">
                            React Project
                        </Link>
                    </div>
                    {/* <SearchBar /> */}

                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <Link className="nav-item nav-link" to="/photowall">
                                Photowall
                            </Link>
                        </li>
                        <li className="nav-item text-nowrap">
                            <Link className="nav-item nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item text-nowrap">
                            <Link className="nav-item nav-link" to="/gifs">
                                Gifs
                            </Link>
                        </li>
                        <li className="nav-item text-nowrap">
                            <Link className="nav-item nav-link" to="/news">
                                News(Api)
                            </Link>
                        </li>
                        {/* <li className="nav-item text-nowrap">
                            <Link className="nav-item nav-link" to="/login">
                                Log in
                            </Link>
                        </li> */}
                        <li className="nav-item text-nowrap">
                            <Link className="nav-item nav-link" to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item text-nowrap">
                            <Link className="nav-item nav-link" to="/public">
                                Public
                            </Link>
                        </li>
                        {isAuthenticated() && (
                            <li>
                                <Link to="/private">Private</Link>
                            </li>
                        )}
                        {isAuthenticated() && userHasScopes(['read:courses']) && (
                            <li>
                                <Link to="/courses">Courses</Link>
                            </li>
                        )}
                        <li>
                            <button
                                onClick={isAuthenticated() ? logout : login}
                            >
                                {isAuthenticated() ? 'Log Out' : 'Log In'}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
