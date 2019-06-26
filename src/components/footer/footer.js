import React from 'react';

const Footer = () => {
    return (
        <footer className="navbar navbar-dark fixed-bottom bg-dark col-md-12 ml-sm-auto col-lg-12 px-12 shadow">
            <div className="copyright">
                <span className="fa fa-copyright m-1" />
                All rights reserved.
            </div>
            <div className="socialmedia float-right">
                <a className="fa fa-instagram m-1" href="http://google.com" />
                <a
                    className="fa fa-facebook-official m-1"
                    href="http://google.com"
                />
                <a className="fa fa-instagram m-1" href="http://google.com" />
            </div>
        </footer>
    );
};

export default Footer;
