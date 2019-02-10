import React, { Component } from "react";
import { ProfilePage } from "../Profile/ProfilePage";
import { NavBar } from "../Navbar/NavBar";
import "./App.css";

class App extends Component {
    render() {
        return ( <
            div className = "App" >

            <
            div className = "Profile" >
            <
            ProfilePage / >
            <
            /div>

            <
            div className = "NavBar" >
            <
            NavBar / >
            <
            /div>

            <
            /div>
        );
    }
}

export default App;