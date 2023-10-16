import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection/index';
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default class Home extends Component{
    state:{
        isOpen:any;
    }
     constructor(props:any) {
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
                <InfoSection {...homeObjOne}/>
                <InfoSection {...homeObjTwo}/>
                <Services/>
                <InfoSection {...homeObjThree}/>
                <Footer/>

            </>
        );
    }
}


