import React, { Component } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";



export default class App extends Component{
  render() {
    return (
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </Router>
    );
  }
}
