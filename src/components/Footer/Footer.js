import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="copyright">
                    <span className="fa fa-copyright m-1" />
                    All Rights reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;
