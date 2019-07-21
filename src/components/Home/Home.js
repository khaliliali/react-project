import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isAuthenticated, userHasScopes } = this.props.auth;

        return (
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>PhotoWall</CardTitle>
                        <CardText>
                            You can add/delete/comment photos by input url.
                        </CardText>
                        <Button href="/photowall">photowall</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Blog</CardTitle>
                        <CardText>read data from a file.</CardText>
                        <Button href="/blog">Blog</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Gifs</CardTitle>
                        <CardText>Load Data from rendom API.</CardText>
                        <Button href="/gifs">Gifs</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>News</CardTitle>
                        <CardText>
                            include 2types of news categorized by: API
                        </CardText>
                        <Button href="/news">News</Button>
                    </Card>
                </Col>
                {isAuthenticated() && (
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Private</CardTitle>
                            <CardText>
                                You can Just see this when you sign up.
                            </CardText>
                            <Button href="/private">Private</Button>
                        </Card>
                    </Col>
                )}
                {isAuthenticated() && userHasScopes(['read:courses']) && (
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Courses</CardTitle>
                            <CardText>
                                You can Just see this when you sign up.
                            </CardText>
                            <Button href="/courses">Courses</Button>
                        </Card>
                    </Col>
                )}
            </Row>
        );
    }
}
export default Home;
