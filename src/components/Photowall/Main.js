import React, { Component } from 'react';
// import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
// import { removePost } from '../../redux/actions';
import Single from './Single';
import './Photowall.css';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/photowall">PhotoWall</Link>
                </h1>
                <Route
                    exact
                    path="/photowall"
                    render={() => (
                        <div>
                            <Photowall {...this.props} />
                        </div>
                    )}
                />

                <Route
                    path="/photowall/AddPhoto"
                    render={({ history }) => (
                        <AddPhoto {...this.props} onHistory={history} />
                    )}
                />
                <Route
                    path="/photowall/single/:id"
                    render={params => <Single {...this.props} {...params} />}
                />
            </div>
        );
    }
}

export default Main;
