import React from 'react';
import Navbarin from '../components/Navbarin.js';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container, Col, Row} from 'react-bootstrap';
export default class Profile extends React.Component {

    LoggedInPage() {
        return (
            <div>
                <Navbarin handleLogout={this.handleLogout}/>
                <div id="loggedInDiv">
                    <br/>
                    <Container>
                        <br/>
                        <h1>
                            Fix Profile
                        </h1>
                        <br/>
                    </Container>
                </div>
            </div>
        );
    }

    render() {
        return this.LoggedInPage();
    }
}
