import React from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="site-nav navbar navbar-expand bg-dark  navbar-dark fixed-top">
            <div className="container-fluid">
                <div className="col-md-3 col-sm-3">
                    <a href="/" className="navbar-brand">
                        React Project
                    </a>
                </div>
                {/* <SearchBar /> */}

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-item nav-link" href="/photowall">
                            Photowall
                        </a>
                    </li>
                    <li className="nav-item text-nowrap">
                        <a className="nav-item nav-link" href="/blog">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item text-nowrap">
                        <a className="nav-item nav-link" href="/gifs">
                            Gifs
                        </a>
                    </li>
                    <li className="nav-item text-nowrap">
                        <a className="nav-item nav-link" href="/news">
                            News(Api)
                        </a>
                    </li>
                    <li className="nav-item text-nowrap">
                        <a className="nav-item nav-link" href="/login">
                            Log in
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
