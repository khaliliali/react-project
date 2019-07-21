import React, { Component } from 'react';
import './MyNav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

class MyNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {
            isAuthenticated,
            login,
            logout,
            userHasScopes
        } = this.props.auth;

        return (
            <Navbar color="dark" light expand="md">
                <NavbarBrand className="Branding" href="/">
                    React Project
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/photowall">Photowall</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/gifs">Gifs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/news">News(Api)</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/public">Public</NavLink>
                        </NavItem>
                        {isAuthenticated() && (
                            <NavItem>
                                <NavLink href="/private">Private</NavLink>
                            </NavItem>
                        )}
                        {isAuthenticated() && userHasScopes(['read:courses']) && (
                            <NavItem on>
                                <NavLink href="/courses">Courses</NavLink>
                            </NavItem>
                        )}
                        <Button
                            className="topheight"
                            onClick={isAuthenticated() ? logout : login}
                        >
                            {isAuthenticated() ? 'Log Out' : 'Log In'}
                        </Button>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default MyNav;
