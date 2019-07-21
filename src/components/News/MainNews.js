import React, { Component } from 'react';
import NewsList from './NewsList';
import SideNews from './SideNews';
import { Card, CardText, Row, Col } from 'reactstrap';
import './News.css';

class MainNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news1: {
                type: 'everything',
                query: 'q=apple'
            },
            news2: {
                type: 'top-headlines',
                query: 'country=us&category=business'
            },
            news3: {
                type: 'top-headlines',
                query: 'category=business'
            }
        };
    }

    render() {
        return (
            <Row>
                <Col sm="8">
                    <CardText className="font">Top Headlines</CardText>
                    <Card body>
                        <NewsList news={this.state.news1} />
                    </Card>
                </Col>
                <Col sm="4">
                    <CardText className="font">Everything</CardText>
                    <Card body>
                        <SideNews news={this.state.news3} />
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default MainNews;
