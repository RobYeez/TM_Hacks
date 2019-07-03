import React from 'react';
import Navbarin from '../components/Navbarin.js';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container, Col, Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

import GridLayout from 'react-grid-layout';
import CreditCardInput from 'react-credit-card-input';
import Venti from '../images/aventi.png';
import logo from "../images/logoz.svg";
// import points from './pointcaculator';

export default class Profile extends React.Component {

    LoggedInPage() {
        return (
            <div>
                <Navbarin/>
                <div id="loggedInDiv">
                    <br/>
                    <Container>
                            <GridLayout className="layout" cols={3} rowHeight={380} width={1200}>

                            <Card key="payment" data-grid={{x: 0, y: 0, w: 2, h: 1.2, static: true}}>
                        <Card.Body style={{padding:"20px 20px 20px 20px"}}>
                                <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="validationCustom01">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="validationCustom02">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Someone Save me..." />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, ...please" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>CA</option>
                                        <option>ETC.</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Credit Card</Form.Label>

                                        <div style={{border:"1px solid #D3D3D3"}}>
                                            <CreditCardInput/>
                                        </div>
                                    </Form.Group>
                            </Form.Row>

                        </Form>
                        </Card.Body>
                        <br/>
                    </Card>

                    <Card  key="Purchase List" data-grid={{x: 2, y: 0, w: 1, h: 1.2, static: true}}>
                    <Card.Body>
                        <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>SEC: 31</th>
                            <th>ROW: 21</th>
                            <th>SEAT: 14</th>
                        </tr>
                        </thead>
                    </Table>
                        <div align='center' style={{padding:"5px"}}>
                        <img src={Venti} width='200' height='125' ></img>
                        </div>
                    <div align='center'>
                        <h5>- - - - - - - Order Summary - - - - - - -</h5>
                    </div>
                    <p>1 Verfied Ticket - $127.82 x 1 = $127.82</p>
                        {/*<p>Estimated Points: {points} </p>*/}
                    <p>Fees: $17.65 </p>
                    <p>Total: $145.47</p>
                        <Form>
                    <p>Estimated Points Gained: 0.09</p>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Card.Body>
                    </Card>
                        </GridLayout>
                    </Container>
                </div>
            </div>

        );
    }


    render() {
        return this.LoggedInPage();
    }
}
