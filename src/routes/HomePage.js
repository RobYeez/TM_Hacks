import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import {GetUserData, GetUser, Logout, SendTokenToServer} from "../User/UserFunctions.js"
import homebkgrnd from '../images/logoz.svg';
// import firebase from "../firebase.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarin from '../components/Navbarin.js';
// import Navbarout from '../components/Navbarout.js';

//Landing page
export default class HomePage extends React.Component {
    LoggedInPage() {
        return (
            <div>
                <Navbarin handleLogout={this.handleLogout}/>
                <br />
                <div align='center'><h1>Welcome</h1></div>
                <div align='center'><h4>to</h4></div>
                <div align='center'><img src={homebkgrnd} width='200' height='25'/></div>

            </div>
        );
    }

    render() {
            return this.LoggedInPage();
    }
}
