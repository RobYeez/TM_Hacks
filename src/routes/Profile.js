import React from 'react';
import Navbarin from '../components/Navbarin.js';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import events from '../images/events.jpg';
import logo from '../images/logoz.svg';
export default class Profile extends React.Component {

    ProfilePage() {
        return (
            <React.Fragment>
                {/*<Navbarin handleLogout={this.handleLogout}/>*/}
                <div style={{ width: '100%', height: '60px', background: '#136fdc'}}>
                    <img src={ logo } style={{ marginTop: '5px', marginBottom: '5px'}}/>
                </div>
                <div style={{ marginTop: '50px', marginLeft: '5%', width: '100%' }}><h1>Account Overview</h1></div>
                <div style={{ width: '30%', float: 'left', marginLeft: '5%',}}>
                    <Card style={{ marginTop: '20px' }}>
                        <Card.Body>
                            <Card.Title><h3>Runwei Lin</h3></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fan Since 2019</Card.Subtitle>
                            <ListGroup variant="flush">
                                <ListGroup.Item>My Tickets</ListGroup.Item>
                                <ListGroup.Item>My Listings</ListGroup.Item>
                                <ListGroup.Item>Favorites</ListGroup.Item>
                                <ListGroup.Item>Settings</ListGroup.Item>
                                <ListGroup.Item>Payment Options</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginTop: '20px' }}>
                        <Card.Body>
                            <Card.Title>We’re Here to Help</Card.Title>
                            <Card.Text>
                                Have questions about your account? Visit our Help Center to quickly find the answers you need, browse popular topics, and more ways to get in touch.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ width: '55%', float: 'right', marginLeft: '5%', marginRight: '5%' }}>
                    <Card style={{ marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Title>Your Reward Activities</Card.Title>
                            <Card.Body>
                                <div><ProgressBar now={65} /></div>
                                <div style={{ float: 'left', marginTop:'10px' }}>50</div>
                                <div style={{ float: 'right', marginTop:'10px' }}>100</div>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Title>Sell Your Tickets on Ticketmaster</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">The Safest Way to Sell Your Tickets. Only With Ticketmaster.</Card.Subtitle>
                            <Card.Text>
                                Sell your tickets in a safe and simple way, and instantly reach millions of fans who need seats.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Title>Events We Think You’ll Love</Card.Title>
                            <img src={ events } style={{ width: '100%'}}/>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        );
    }

    render() {
        return this.ProfilePage();
    }
}
