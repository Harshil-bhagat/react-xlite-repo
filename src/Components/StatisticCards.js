import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import './comp.css';

export function StatisticCards(props) {
    return(
    <div className="row" id="cards">
        <div className="col-lg-6">
                    <Card className="design">
                        <Card.Header>Personal Data</Card.Header>
                        <ListGroup className="ListG" variant="flush" style={{backgroundColor: "#52796f"}}>
                                <ListGroup.Item className="designList">My Address <span>{props.state.account}</span></ListGroup.Item>
                                <ListGroup.Item className="designList">Balance<span>{props.state.accountBalance}</span></ListGroup.Item>
                                <ListGroup.Item className="designList">Deposit</ListGroup.Item>
                                <ListGroup.Item className="designList">Withdraw</ListGroup.Item>
                                <ListGroup.Item className="designList">Invitation Link</ListGroup.Item>
                                <ListGroup.Item className="designList">Direct Partners</ListGroup.Item>
                                <ListGroup.Item className="designList">Total Deposit by Direct</ListGroup.Item>
                                <ListGroup.Item className="designList">Total Team</ListGroup.Item>
                            </ListGroup>
                    </Card> 
        </div> 

        <div className="col-lg-6">
                    <Card className="design">
                        <Card.Header>Income Figures</Card.Header>
                        <ListGroup variant="flush">
                                <ListGroup.Item className="designList">Level Income</ListGroup.Item>
                                <ListGroup.Item className="designList">Daily Income Percentage</ListGroup.Item>
                                <ListGroup.Item className="designList">Daily Income Distribution</ListGroup.Item>
                                <ListGroup.Item className="designList">Level Statistics</ListGroup.Item>
                                <ListGroup.Item className="designList">Income From Direct</ListGroup.Item>
                                <ListGroup.Item className="designList">Total Income</ListGroup.Item>
                                <ListGroup.Item className="designList">Founder Income</ListGroup.Item>
                                <ListGroup.Item className="designList">Co-founder Income</ListGroup.Item>
                            </ListGroup>
                    </Card> 
        </div>
    </div>
       
    )
}


