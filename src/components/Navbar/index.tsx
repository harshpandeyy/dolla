import React, { Component } from "react";
import { Nav, NavContainer, Navlogo,NavItem,Navlinks,MobileIcon, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

interface Props{
    toggle: () => void;
}

export default class index extends Component<Props> {
    render() {
        return (
            <>
                <Nav>
                    <NavContainer>
                        <Navlogo to="/">dolla</Navlogo>
                        <MobileIcon onClick={this.props.toggle}>
                            <i className ="fa-solid fa-bars"></i>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <Navlinks to="/about">About</Navlinks>
                            </NavItem>
                            <NavItem>
                                <Navlinks to="/discover">Discover</Navlinks>
                            </NavItem>
                            <NavItem>
                                <Navlinks to="/services">Services</Navlinks>
                            </NavItem>
                            <NavItem>
                                <Navlinks to="/signup">Sign Up</Navlinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/signin">
                                Sign in                        
                            </NavBtnLink>
                        </NavBtn>
                        
                    </NavContainer>
                </Nav>
            </>
        );
    }
}
