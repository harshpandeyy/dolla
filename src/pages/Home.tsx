import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection/index';

export default class index extends Component {
    state: {
        isOpen: boolean;
    };
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <>
                <Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />
                <Navbar toggle={this.toggle} />
                <HeroSection />
            </>
        );
    }
}
